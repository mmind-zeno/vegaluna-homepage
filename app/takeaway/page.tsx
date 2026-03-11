import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Mittagsmenü TakeAway – vegAluna',
  description: 'Unser TakeAway ist beendet – Impressionen findest du in unserem Rückblick auf der Startseite.',
}

export default function TakeawayPage() {
  redirect('/#ueberblick')
}