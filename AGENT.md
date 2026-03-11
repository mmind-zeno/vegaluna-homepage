# AGENT – vegAluna Homepage

Dieses Dokument beschreibt, wie Agents (und Menschen) mit diesem Projekt arbeiten sollen – insbesondere das Deployment auf den Hetzner-Server.

## 1. Projektüberblick

- Framework: Next.js 14 (App Router)
- Build: Docker (Multi-Stage), `Dockerfile` im Projektroot
- Start: Container läuft auf Port **3000**, nach außen gemappt auf Port **3002** via `docker-compose.yml`.

## 2. Server / Infrastruktur

- **Server-IP:** `195.201.145.97`
- **SSH-Alias (lokal in `~/.ssh/config` empfohlen):**
  ```
  Host hetzner
    HostName 195.201.145.97
    User root
    IdentityFile C:/Users/zeno/.ssh/ssh-kimai-zeno
  ```
- **Installationspfad auf dem Server:** `/opt/vegaluna`
- **Port-Mapping:**
  - Container: `3000`
  - Host: `3002`
  - URL: `http://195.201.145.97:3002/`
- **Domain (nach Nginx/SSL-Einrichtung):** https://vegaluna.li und https://www.vegaluna.li

## 3. Docker / Compose

- **Dockerfile:**
  - Multi-Stage Build (`deps` → `builder` → `runner`)
  - `npm run build` im `builder`
  - `server.js` im `runner`, `EXPOSE 3000`, `ENV PORT=3000`, `HOSTNAME=0.0.0.0`

- **docker-compose.yml:**
  ```yaml
  services:
    webapp:
      build: .
      restart: unless-stopped
      ports:
        - "3002:3000"
  ```

## 4. Versionierung

- Projektversion in:
  - `package.json` → `"version": "0.x.y"`
  - `package-lock.json` (Root-Eintrag und `packages[""].version`)
- Sichtbare Version im Footer:
  - `components/layout/Footer.tsx` → Text wie `© 2025 vegAluna GmbH · v0.9.5`

**Konvention:** Bei inhaltlichen/visuellen Änderungen auf der Live-Seite die Patch-Version erhöhen (z. B. `0.9.5` → `0.9.6`) und die Footer-Version anpassen.

## 5. Deploy-Workflow (angelehnt an Skill `hetzner-nextjs-deploy`)

### 5.1 Vorbereitung lokal

1. **Version setzen**
   - `package.json` / `package-lock.json` auf neue Version anpassen.
   - Footer-Version in `Footer.tsx` aktualisieren (z. B. `v0.9.6`).

2. **Deploy-Ordner (Windows / PowerShell)**
   - Im Projektroot `vegaluna-homepage`:
   ```powershell
   if (Test-Path vegaluna-deploy-tmp) { Remove-Item -Recurse -Force vegaluna-deploy-tmp }
   New-Item -ItemType Directory -Path vegaluna-deploy-tmp | Out-Null
   robocopy . vegaluna-deploy-tmp /E /XD node_modules .next .git vegaluna-deploy-tmp /XF *.tar *.tar.gz /NFL /NDL /NJH /NJS
   ```

### 5.2 Upload auf den Server

- Mit SSH-Alias `hetzner`:
  ```bash
  scp -r vegaluna-deploy-tmp/* hetzner:/opt/vegaluna/
  ```
- Alternativ ohne Alias:
  ```bash
  scp -r vegaluna-deploy-tmp/* root@195.201.145.97:/opt/vegaluna/
  ```

### 5.3 Docker auf dem Server

Auf dem Server einloggen:

```bash
ssh hetzner
# oder: ssh root@195.201.145.97
```

Im Projektverzeichnis:

```bash
cd /opt/vegaluna
docker compose down 2>/dev/null || true
docker compose build --no-cache
docker compose up -d --force-recreate
```

Oder in einem Befehl von lokal:

```bash
ssh hetzner "cd /opt/vegaluna && docker compose down 2>/dev/null || true && docker compose build --no-cache && docker compose up -d --force-recreate"
```

### 5.4 Cleanup & Check

- Lokal:
  ```powershell
  Remove-Item -Recurse -Force vegaluna-deploy-tmp
  ```
- Im Browser prüfen:
  - `http://195.201.145.97:3002/`
  - Version im Footer stimmt mit `package.json` überein.

## 5.5 Anleitung für Agents – so funktioniert der Deploy autonom

