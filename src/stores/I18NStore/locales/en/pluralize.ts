export const pluralize = (count: number, noun: string, suffix = "s"): string => {
  return `${count} ${noun}${count !== 1 ? suffix : ""}`;
};
