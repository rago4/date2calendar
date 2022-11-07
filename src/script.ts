interface ISettings {
  date: Date;
}

/**
 * A simple function that takes date as a parameter and turns it into a calendar in the form of a two-dimensional array.
 * @param settings {ISettings} An object `{ date: Date }`
 * @returns {number[][]} Two-dimensional array of numbers
 * @example const calendar = date2calendar({ date: new Date() });
 */
export default function date2calendar({ date }: ISettings) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const days = 7;
  const weeks = Math.ceil((firstDay + lastDay) / days);

  return Array.from({ length: weeks }).map((_, week) =>
    Array.from({ length: days }).map((_, day) => {
      const index = week * days + day;
      const dateDay = index - firstDay + 1;
      return dateDay > 0 && dateDay <= lastDay ? dateDay : 0;
    })
  );
}
