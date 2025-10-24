"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Build with us</h2>
            <p className="text-xl text-muted-foreground">
              Have an idea for a collaboration or partnership? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg"
            >
              <a href="mailto:hello@sonder.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Sonder
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-6 text-lg"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Open to partnerships, integrations, and innovative collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
