import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Event-Catering – vegAluna',
  description: 'Unsere Catering-Impressionen und Infos findest du jetzt direkt auf der Startseite.',
}

export default function CateringPage() {
  redirect('/#catering')
}