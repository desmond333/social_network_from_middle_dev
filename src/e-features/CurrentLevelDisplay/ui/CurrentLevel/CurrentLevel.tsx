import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import './CurrentLevel.scss';
import { useCurrentLevel } from '../../model/selectors/getCurrentLevelState';
import { currentLevelActions } from '../../model/slice/currentLevelSlice';
import { classNames as cn } from '@/g-shared/lib/classNames/classNames';
import { BlockText, VerticalOffset } from '@/g-shared/ui';

interface CurrentLevelProps {
  className?: string
}

export const CurrentLevel: FC<CurrentLevelProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const { level } = useCurrentLevel();

    useEffect(() => {
        dispatch(currentLevelActions.transformDateInLevel());
    }, []);

    return (
        <div className={cn('CurrentLevel', {}, [className])}>
            <VerticalOffset offset="level2">
                <BlockText>Дата начала в разработке: лето 2020</BlockText>
                <BlockText>
                    {t('CURRENT_LEVEL')}
                    {level}
                    из 80
                </BlockText>
                <BlockText>Статус: middle</BlockText>
            </VerticalOffset>
        </div>
    );
};
