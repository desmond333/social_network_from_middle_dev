// import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/g-shared/lib/store';

// export const getCurrentLevelState = (state: StateSchema) => state.currentLevel;
export const [useCurrentLevel, getCurrentLevel] = buildSelector(
    (state) => state.currentLevel,
);
