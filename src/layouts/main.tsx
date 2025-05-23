import type { PropsWithChildren } from 'react'

import { Link } from '@tanstack/react-router'

import { Header } from './header'

import { SidebarMenu } from '../components/menu/sidebar'
import { ScrollArea } from '../components/ui/scroll-area'

// @ts-expect-error assets/image
import logoLaucher from '../_assets/aerial-launcher-transparent.png'

import { whatIsThis } from '../lib/callbacks'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[var(--sidebar-width-md)_1fr] lg:grid-cols-[var(--sidebar-width-lg)_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col">
          <div className="app-draggable-region flex h-[var(--header-height)] items-center justify-center border-b px-4 shrink-0 lg:px-6">
            <div className="flex gap-2 items-center font-semibold">
              <Link
                to="/"
                className="not-draggable-region"
                onAuxClick={whatIsThis()}
              >
                <img
                  src={logoLaucher}
                  className="w-20"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <SidebarMenu />
        </div>
      </div>
      <div className="flex flex-col">
        <Header />
        <ScrollArea
          className="h-[calc(100vh-var(--header-height))]"
          viewportClassName="main-wrapper-content"
        >
          <main className="flex flex-col gap-4 h-full min-h-[calc(100vh-var(--header-height))] p-4 relative lg:gap-6 lg:p-6">
            {children}
          </main>
        </ScrollArea>
      </div>
    </div>
  )
}
