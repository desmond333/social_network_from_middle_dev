import { FC } from "react"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./WeekDataList.scss"
import { Column, OlListItem, Row } from "shared/ui"
import { WeekData } from "../../model/types/weekData"

interface WeekDataListItemProps {
  week: WeekData;
}

export const WeekDataListItem: FC<WeekDataListItemProps> = (props) => {
  const { week } = props

  const startDateArr = week.date.range.start.toString().split(" ")
  const endDateArr = week.date.range.end.toString().split(" ")
  const displayDate = `${startDateArr[2]} ${startDateArr[1]} ${startDateArr[3]} - ${endDateArr[2]} ${endDateArr[1]} ${endDateArr[3]}`

  return (
    <div className={cn("weeks-list__item")}>
      <OlListItem>
        <Row justify={"space-between"}>
          <Column col={3}>
            {week.company}
          </Column>
          <Column>
            {week.resultTime.hours} h {week.resultTime.minutes} m
          </Column>
          <Column col={5}>
            {displayDate}
          </Column>
        </Row>
      </OlListItem>
    </div>
  )
}