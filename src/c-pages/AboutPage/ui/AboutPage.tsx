import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';
import { Container } from '@/g-shared/ui';
import { ErrorFallback } from '@/g-shared/ui/ErrorFallback/ErrorFallback';
import { BugButton } from '@/g-shared/ui/BugButton/BugButton';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Container size="lg">
                {t('ABOUT_PAGE')}
                <BugButton />
            </Container>
        </ErrorBoundary>
    );
};

export default AboutPage;
