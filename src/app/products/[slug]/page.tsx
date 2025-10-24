import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, ExternalLink } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { getProductBySlug, products } from "@/data/products"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found | Sonder",
    }
  }

  return {
    title: `${product.name} | Sonder`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Sonder`,
      description: product.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Sonder`,
      description: product.description,
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const IconComponent = (LucideIcons as any)[product.icon] || LucideIcons.Package

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link
                href="/"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>

              {/* Product Header */}
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-2xl bg-muted/50">
                    <IconComponent className="h-12 w-12 text-foreground" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-4">
                      <h1 className="text-4xl font-bold">{product.name}</h1>
                      <StatusBadge status={product.status} />
                    </div>
                    <p className="text-xl text-muted-foreground">{product.tagline}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  {product.href && (product.status === "live" || product.status === "beta") ? (
                    <Button
                      size="lg"
                      asChild
                      className="bg-foreground text-background hover:bg-foreground/90"
                    >
                      <a href={product.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Open {product.name}
                      </a>
                    </Button>
                  ) : (
                    <Button size="lg" disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What it does Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">What it does</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Additional Features based on product */}
              {product.slug === "sondermusic" && (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AI-powered playlist generation</li>
                      <li>• Spotify integration</li>
                      <li>• Personalized recommendations</li>
                      <li>• Easy sharing and collaboration</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">How it works</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>1. Connect your Spotify account</li>
                      <li>2. Describe your mood or genre preference</li>
                      <li>3. AI generates a perfect playlist</li>
                      <li>4. Enjoy and share with friends</li>
                    </ul>
                  </div>
                </div>
              )}

              {product.slug === "sonderuni" && (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Grade-based matching algorithm</li>
                      <li>• Comprehensive university database</li>
                      <li>• Admission probability estimates</li>
                      <li>• Personalized recommendations</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">How it works</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>1. Input your grades and test scores</li>
                      <li>2. Set your preferences and constraints</li>
                      <li>3. Get matched with suitable universities</li>
                      <li>4. Explore detailed insights and statistics</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Get Started</h2>
              {product.href && (product.status === "live" || product.status === "beta") ? (
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Ready to try {product.name}? Click below to get started.
                  </p>
                  <Button
                    size="lg"
                    asChild
                    className="bg-foreground text-background hover:bg-foreground/90"
                  >
                    <a href={product.href} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Launch {product.name}
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    {product.name} is currently in development. Stay tuned for updates!
                  </p>
                  <Button size="lg" disabled>
                    Coming Soon
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
