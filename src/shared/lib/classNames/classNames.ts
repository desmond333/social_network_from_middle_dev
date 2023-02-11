type Mods = Record<string, boolean | string>

const classNames = (cls: string, mods?: Mods, additional?: string[]): string => {
  const modsClassNames = Object.keys(mods).filter((key) => Boolean(mods[key]));

  return [cls, ...modsClassNames, ...additional.filter(Boolean)].join(" ");
};

export default classNames;


