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
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full cursor-pointer group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
              <IconComponent className="h-6 w-6 text-foreground" />
            </div>
            <StatusBadge status={product.status} />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
              {product.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {product.tagline}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>
          
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

          <Button
            onClick={handleClick}
            className="w-full group-hover:bg-foreground group-hover:text-background transition-colors"
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
