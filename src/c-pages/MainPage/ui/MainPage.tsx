import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';
import { Column, Container, Row } from '@/g-shared/ui';
import { ErrorFallback } from '@/g-shared/ui/ErrorFallback/ErrorFallback';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Container size="fluid">
                <Row justify="center">
                    <Column col={6}>{t('MAIN_PAGE')}</Column>
                    <Column col={6}>{t('MAIN_PAGE')}</Column>
                    <Column col={10}>{t('MAIN_PAGE')}</Column>
                </Row>
            </Container>
        </ErrorBoundary>
    );
};

export default MainPage;
