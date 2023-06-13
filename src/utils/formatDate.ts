export default function formatDate(date: Date, includeTime = true): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  let timeStr = ''
  if (includeTime) {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    timeStr = `${hours}:${minutes}:${seconds}`
  }
  const dateStr = `${year}年${month}月${day}日 ${timeStr}`
  return dateStr
}
