"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToProducts = () => {
    const element = document.getElementById("products")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, -90, 0],
            y: [0, 70, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glassmorphism Effect */}
          <motion.div
            className="absolute inset-0 bg-card/40 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl"
            animate={{
              boxShadow: isHovered
                ? "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
                : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative space-y-12 py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
            {/* Sparkle Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-4 bg-primary/10 rounded-2xl border border-primary/20"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>

            {/* Main Headline with Letter Animation */}
            <motion.div className="space-y-2">
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Sonder
                </motion.span>
              </motion.h1>
              
              {/* Animated Underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "60%" : "40%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Subtitle with Stagger Animation */}
            <motion.div
              className="space-y-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.p
                className="text-2xl sm:text-3xl font-medium text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                AI services that feel like{" "}
                <motion.span
                  className="text-primary font-bold"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  magic
                </motion.span>
              </motion.p>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                From smart playlists to university matching, explore beautifully crafted tools
                designed to simplify your digital life.
              </motion.p>
            </motion.div>

            {/* CTA Buttons with Hover Effects */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToProducts}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25 border-0"
                >
                  Explore Products
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="px-8 py-6 text-lg rounded-xl border-2 hover:border-primary/50 hover:bg-primary/5"
                >
                  <a href="mailto:hello@sonder.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator with Pulse */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.button
            onClick={scrollToProducts}
            className="group flex flex-col items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
              <ArrowDown className="h-6 w-6 text-primary relative" />
            </motion.div>
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
