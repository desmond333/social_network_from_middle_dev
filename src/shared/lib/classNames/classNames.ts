// up ts
type Mods = Record<string, boolean | string | number>

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional?: string[],
): string => {
  const modsClassNames = Object.keys(mods).filter((key) => Boolean(mods[key]))
  const additionalClassNames = additional ? additional.filter(Boolean) : []

  return [cls, ...modsClassNames, ...additionalClassNames].join(" ")
}
