import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { EditableProfileCard } from '@/e-features/EditableProfileCard';
import { profileReducer } from '@/f-entities/Profile';
import { Container } from '@/g-shared/ui';
import { ErrorFallback } from '@/g-shared/ui/ErrorFallback/ErrorFallback';
import { DynamicModuleLoader } from '@/g-shared/lib/components/DynamicModuleLoader';
import { ReducersList } from '@/g-shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC = () => {
    return (
        <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Container size="fluid">
                    <EditableProfileCard />
                </Container>
            </ErrorBoundary>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
