import { FC } from "react"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./WeekDataList.scss"
import { Column, OlListItem, Row } from "shared/ui"
import { WeekData } from "../../model/types/weekData"
import { daysSince } from "shared/lib/daysSince"

interface WeekDataListItemProps {
  week: WeekData;
}

export const WeekDataListItem: FC<WeekDataListItemProps> = (props) => {
  const { week } = props

  const startDateArr = week.date.start.toString().split(" ")
  const endDateArr = week.date.end.toString().split(" ")
  const displayDate = `${startDateArr[2]} ${startDateArr[1]} ${startDateArr[3]} - ${endDateArr[2]} ${endDateArr[1]} ${endDateArr[3]}`
  const timeAfterThisDate = daysSince(week.date.end)

  const uiResultTime = `${week.resultTime.hours} h ${week.resultTime.minutes} m`
  const uiDateWithDaysAfter = `${displayDate} (${timeAfterThisDate})`

  return (
    <div className={cn("weeks-list__item")}>
      <OlListItem>
        <Row justify={"space-between"}>
          <Column col={3}>{week.company}</Column>
          <Column>{uiResultTime}</Column>
          <Column col={6}>{uiDateWithDaysAfter}</Column>
        </Row>
      </OlListItem>
    </div>
  )
}