import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Kochkurse & Workshops – vegAluna',
  description: 'Alle Infos zu unseren Kochkursen und Workshops findest du jetzt gebündelt auf der Startseite.',
}

export default function EventsPage() {
  redirect('/#events')
}