Dieser Abschnitt beschreibt explizit, wie ein Agent den Deploy **vollautomatisch** durchführt – so, wie es auch manuell gemacht wird. Wichtig: Der Deploy läuft unter **Windows mit PowerShell**, nicht in einer Bash-Shell.

### 5.5.1 Grundprinzip

- Für **Dateioperationen** im Repo nutzt der Agent die Editor-Tools (kein `sed`, keine direkten Shell-Edits).
- Für **Deploy-Schritte** (robocopy, scp, ssh, docker compose) nutzt der Agent PowerShell-Befehle, die in einer Shell laufen, die Zugriff auf:
  - die SSH-Config mit `Host hetzner` und
  - einen ggf. bereits geladenen ssh-agent (vom Nutzer gestartet)
  haben.
- **Bash (Git Bash)** soll der Agent für ssh/scp vermeiden, weil:
  - Pfade unter Windows („C:\…“) schnell fehlschlagen,
  - Keys mit Leerzeichen im Dateinamen Probleme machen,
  - passwortgeschützte Keys ohne interaktive Eingabe zu `error in libcrypto` führen.

### 5.5.2 Schritte für einen autonomen Deploy (für Agents)

1. **Version konsistent setzen**
   - In `package.json`: `"version": "X.Y.Z"` setzen.
   - In `package-lock.json`:
     - Root-Eintrag (`"version": "X.Y.Z"`),
     - und im Block
       ```json
       "packages": {
         "": {
           "name": "vegaluna-homepage",
           "version": "X.Y.Z",
       ```
       ebenfalls auf `"X.Y.Z"` setzen.
   - In `components/layout/Footer.tsx`: Text wie `· vX.Y.Z` auf dieselbe Version bringen.

2. **Deploy-Ordner mit PowerShell bauen**
   - Arbeitsverzeichnis: Projektroot `vegaluna-homepage`.
   - PowerShell-Befehl (z. B. über das Shell-Tool):
     ```powershell
     cd C:\_DATA\600_github\vegaluna-homepage;
     if (Test-Path vegaluna-deploy-tmp) { Remove-Item -Recurse -Force vegaluna-deploy-tmp };
     New-Item -ItemType Directory -Path vegaluna-deploy-tmp | Out-Null;
     robocopy . vegaluna-deploy-tmp /E /XD node_modules .next .git vegaluna-deploy-tmp /XF *.tar *.tar.gz /NFL /NDL /NJH /NJS
     ```
   - Hinweis: Robocopy kann Exitcode 1 liefern, obwohl alles erfolgreich kopiert wurde – das ist ok.

3. **Upload nach Hetzner mit scp (PowerShell, SSH-Alias `hetzner`)**
   - Voraussetzung: In der lokalen `~/.ssh/config` ist konfiguriert:
     ```text
     Host hetzner
       HostName 195.201.145.97
       User root
     ```
     (optional `IdentityFile`, wenn gewünscht).
   - PowerShell-Befehl:
     ```powershell
     cd C:\_DATA\600_github\vegaluna-homepage;
     scp -r vegaluna-deploy-tmp\* hetzner:/opt/vegaluna/
     ```
   - Der Agent soll **kein** `-i <Key>` erzwingen, sondern die SSH-Config und den vorhandenen ssh-agent nutzen.

4. **Docker auf dem Server neu bauen und starten**
   - PowerShell-Befehl für den Agent:
     ```powershell
     ssh hetzner "cd /opt/vegaluna && docker compose down 2>/dev/null || true && docker compose build --no-cache && docker compose up -d --force-recreate"
     ```
   - Damit erledigt der Agent in einem Schritt:
     - Container stoppen,
     - Images ohne Cache neu bauen,
     - und den Container im Hintergrund neu starten.

5. **Cleanup**
   - Lokal in PowerShell:
     ```powershell
     cd C:\_DATA\600_github\vegaluna-homepage;
     Remove-Item -Recurse -Force vegaluna-deploy-tmp
     ```

6. **Check durch Agent (optional)**
   - Agent kann (falls Web-Zugriff erlaubt ist) die URL `http://195.201.145.97:3002/` abrufen und prüfen, ob im Footer die neue Version angezeigt wird.

### 5.5.3 Umgang mit passwortgeschütztem SSH-Key

Wenn ssh/scp fehlschlägt mit Meldungen wie:

- `Permission denied (publickey,password).`
- `Load key "...": error in libcrypto`

dann ist der verwendete SSH-Key sehr wahrscheinlich **passwortgeschützt** und wurde noch nicht im ssh-agent entsperrt.

**In diesem Fall soll der Agent:**

