import { FC, useCallback, useState } from "react"
import { classNames as cn } from "@/g-shared/lib/classNames/classNames"
import "./WeekDataList.scss"
import { useDispatch, useSelector } from "react-redux"
import { getWorkTimeState } from "@/e-features/WorkTimeTracking/model/selectors/getWorkTimeState"
import { BlockWithShadow, Button, OlList, Space, VerticalOffset } from "@/g-shared/ui"
import { workTimeActions } from "@/e-features/WorkTimeTracking/model/slice/workTimeSlice"
import { WeekDataListItem } from "@/e-features/WorkTimeTracking/ui/WeekDataList/WeekDataListItem"
import { BtnVariant } from "@/g-shared/ui/Button/types"
import { TSort } from "@/e-features/WorkTimeTracking/model/types/workTimeSchema"

// import { useLocalStorage } from "@/g-shared/lib/hooks/useLocalStorage"

interface WeekDataListProps {
  className?: string;
}

export const WeekDataList: FC<WeekDataListProps> = (props) => {
  const { className } = props

  const [sortByHoursDirection, setSortByHoursDirection] = useState<TSort | false>("up")
  const [sortByDateDirection, setSortByDateDirection] = useState<TSort | false>(false)

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
    setSortByDateDirection(false)
  }, [dispatch, sortByHoursDirection])

  const onSortWeeksByDate = useCallback(() => {
    console.log("render onSortWeeksByDate")
    if (sortByDateDirection === "up") {
      dispatch(workTimeActions.sortWeeksByDate("down"))
      setSortByDateDirection("down")
    } else {
      dispatch(workTimeActions.sortWeeksByDate("up"))
      setSortByDateDirection("up")
    }
    setSortByHoursDirection(false)
  }, [dispatch, sortByDateDirection])

  const onFilterByIsWorking = useCallback(() => {
    console.log("render onFilterByIsWorking")
    dispatch(workTimeActions.filterByIsWorking())
  }, [dispatch])

  // const [storedValue, setValue] = useLocalStorage("workingWeeks", [])
  // console.log(storedValue)

  return (
    <div className={cn("weeks-list", {}, [className])}>
      <VerticalOffset offset={"level5"}>
        <BlockWithShadow>
          <Space columnGap={"level2"}>
            <Button
              variant={BtnVariant.BACKGROUND}
              onClick={onFilterByIsWorking}>
              Only working weeks
            </Button>
            <Button
              variant={BtnVariant.BACKGROUND}
              onClick={onSortWeeksByHours}>
              {`Sort by hours `}
              {sortByHoursDirection === "up" && "↑"}
              {sortByHoursDirection === "down" && "↓"}
            </Button>
            <Button
              variant={BtnVariant.BACKGROUND}
              onClick={onSortWeeksByDate}>
              {`Sort by date `}
              {sortByDateDirection === "up" && "↓"}
              {sortByDateDirection === "down" && "↑"}
            </Button>
            {/*<Button onClick={() => setValue(weeks)}>ff</Button>*/}
          </Space>
        </BlockWithShadow>

        <OlList rowGap={"level3"}>
          {weeks.map((week) => (
            <WeekDataListItem week={week} />
          ))}
        </OlList>
      </VerticalOffset>
    </div>
  )
}