const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (d: string) => {
  const date = new Date(d);
  const month = MONTHS[date.getMonth()];
  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};

export const readTime = (content: string) => {
  const WPS = 275 / 60

  var images = 0
  const regex = /\w/

  let words = content.split(' ').filter((word: any) => {
    if (word.includes('<img')) {
      images += 1
    }
    return regex.test(word)
  }).length

  var imageAdjust = images * 4
  var imageSecs = 0
  var imageFactor = 12

  while (images) {
    imageSecs += imageFactor
    if (imageFactor > 3) {
      imageFactor -= 1
    }
    images -= 1
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60)

  return minutes
}