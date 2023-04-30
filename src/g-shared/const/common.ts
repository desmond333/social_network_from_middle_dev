import { ValueOf } from '../lib/types/types';

export const Currency = {
    RUB: 'rub',
    EUR: 'eur',
    USD: 'usd',
} as const;

export type TCurrency = ValueOf<typeof Currency>

export const Country = {
    RUSSIA: 'Russia',
    BELARUS: 'Belarus',
    KAZAHSTAN: 'Kazahstan',
    USA: 'United states',
    UKRAINE: 'Ukraine',
} as const;

export type TCountry = ValueOf<typeof Country>
