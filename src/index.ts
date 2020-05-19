export default function time(timestamp: number, Endings = {
  seconds: " Seconds Ago",
  minutes: " Minutes Ago",
  hours: " Hours Ago",
  days: " Days Ago",
  else: "A really long time ago"
}, nowTimeStamp: number = Date.now()) {
  let difference: number = nowTimeStamp - timestamp;

  if (difference <= 1000 * 60) {
    return Math.trunc(difference / 1000) + Endings.seconds;
  } else if (difference <= 1000 * 60 * 60) {
    return Math.trunc(difference / 1000 / 60) + Endings.minutes;
  } else if (difference <= 1000 * 60 * 60 * 24) {
    return Math.trunc(difference / 1000 / 60 / 60) + Endings.hours;
  } else if (difference <= 1000 * 60 * 60 * 24 * 365) {
    return Math.trunc(difference / 1000 / 60 / 60 / 24) + Endings.days;
  } else {
    return Endings.else;
  }
}