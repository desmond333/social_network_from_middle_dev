import { FC } from 'react';
import './WeekDataList.scss';
import {
    BlockWithShadow, Column, OlListItem, Row, Tag,
} from '@/g-shared/ui';
import { WeekData } from '../../model/types/weekData';
import { daysSince } from '@/g-shared/lib/daysSince';

interface WeekDataListItemProps {
  week: WeekData
}

export const WeekDataListItem: FC<WeekDataListItemProps> = (props) => {
    const { week } = props;

    const startDateArr = week.date.start.toString().split(' ');
    const endDateArr = week.date.end.toString().split(' ');
    const displayDate = `${startDateArr[2]} ${startDateArr[1]} ${startDateArr[3]} - ${endDateArr[2]} ${endDateArr[1]} ${endDateArr[3]}`;
    const timeAfterThisDate = daysSince(week.date.end);
    // const timeAfterThisDate = 111

    const uiResultTime = `${week.resultTime.hours} h ${week.resultTime.minutes} m`;
    const uiDateWithDaysAfter = `${displayDate} (${timeAfterThisDate})`;

    return (
        <BlockWithShadow>
            <OlListItem>
                <Row justify="space-between">
                    <Column col={3} alignItems="center">
                        <Tag>{week.company}</Tag>
                    </Column>
                    <Column alignItems="center">{uiResultTime}</Column>
                    <Column col={6} alignItems="center">
                        {uiDateWithDaysAfter}
                    </Column>
                </Row>
            </OlListItem>
        </BlockWithShadow>
    );
};
