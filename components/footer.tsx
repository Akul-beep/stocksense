import { TrendingUp, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-200 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">StockSense</span>
            </div>
            <p className="text-muted-foreground">Learn smarter. Think better. Build wealth.</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 StockSense. All rights reserved. Built for the next generation of investors.
          </p>
        </div>
      </div>
    </footer>
  )
}
