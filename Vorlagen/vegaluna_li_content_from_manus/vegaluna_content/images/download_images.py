import json
import requests
import os

urls = [
    "https://www.vegaluna.li/wp-content/uploads/2023/12/Element-2@4x-80.jpg",
    "https://www.vegaluna.li/wp-content/uploads/slider/cache/33a25df881fea69be7d8f99c6e0e1a14/4_vegaluna_vegan_event_750kb-scaled.jpg",
    "https://www.vegaluna.li/wp-content/uploads/slider/cache/b633cbf5afade687b5e55f62372b9cab/vegaluna_bio-laden.jpg",
    "https://www.vegaluna.li/wp-content/uploads/slider/cache/86ef65279e2097d78ccc501e91598cb1/5_vegaluna_vegan_event_750kb-scaled.jpg",
    "https://www.vegaluna.li/wp-content/uploads/slider/cache/996f73e8a7d24e7aeb1c878d32e11353/8_vegaluna_vegan_event_bbq_750kb.jpg",
    "https://www.vegaluna.li/wp-content/uploads/slider/cache/79c9ed00d01dc8ec195b0093364f3924/7_vegaluna_vegan_event_750kb-scaled.jpg",
    "https://www.vegaluna.li/wp-content/uploads/slider/cache/01d62cb31bd9b722db3e58d6f2a06ae0/1_vegaluna_vegan_event__750kb-scaled.jpg",
    "https://www.vegaluna.li/wp-content/uploads/slider/cache/36c8e771479d29cd8610a2024bd4de78/6_vegaluna_vegan_event_750kb-scaled.jpg",
    "https://www.vegaluna.li/wp-content/uploads/slider/cache/76f6f91401f4135d70979729dde5a7dc/IMG_20220924_204317-scaled.jpg",
    "https://www.vegaluna.li/wp-content/uploads/2023/12/vegAluna_logo_ws-rund_570px.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/logo-sdg.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/Uni_Liechtenstein.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/Logo-Vaduz.jpg",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/logo-erlebe-vaduz.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/logo-Feldfreunde.jpg",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/logo-landesverwaltung-li.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/Logo_Liechtensteiner_Gesellschaft_Umweltschutz-1.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/logo-Formatio.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/Logo-Lenum.jpg",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/logo-olympic_committe.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/logo-cipra.jpg",
    "https://www.vegaluna.li/wp-content/uploads/2024/10/logo-ideenkanal.png",
    "https://www.vegaluna.li/wp-content/uploads/2024/03/Element-2-80.jpg",
    "https://www.vegaluna.li/wp-content/uploads/2022/08/Swissveg-Card-Partner_2020_2-Rabatt_500x150px_1-300x90.png"
]

for url in urls:
    try:
        filename = url.split('/')[-1]
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded: {filename}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")
