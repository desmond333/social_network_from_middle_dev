import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import "./ProfileCard.scss"
import { useSelector } from "react-redux"
import { getProfileData, getProfileError, getProfileIsLoading } from "@/f-entities/Profile"
import { classNames as cn } from "@/g-shared/lib/classNames"
import { Button, Input, Row, VerticalOffset } from "@/g-shared/ui"
import { BtnVariant } from "@/g-shared/ui/Button/types"
import { H3 } from "@/g-shared/ui/Text"

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  const onFirstNameChange = useCallback((value: string) => {

  }, [])

  const onLastNameChange = useCallback((value: string) => {

  }, [])

  return (
    <div className={cn("profile-card", {}, [className])}>
      <div className="profile-card__header">
        <Row justify={"space-between"}>
          <H3>Profile</H3>
          <Button variant={BtnVariant.OUTLINE}>
            Редактировать
          </Button>
        </Row>
      </div>
      <div className="profile-card__data">
        <VerticalOffset offset={"level2"}>
          <Input
            name={"firstName"}
            type={"text"}
            value={data?.firstName} placeholder={"first"}
            onChange={onFirstNameChange}
          />
          <Input
            name={"lastName"}
            type={"text"}
            value={data?.lastName}
            placeholder={"lastName"}
            onChange={onLastNameChange}
          />
        </VerticalOffset>
      </div>
    </div>
  )
}