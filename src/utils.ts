export const qs = (params: Record<string, string>) => {
  return Object.keys(params)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join('&');
}