1. In der Antwort an den Nutzer klar sagen, dass:
   - der Key passwortgeschützt ist und
   - der Deploy ohne interaktive Passworteingabe nicht vollständig automatisierbar ist.
2. Den Nutzer bitten, im eigenen Terminal einmal auszuführen:
   ```powershell
   eval $(ssh-agent -s)    # ggf. in Git Bash
   ssh-add "C:\Users\zeno\.ssh\ssh-kimai-zeno"
   ```
   und das Passwort einzugeben.
3. Danach kann der Agent die Befehle aus 5.5.2 **Schritt 3 und 4** erneut ausführen; mit entsperrtem ssh-agent klappt der Zugriff dann meist ohne weitere Rückfragen.

**Alternative Fallback-Strategie für Agents:**

- Wenn trotz Hinweis kein automatischer SSH-Zugriff möglich ist, soll der Agent:
  - den Deploy-Ordner bauen (Schritt 2),
  - dem Nutzer die exakten Befehle für Upload und Docker-Start anzeigen:
    ```powershell
    scp -r vegaluna-deploy-tmp\* hetzner:/opt/vegaluna/
    ssh hetzner "cd /opt/vegaluna && docker compose down 2>/dev/null || true && docker compose build --no-cache && docker compose up -d --force-recreate"
    ```
  - und erklären, dass diese beiden Befehle im eigenen Terminal mit entsperrtem SSH-Key auszuführen sind.

## 6. .env / Secrets

Aktuell wird kein spezielles `.env`-Setup benötigt (reine Content-Seite).  
Wenn später Env-Variablen dazukommen:

- `.env` nur **auf dem Server** anlegen, niemals committen.
- Nach Änderungen: `docker compose up -d --force-recreate`, damit der Container die neuen Werte bekommt.

## 7. Verhalten für Agents

- **Dürfen:**
  - Inhalte in App & Komponenten bearbeiten
  - Version in `package.json` / `Footer.tsx` erhöhen
  - Deploy-Ordner `vegaluna-deploy-tmp` erstellen
  - via `scp` nach `/opt/vegaluna` deployen
  - `docker compose down/build/up -d` auf dem Server ausführen

- **Nicht dürfen:**
  - `.env`-Dateien ins Repo committen
  - SSH-Config oder Server-Firewall ändern
  - andere Projekte auf dem gleichen Server anfassen (z. B. Forklore, EU AI Act Hub)

## 8. Domain vegaluna.li / Nginx / SSL

- **Live-URL:** https://vegaluna.li und https://www.vegaluna.li (nach Einrichtung).
- **DNS:** A-Records für vegaluna.li und www.vegaluna.li zeigen auf 195.201.145.97 (bei 1ahosting gesetzt).
- **Wichtig für SSL:** Damit Let's Encrypt diesen Server erreicht, dürfen **vegaluna.li** und **www.vegaluna.li** nicht per AAAA auf den alten Hoster zeigen. In der DNS-Verwaltung (1ahosting) AAAA-Einträge für vegaluna.li (und ggf. www) entfernen oder auf Hetzner-IPv6 setzen. Sonst schlägt Certbot fehl.
- **Nginx:** Proxy von Port 80/443 auf die App (127.0.0.1:3002). Config im Repo: `nginx-vegaluna.conf` (inkl. `location /.well-known/acme-challenge/` für Certbot).
- **SSL:** Let's Encrypt via Certbot (`certbot --nginx -d vegaluna.li -d www.vegaluna.li`).

**Ersteinrichtung auf dem Server (einmalig):**
1. Nginx installieren (falls nicht vorhanden): `apt update && apt install -y nginx`
2. Config kopieren: `cp /opt/vegaluna/nginx-vegaluna.conf /etc/nginx/sites-available/vegaluna`
3. Aktivieren: `ln -sf /etc/nginx/sites-available/vegaluna /etc/nginx/sites-enabled/vegaluna`
4. Test & Reload: `nginx -t && systemctl reload nginx`
5. **Nach DNS-Anpassung (AAAA siehe oben):** `certbot --nginx -d vegaluna.li -d www.vegaluna.li --non-interactive --agree-tos --email hoi@vegaluna.li`
6. Firewall (falls aktiv): `ufw allow 443/tcp && ufw reload`

Bei jedem Deploy wird `nginx-vegaluna.conf` mit ausgerollt; Nginx-Config auf dem Server nur bei Änderung an der Domain/Proxy-Logik neu kopieren.

---

*Stand: v0.9.5 – bei Änderungen am Deploy-Prozess dieses Dokument mitanpassen.*
