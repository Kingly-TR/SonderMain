"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "./status-badge"
import { products } from "@/data/products"
import { Bell, Check } from "lucide-react"
import * as LucideIcons from "lucide-react"

export function RoadmapSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const upcomingProducts = products.filter(p => p.status === "coming_soon" || p.status === "beta")

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold">What's Next</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get early access to our upcoming products and be the first to experience the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {upcomingProducts.map((product, index) => {
            const IconComponent = (LucideIcons as Record<string, any>)[product.icon] || LucideIcons.Package
            
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-muted/50">
                    <IconComponent className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <StatusBadge status={product.status} />
                    </div>
                    <p className="text-muted-foreground">{product.tagline}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Notify Me Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Get notified when new products launch or existing ones get major updates.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleNotifyMe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" disabled={!email}>
                  <Bell className="h-4 w-4 mr-2" />
                  Notify Me
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400"
              >
                <Check className="h-5 w-5" />
                <span>Thanks! We&apos;ll keep you updated.</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
