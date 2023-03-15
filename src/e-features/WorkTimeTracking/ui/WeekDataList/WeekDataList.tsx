import { FC, useCallback, useState } from "react"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./WeekDataList.scss"
import { useDispatch, useSelector } from "react-redux"
import { getWorkTimeState } from "e-features/WorkTimeTracking/model/selectors/getWorkTimeState"
import { Button, Column, OlList, Row, VerticalOffset } from "shared/ui"
import { workTimeActions } from "e-features/WorkTimeTracking/model/slice/workTimeSlice"
import { WeekDataListItem } from "e-features/WorkTimeTracking/ui/WeekDataList/WeekDataListItem"
import { BtnVariant } from "shared/ui/Button/types"
import { TSort } from "e-features/WorkTimeTracking/model/types/workTimeSchema"

interface WeekDataListProps {
  className?: string;
}

export const WeekDataList: FC<WeekDataListProps> = (props) => {
  const { className } = props
  const [sortByHoursDirection, setSortByHoursDirection] = useState<TSort | false>(false)

  const dispatch = useDispatch()
  const { weeks } = useSelector(getWorkTimeState)

  const onSortWeeksByHours = useCallback(() => {
    console.log("render onSortWeeksByHours")
    if (sortByHoursDirection === "up") {
      dispatch(workTimeActions.sortWeeksByHours("down"))
      setSortByHoursDirection("down")
    } else {
      dispatch(workTimeActions.sortWeeksByHours("up"))
      setSortByHoursDirection("up")
    }
  }, [dispatch, sortByHoursDirection])

  const onSortWeeksByDate = useCallback(() => {
    console.log("render onSortWeeksByHours")

    dispatch(workTimeActions.sortWeeksByHours("down"))
  }, [dispatch])

  return (
    <div className={cn("weeks-list", {}, [className])}>
      <VerticalOffset offset={"level5"}>
        <Row justify={"space-between"}>
          <Column col={3}>
            <Button variant={BtnVariant.OUTLINE} onClick={onSortWeeksByHours}>Sort by company </Button>
          </Column>
          <Column col={3}>
            <Button variant={BtnVariant.OUTLINE} onClick={onSortWeeksByHours}>Sort by hours </Button>
          </Column>
          <Column col={3}>
            <Button variant={BtnVariant.OUTLINE} onClick={onSortWeeksByDate}>Sort by date</Button>
          </Column>
        </Row>
        <OlList rowGap={"level3"}>
          {weeks.map((week) => (
            <WeekDataListItem week={week} />
          ))}
        </OlList>
      </VerticalOffset>
    </div>
  )
}