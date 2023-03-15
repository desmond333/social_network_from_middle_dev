import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./WeekDataList.scss"
import { Column, OlListItem, Row } from "shared/ui"
import { WeekData } from "../../model/types/weekData"

interface WeekDataListItemProps {
  week: WeekData;
}

export const WeekDataListItem: FC<WeekDataListItemProps> = (props) => {
  const { week } = props

  const { t } = useTranslation()

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
          <Column col={6}>
            DATE: {week.date.range.start.getDate()} - {week.date.range.end.getDate()}
          </Column>
        </Row>
      </OlListItem>
    </div>
  )
}