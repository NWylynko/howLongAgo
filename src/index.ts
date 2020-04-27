export default function time(timestamp: number, Endings = {
  S: " Seconds Ago",
  M: " Minutes Ago",
  H: " Hours Ago",
  D: " Days Ago",
  ELSE: "A really long time ago"
}, nowTimeStamp?: number) {
  let now = nowTimeStamp || Date.now()
  let difference: number = now  - timestamp

  if (difference <= 1000 * 60) {
    return Math.trunc(difference / 1000) + Endings.S
  } else if (difference <= 1000 * 60 * 60) {
    return Math.trunc(difference / 1000 / 60) + Endings.M
  } else if (difference <= 1000 * 60 * 60 * 24) {
    return Math.trunc(difference / 1000 / 60 / 60) + Endings.H
  } else if (difference <= 1000 * 60 * 60 * 24 * 365) {
    return Math.trunc(difference / 1000 / 60 / 60 / 24) + Endings.D
  } else {
    return Endings.ELSE
  }
}