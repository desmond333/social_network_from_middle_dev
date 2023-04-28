import { FC, useEffect, useState } from 'react'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'
import './BugButton.scss'
import { Button } from '@/g-shared/ui'

interface BugButtonProps {
  className?: string
}

export const BugButton: FC<BugButtonProps> = (props) => {
  const { className } = props
  const [error, setError] = useState(false)

  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) throw new Error()
  }, [error])

  return (
    <Button className={cn('bug-button', {}, [className])} onClick={onThrow}>
      BugButton
    </Button>
  )
}
