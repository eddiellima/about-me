import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Navbar } from "src/components"
import "../styles/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

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
    <html
      lang="en"
      suppressHydrationWarning={true}
      style={poppins.style}
      className="bg-primary"
    >
      <body suppressHydrationWarning={true}>
        <div className="flex py-10 px-16 flex-col gap-10 min-h-screen">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <div>footer</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
