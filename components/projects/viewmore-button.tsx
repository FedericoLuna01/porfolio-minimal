'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { CollapsibleTrigger } from "@/components/ui/collapsible"

const ViewMore = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CollapsibleTrigger
      asChild
      onClick={() => setIsOpen(!isOpen)}
    >
      <Button
        size='sm'
        variant='outline'
      >
        Ver {isOpen ? 'menos' : 'más'}
      </Button>
    </CollapsibleTrigger>
  )
}

export default ViewMore