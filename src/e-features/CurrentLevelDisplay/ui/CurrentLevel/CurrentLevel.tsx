import { FC, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./CurrentLevel.scss"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentLevelState } from "../../model/selectors/getCurrentLevelState"
import { currentLevelActions } from "../../model/slice/currentLevelSlice"

interface CurrentLevelProps {
  className?: string;
}

export const CurrentLevel: FC<CurrentLevelProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const { level } = useSelector(getCurrentLevelState)

  useEffect(() => {
    dispatch(currentLevelActions.transformDateInLevel())
  }, [])

  return (
    <div className={cn("CurrentLevel", {}, [className])}>
      {t("CURRENT_LEVEL")}{level} из 80, я пре миддл
    </div>
  )
}