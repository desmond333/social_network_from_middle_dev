import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./WeekDataList.scss"
import { useDispatch, useSelector } from "react-redux"
import { getWorkTimeState } from "e-features/WorkTimeTracking/model/selectors/getWorkTimeState"
import { Button, OlList } from "shared/ui"
import { workTimeActions } from "e-features/WorkTimeTracking/model/slice/workTimeSlice"
import { WeekDataListItem } from "e-features/WorkTimeTracking/ui/WeekDataList/WeekDataListItem"
import { BtnVariant } from "shared/ui/Button/types"

interface WeekDataListProps {
  className?: string;
}

export const WeekDataList: FC<WeekDataListProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { weeks } = useSelector(getWorkTimeState)

  const onSortWeeksByHours = useCallback(() => {
    dispatch(workTimeActions.sortWeeksByHours())
  }, [dispatch])

  const onSortWeeksByDate = useCallback(() => {
    dispatch(workTimeActions.sortWeeksByHours())
  }, [dispatch])

  return (
    <div className={cn("WeekDataList", {}, [className])}>
      <OlList>
        {weeks.map((week) => (
          <WeekDataListItem week={week} />
        ))}
      </OlList>
      <Button variant={BtnVariant.OUTLINE} onClick={onSortWeeksByHours}>Sort by hours </Button>
      <Button variant={BtnVariant.OUTLINE} onClick={onSortWeeksByDate}>Sort by date</Button>
    </div>
  )
}