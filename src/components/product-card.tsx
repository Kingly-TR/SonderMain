"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "./status-badge"
import { ExternalLink, ArrowRight } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const IconComponent = (LucideIcons as Record<string, any>)[product.icon] || LucideIcons.Package

  const handleClick = () => {
    if (product.href && (product.status === "live" || product.status === "beta")) {
      window.open(product.href, "_blank")
    } else {
      window.location.href = `/products/${product.slug}`
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full cursor-pointer group relative overflow-hidden transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        <CardHeader className="space-y-4 relative z-10">
          <div className="flex items-start justify-between">
            <motion.div
              className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <IconComponent className="h-6 w-6 text-primary" />
            </motion.div>
            <StatusBadge status={product.status} />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
              {product.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {product.tagline}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {product.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <motion.span
                key={tag}
                className="px-2 py-1 text-xs bg-primary/10 text-primary/80 rounded-md border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <Button
            onClick={handleClick}
            className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-0 group-hover:shadow-lg group-hover:shadow-primary/20"
            variant={product.status === "coming_soon" ? "outline" : "default"}
          >
            {product.status === "coming_soon" ? (
              <>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Open
                <ExternalLink className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
