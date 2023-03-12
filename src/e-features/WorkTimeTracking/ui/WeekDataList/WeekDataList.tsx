import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./WeekDataList.scss"
import { useDispatch, useSelector } from "react-redux"
import { getWorkTimeState } from "e-features/WorkTimeTracking/model/selectors/getWorkTimeState"
import { Button } from "shared/ui"
import { workTimeActions } from "e-features/WorkTimeTracking/model/slice/workTimeSlice"

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

  return (
    <div className={cn("WeekDataList", {}, [className])}>
      {weeks.map((week) => (
        <div>
          <span>
          DATE: {week.date.range.start.getDate()} - {week.date.range.end.getDate()}
        </span>
          <span>
            HOURS: {week.hours}
        </span>
        </div>
      ))}

      <Button onClick={onSortWeeksByHours}>Sort</Button>
    </div>
  )
}