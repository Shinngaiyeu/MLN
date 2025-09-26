"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X, HelpCircle, Clock, BookOpen, Users, Home, BarChart3, Play } from "lucide-react"

const navigationItems = [
  { href: "/", label: "Trang chủ", icon: Home },
  { href: "/timeline", label: "Timeline", icon: Clock },
  { href: "/ly-luan", label: "Lý luận", icon: BookOpen },
  { href: "/phan-tich", label: "Phân tích", icon: BarChart3 },
  { href: "/sinh-vien", label: "Sinh viên", icon: Users },
  { href: "/bai-hoc", label: "Bài học", icon: Play },
  { href: "/quiz", label: "Quiz", icon: HelpCircle },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-xl text-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            Nghề nghiệp qua các giai đoạn
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent",
                  pathname === item.href
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-all duration-200 hover:text-primary hover:bg-accent rounded-lg flex items-center gap-3",
                    pathname === item.href
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
