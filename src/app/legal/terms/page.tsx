import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Sonder",
  description: "Sonder's terms of service and user agreement.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Agreement to Terms</h2>
                <p>
                  By accessing and using Sonder&apos;s services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations.
                </p>

                <h2>Use License</h2>
                <p>
                  Permission is granted to temporarily use Sonder&apos;s services for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>

                <h2>User Accounts</h2>
                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times.</p>

                <h2>Prohibited Uses</h2>
                <p>You may not use our services:</p>
                <ul>
                  <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                </ul>

                <h2>Service Availability</h2>
                <p>
                  We strive to provide reliable services, but we do not guarantee that our services will be 
                  available at all times or free from interruptions.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                  The service and its original content, features, and functionality are and will remain the 
                  exclusive property of Sonder and its licensors.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  In no event shall Sonder, nor its directors, employees, partners, agents, suppliers, or 
                  affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>

                <h2>Contact Information</h2>
                <p>
                  Questions about the Terms of Service should be sent to us at{" "}
                  <a href="mailto:legal@sonder.com" className="text-foreground underline">
                    legal@sonder.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
