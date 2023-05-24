import './EditableProfileCard.scss'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { getProfileData } from '@/e-features/EditableProfileCard/model/selectors/getProfileData/getProfileData'
import { getProfileError } from '@/e-features/EditableProfileCard/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '@/e-features/EditableProfileCard/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { fetchProfileData } from '@/e-features/EditableProfileCard/model/services/fetchProfileData/fetchProfileData'
import { ProfileCard } from '@/f-entities/Profile'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'
import { Loader } from '@/g-shared/ui'
import { PageError } from '@/g-shared/ui/Text'

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
    const { className } = props

    const { t } = useTranslation()

    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [])

    if (isLoading) {
        return (
            <div className={cn('profile-card', { loading: true }, [className])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={cn('profile-card', {}, [className, 'error'])}>
                <PageError align="center" color="danger" tag="span">
                    Error
                </PageError>
            </div>
        )
    }

    return (
        <div className={cn('profile-card', {}, [className])}>
            <EditableProfileCardHeader />
            <ProfileCard data={data} />
        </div>
    )
}
