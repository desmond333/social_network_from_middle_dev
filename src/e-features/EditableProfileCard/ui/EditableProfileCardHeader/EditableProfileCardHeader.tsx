import { FC, MouseEvent, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { editableProfileCardActions } from '@/e-features/EditableProfileCard/model/slice/EditableProfileCardSlice'
import { classNames as cn } from '@/g-shared/lib/classNames'
import { useAppDispatch } from '@/g-shared/lib/hooks/UseAppDispatch'
import { Button, Row } from '@/g-shared/ui'
import { BtnVariant } from '@/g-shared/ui/Button/types'
import { H3 } from '@/g-shared/ui/Text'

interface EditableProfileCardHeaderProps {}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (
    props,
) => {
    const {} = props

    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const readonly = true

    const onEdit = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            dispatch(editableProfileCardActions.setReadonly(true))
        },
        [dispatch],
    )

    const onCancelEdit = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            dispatch(editableProfileCardActions.setReadonly(false))
        },
        [dispatch],
    )

    return (
        <div className={cn('profile-card__header', {}, [])}>
            <Row justify="space-between">
                <H3>Profile</H3>
                {readonly ? (
                    <Button variant={BtnVariant.OUTLINE} onClick={onEdit}>
                        Редактировать
                    </Button>
                ) : (
                    <Button variant={BtnVariant.OUTLINE} onClick={onCancelEdit}>
                        Отменить
                    </Button>
                )}
            </Row>
        </div>
    )
}
