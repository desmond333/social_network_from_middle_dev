import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './ProfileCard.scss';
import { classNames as cn } from '@/g-shared/lib/classNames';
import { Input, VerticalOffset } from '@/g-shared/ui';
import { Profile } from '@/f-entities/Profile';

interface ProfileCardProps {
  className?: string
  data?: Profile
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className, data } = props;

    const { t } = useTranslation();

    const onFirstNameChange = useCallback((value: string) => {}, []);

    const onLastNameChange = useCallback((value: string) => {}, []);

    return (
        <div className={cn('card-data', {}, [className])}>
            <VerticalOffset offset="level2">
                <Input
                    name="firstName"
                    type="text"
                    value={data?.firstName}
                    placeholder="first"
                    onChange={onFirstNameChange}
                />
                <Input
                    name="lastName"
                    type="text"
                    value={data?.lastName}
                    placeholder="lastName"
                    onChange={onLastNameChange}
                />
            </VerticalOffset>
        </div>
    );
};
