import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'
import './WeekDataForm.scss'

interface WeekDataFormProps {
  className?: string
}

export const WeekDataForm: FC<WeekDataFormProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  return <div className={cn('WeekDataForm', {}, [className])}>WeekDataForm</div>
}
