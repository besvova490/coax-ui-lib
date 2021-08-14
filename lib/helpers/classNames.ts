export function classNames(...args: Array<string | undefined |{ [key: string]: any }>): string {
  const classNamesList = [];

  for (const arg of args) {
    if (typeof arg === "string") {
      classNamesList.push(arg);
    } else if (typeof arg === "object") {
      const optionalClasses = Object.keys(arg).filter(key => !!arg[key]);
      classNamesList.push(...optionalClasses);
    }
  }

  return classNamesList.join(" ");
}
