import { format } from "date-fns";

class DateFormatterUtils {
  static formatDate(date, dateFormat) {
    return format(new Date(date), dateFormat);
  }

  static regularDateFormat(date) {
    // 2020-09-22
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
}
export default DateFormatterUtils;
