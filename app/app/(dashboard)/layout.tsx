'use client'
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  BriefcaseBusiness,
  Settings,
  CreditCard
} from "lucide-react"
import { usePathname } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Metadata } from "next"
import { useState } from "react"

export const dynamic = 'force-static'

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
      <div className="hidden border-r md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-16 items-center border-b px-4 lg:h-16 lg:px-6 ">
            <Link href="/overview" className="flex items-center gap-2 font-semibold">
              <span className="">JobSpire</span>
            </Link>
          </div>
          <div className="flex-1 ">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
              <Link href="/overview" className={`${pathname == '/overview' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
                <Home className="h-4 w-4" />
                Overview
              </Link>
              <Link href="/jobs" className={`${pathname == '/jobs' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
                <BriefcaseBusiness className="h-4 w-4" />
                Jobs
              </Link>
              <Link href="/applicants" className={`${pathname == '/applicants' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
              <Users className="h-4 w-4" />
                Applicants
              </Link>
              <Link href="/billing" className={`${pathname == '/billing' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
              <CreditCard className="h-4 w-4" />
                Billing
              </Link>
              <Link href="/settings" className={`${pathname == '/settings' ? 'bg-muted' : ''} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted duration-200`}>
              <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b px-4 lg:h-16 lg:px-6 sticky top-0 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-3 text-lg font-medium">
              <SheetClose asChild>
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  JobSpire
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/overview" className={`${pathname == '/overview' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                  <Home className="h-5 w-5" />
                  Overview
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/jobs" className={`${pathname == '/jobs' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                  <BriefcaseBusiness className="h-5 w-5" />
                  Jobs
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/applicants" className={`${pathname == '/applicants' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                  <Users className="h-5 w-5" />
                  Applicants
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/billing" className={`${pathname == '/billing' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                  <CreditCard className="h-5 w-5" />
                  Billing
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href="/settings" className={`${pathname == '/settings' ? 'bg-muted text-foreground' : ' text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}>
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
                </SheetClose>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
          </div>
          {/* <Toggle />
          <AvatarDropdown /> */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
        </main>
      </div>
    </div>
  )
}