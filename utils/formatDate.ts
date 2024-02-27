export function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Convert day string to number and handle suffix
  let dayNumber = parseInt(day);
  let suffix = "th";
  if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
    suffix = "st";
  } else if (dayNumber === 2 || dayNumber === 22) {
    suffix = "nd";
  } else if (dayNumber === 3 || dayNumber === 23) {
    suffix = "rd";
  }

  // Format year string to last two digits
  const formattedYear = year.slice(-2);

  // Format date
  return `${dayNumber}${suffix} ${
    months[parseInt(month) - 1]
  } '${formattedYear}`;
}
