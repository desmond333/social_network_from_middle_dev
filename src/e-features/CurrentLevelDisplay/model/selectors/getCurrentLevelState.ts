import { StateSchema } from '@/app/providers/StoreProvider';

export const getCurrentLevelState = (state: StateSchema) => state.currentLevel;
