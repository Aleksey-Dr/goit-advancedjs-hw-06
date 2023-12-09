/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
};

function isWeekend(day: Day): boolean {
  let isWeekend: boolean;
  if (day === Day.SATURDAY || day === Day.SUNDAY) {
    isWeekend = true;
    return isWeekend;
  }
  isWeekend = false;
  return isWeekend;
};

export { Day, isWeekend };