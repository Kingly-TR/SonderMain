import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Sonder",
  description: "Sonder's privacy policy and data protection practices.",
}

export default function PrivacyPage() {
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
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Overview</h2>
                <p>
                  At Sonder, we take your privacy seriously. This privacy policy explains how we collect, 
                  use, and protect your personal information when you use our services.
                </p>

                <h2>Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>Personal information you provide when using our services</li>
                  <li>Usage data and analytics to improve our products</li>
                  <li>Technical information about your device and browser</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                  <li>Provide and improve our AI-powered services</li>
                  <li>Personalize your experience</li>
                  <li>Communicate with you about our products</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>

                <h2>Data Protection</h2>
                <p>
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2>Third-Party Services</h2>
                <p>
                  Some of our products integrate with third-party services (like Spotify for SonderMusic). 
                  Please review their privacy policies as well.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at{" "}
                  <a href="mailto:privacy@sonder.com" className="text-foreground underline">
                    privacy@sonder.com
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
