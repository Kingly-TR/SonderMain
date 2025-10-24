import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "live" | "beta" | "coming_soon"
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variants = {
    live: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800",
    beta: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    coming_soon: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400 border-gray-200 dark:border-gray-800"
  }

  const labels = {
    live: "Live",
    beta: "Beta",
    coming_soon: "Coming Soon"
  }

  return (
    <Badge 
      variant="outline" 
      className={cn(variants[status], "text-xs font-medium", className)}
    >
      {labels[status]}
    </Badge>
  )
}
