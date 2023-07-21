const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (d: string) => {
  const date = new Date(d);
  const month = MONTHS[date.getMonth()];
  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};