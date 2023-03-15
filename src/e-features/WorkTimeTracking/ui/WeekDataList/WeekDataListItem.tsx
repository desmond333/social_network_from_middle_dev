import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./WeekDataList.scss"
import { OlListItem, Space } from "shared/ui"
import { WeekData } from "e-features/WorkTimeTracking/model/types/workTimeSchema"

interface WeekDataListItemProps {
  week: WeekData;
}

export const WeekDataListItem: FC<WeekDataListItemProps> = (props) => {
  const { week } = props

  const { t } = useTranslation()

  return (
    <OlListItem>
      <Space columnGap={"level3"}>
              <span>
                  DATE: {week.date.range.start.getDate()} - {week.date.range.end.getDate()}
              </span>
        <span>
                  HOURS: {week.hours}
              </span>
        <span>
                  Company: {week.company}
              </span>
      </Space>
    </OlListItem>
  )
}