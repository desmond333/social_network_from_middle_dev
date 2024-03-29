import './Sidebar.scss'
import { FC, memo, useState } from 'react'
import { ThemeSwitcher } from '../../../ThemeSwitcher'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { Mods } from '@/g-shared/lib/classNames/classNames'
import {
    Button, Column, Menu, Row,
} from '@/g-shared/ui'
import { BtnSize, BtnVariant } from '@/g-shared/ui/Button/types'

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = memo(() => {
    const { theme } = useTheme()

    const [isCollapsed, setIsCollapsed] = useState(false)

    const mods: Mods = {
        'sidebar--collapsed': isCollapsed,
        'sidebar--light': theme === Theme.LIGHT,
        'sidebar--dark': theme === Theme.DARK,
    }

    return (
        <aside className={cn('sidebar', mods, [])} data-testid="sidebar">
            <Row direction="column" justify="space-between" isFullHeight>
                <Column isFlexNone>
                    <Menu direction="column" rowGap="level1">
                        {SidebarItemsList.map((item) => (
                            <SidebarItem item={item} key={item.path} />
                        ))}
                    </Menu>
                </Column>
                <Column isFlexNone>
                    <Row>
                        <Column>
                            <ThemeSwitcher />
                        </Column>
                        <Column>
                            <Button
                                onClick={() => setIsCollapsed((prev) => !prev)}
                                variant={BtnVariant.BACKGROUND}
                                btnSquareSize={BtnSize.XL}
                                data-testid="sidebar-toggle"
                            >
                                {isCollapsed ? '>' : '<'}
                            </Button>
                        </Column>
                    </Row>
                </Column>
            </Row>
        </aside>
    )
})
