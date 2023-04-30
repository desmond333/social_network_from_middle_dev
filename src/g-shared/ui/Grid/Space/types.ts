import { RowGap } from '../Row/types';

export type SpaceRowGap = Exclude<
  RowGap,
  | 'constancy-level1'
  | 'constancy-level2'
  | 'constancy-level3'
  | 'constancy-level4'
  | 'constancy-level5'
>
