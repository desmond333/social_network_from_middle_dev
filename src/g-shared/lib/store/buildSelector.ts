import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

// up ts
type Selector<T> = (state: StateSchema) => T
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => {
        return useSelector(selector);
    };

    // useSelectorHook можно использовать в компонентах
    // selector можно использовать в asyncThunk, helpers
    return [useSelectorHook, selector];
}
