import { FC, Suspense } from 'react';
import './LoginModal.scss';
import { useTranslation } from 'react-i18next';
import { Loader, ModalWrapper } from '@/g-shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';
import { ModalWrapperProps } from '@/g-shared/ui/ModalWrapper/ModalWrapper';

// up ts
type LoginModalProps = Omit<ModalWrapperProps, 'title' | 'children'>

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { onClose, ...rest } = props;
    const { t } = useTranslation();

    return (
        <ModalWrapper isLazy title={t('AUTHORIZE_TITLE')} {...rest}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </ModalWrapper>
    );
};
