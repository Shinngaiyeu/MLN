import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sự thay đổi vị thế nghề nghiệp qua các thời kỳ – Góc nhìn Duy vật lịch sử",
  description:
    "Khám phá sự phát triển của các nghề nghiệp qua các giai đoạn lịch sử Việt Nam từ góc độ duy vật lịch sử",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${roboto.className} antialiased`}>
        <Suspense>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
