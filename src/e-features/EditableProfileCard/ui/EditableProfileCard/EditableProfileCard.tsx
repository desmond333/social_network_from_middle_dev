import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames as cn } from '@/g-shared/lib/classNames/classNames'
import './EditableProfileCard.scss'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  ProfileCard,
} from '@/f-entities/Profile'
import { PageError } from '@/g-shared/ui/Text'
import { Loader } from '@/g-shared/ui'

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
        <PageError align={'center'} color={'danger'} tag={'span'}>
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
