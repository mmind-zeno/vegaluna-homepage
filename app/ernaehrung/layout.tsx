import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pflanzliche Ernährung – Nährstoff-Guide | vegAluna',
  description: 'Umfassender Guide zu B12, Eisen, Calcium, Vitamin D, Omega-3 bei veganer Ernährung. Wissenschaftlich fundiert, 100% pflanzlich.',
}

export default function ErnährungLayout({ children }: { children: React.ReactNode }) {
  return children
}
