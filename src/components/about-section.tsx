"use client"

import { motion } from "framer-motion"
import { Globe, Zap, Shield } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Globe,
      title: "All online",
      description: "No installs, instant access."
    },
    {
      icon: Zap,
      title: "AI-native",
      description: "Useful, delightful automation."
    },
    {
      icon: Shield,
      title: "Fast & privacy-minded",
      description: "We ship carefully and quickly."
    }
  ]

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold">Why Sonder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We build AI services that feel natural, work instantly, and respect your privacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
