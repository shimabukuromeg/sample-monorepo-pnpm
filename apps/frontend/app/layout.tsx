import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from 'next/link'
import { Icons } from "@/components/ui/icons"
import { FloatingButton } from '@/components/ui/floating-button'
import { GoogleTagManager } from './components/google-tag-manager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',

}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar className='flex flex-row justify-between'>
          <Link href="/">
            <div className='flex flex-row items-center'>
              <Icons.logo className="mr-1 h-14 w-14" />
              <p className='text-s tracking-widest font-bold'>あげあげ</p>
            </div>
          </Link>
          <MenubarMenu>
            <MenubarTrigger>Menu</MenubarTrigger>
            <MenubarContent>
              <Link href="/">
                <MenubarItem>Top</MenubarItem>
              </Link>

              <MenubarSeparator />
              <Link href="/members">
                <MenubarItem>
                  Members
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        {children}
        {modal}
        <FloatingButton />
      </body>
      <GoogleTagManager />
    </html>
  )
}
