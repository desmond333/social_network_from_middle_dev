import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { EditableProfileCard } from '@/e-features/EditableProfileCard'
import { Container } from '@/g-shared/ui'
import { ErrorFallback } from '@/g-shared/ui/ErrorFallback/ErrorFallback'

const ProfilePage: FC = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Container size="fluid">
                <EditableProfileCard />
            </Container>
        </ErrorBoundary>
    )
}

export default ProfilePage
