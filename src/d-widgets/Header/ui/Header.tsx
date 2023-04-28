import { useTranslation } from 'react-i18next'
import './Header.scss'
import { LangSwitcher } from '../../LangSwitcher'
import { Authentication } from '../ui/HeaderParts/Authentication'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { Column, Row, Space } from '@/g-shared/ui'
import { H2 } from '@/g-shared/ui/Text'
import { memo } from 'react'

interface HeaderProps {
  className?: string
}

export const Header = memo(({ className }: HeaderProps) => {
  const { t } = useTranslation()

  return (
    <header className={cn('header', {}, [className])}>
      <Row justify="space-between" isFullHeight>
        <Column col={7} alignSelf="center">
          <div style={{ paddingLeft: '10px' }}>
            <H2 color={'secondary'}>
              {t('PROJECT_NAME')}
              {` by Desmond333`}
            </H2>
          </div>
        </Column>
        <Column col={2} alignSelf="center">
          <Space columnGap="level3">
            <LangSwitcher />
            <Authentication />
          </Space>
        </Column>
      </Row>
    </header>
  )
})
