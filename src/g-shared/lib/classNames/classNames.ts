// up ts
// type number for ui Column
export type Mods = Record<string, boolean | string | number | undefined>

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional?: Array<string | undefined>,
): string => {
  const modsClassNames = Object.keys(mods).filter((key) => Boolean(mods[key]))
  const additionalClassNames = additional ? additional.filter(Boolean) : []

  return [cls, ...modsClassNames, ...additionalClassNames].join(" ")
}
