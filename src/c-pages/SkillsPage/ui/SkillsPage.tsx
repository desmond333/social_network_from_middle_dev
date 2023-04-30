import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CurrentLevel } from '@/e-features/CurrentLevelDisplay';
import { Container } from '@/g-shared/ui';
import { ErrorFallback } from '@/g-shared/ui/ErrorFallback/ErrorFallback';

const SkillsPage: FC = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Container size="fluid">
                <CurrentLevel />
            </Container>
        </ErrorBoundary>
    );
};

export default SkillsPage;
