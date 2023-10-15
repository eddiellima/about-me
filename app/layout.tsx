import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eddie Lima",
  description:
    "Software engineer architecting innovative solutions. Check out my in-progress journey!"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="indigo">
          {children}
        </Theme>
      </body>
    </html>
  )
}
