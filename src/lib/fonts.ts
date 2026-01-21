import { Metamorphous, Nova_Flat } from 'next/font/google'

// Configure fonts with proper subsets and display strategy
// Metamorphous - Used for main title "TECHNO MONASTERIES"
export const metamorphous = Metamorphous({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-metamorphous',
  weight: '400',
})

// Nova Flat - Used for page titles
export const novaFlat = Nova_Flat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nova-flat',
  weight: '400',
})
