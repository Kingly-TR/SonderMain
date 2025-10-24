import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              Sonder
            </Link>
            <p className="text-sm text-muted-foreground">
              Online AI services that feel like magic.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/sondermusic" className="text-muted-foreground hover:text-foreground transition-colors">
                  SonderMusic
                </Link>
              </li>
              <li>
                <Link href="/products/sonderuni" className="text-muted-foreground hover:text-foreground transition-colors">
                  SonderUni
                </Link>
              </li>
              <li>
                <Link href="/products/sondercloud" className="text-muted-foreground hover:text-foreground transition-colors">
                  SonderCloud
                </Link>
              </li>
              <li>
                <Link href="/products/sonderpay" className="text-muted-foreground hover:text-foreground transition-colors">
                  SonderPay
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@sonder.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Sonder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
