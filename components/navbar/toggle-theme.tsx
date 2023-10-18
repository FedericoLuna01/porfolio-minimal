'use client'

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const ToggleTheme = () => {
  const [isMounted, setisMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  const handleClick = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    setisMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Button
      onClick={handleClick}
      size='icon'
      variant='secondary'
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </Button>
  )
}

export default ToggleTheme