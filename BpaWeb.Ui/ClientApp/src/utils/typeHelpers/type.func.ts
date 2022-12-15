export const getValueWithProp = (key: string) =>
  (obj?: Record<string, any>) =>
    (obj && key) ? obj[key] : undefined