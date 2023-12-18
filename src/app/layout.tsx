import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Work-Manager',
  description: 'Generated by create next app',
}

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-gradient-to-b overflow-hidden from-blue-400 to-blue-200 bg min-h-screen'>
        <Navbar/>
        {children}

        </div>
        <Footer/>
        
        </body>
    </html>
    </ClerkProvider>
  )
}
