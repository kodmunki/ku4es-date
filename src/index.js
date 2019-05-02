import { Assert, build, format, trim } from 'ku4es-kernel';

let assumeNow;

export default class DayPoint {

  /**
   * @constructor DayPoint
   * @summary Date utility class.
   * @param {number} year - a valid year.
   * @param {number} month - a valid month (1-12) where 1 = January and 12 = December.
   * @param {number} date - a valid date for a given month.
   */
  constructor(year, month, date) {
    if ((month < 1) || (month > 12)) { throw new Error('Invalid month at Assert.DayPoint'); }
    if ((date < 1) || (date > findDaysInMonth(month, year))) { throw new Error('Invalid date at DayPoint'); }

    this.value = (arguments.length >= 3) ? new Date(year, month - 1, date) : new Date();
    this.day = this.value.getDay();
    this.date = date;
    this.month = month;
    this.year = year;
  }

  /**
   * @summary Returns a truncated two digit year.
   * @memberOf DayPoint
   * @public
   * @member {string}
   * @instance
   * @returns {number}
   */
  get shortYear() {
    const y = this.year.toString();
    return parseInt(y.substr(y.length-2));
  }

  /**
   * @summary Returns true for days Monday-Friday.
   * @memberOf DayPoint
   * @public
   * @member {boolean}
   * @instance
   * @returns {boolean}
   */
  get isWeekday() {
    const d = this.day;
    return d > 0 && d < 6;
  }

  /**
   * @summary Returns true for days Saturday and Sunday
   * @memberOf DayPoint
   * @public
   * @member {boolean}
   * @instance
   * @returns {boolean}
   */
  get isWeekend() {
    return !this.isWeekday;
  }

  /**
   * @summary Returns true for years that have a February 29th date.
   * @memberOf DayPoint
   * @public
   * @member {boolean}
   * @instance
   * @returns {boolean}
   */
  get isLeapYear() {
    return isLeapYear(this.year);
  }

  /**
   * @summary Returns the day following this day.
   * @memberOf DayPoint
   * @public
   * @member {boolean}
   * @instance
   * @returns {DayPoint}
   */
  get nextDay() {
    return createDay(this, 1, 0, 0);
  }

  /**
   * @summary Returns the day preceding this day.
   * @memberOf DayPoint
   * @public
   * @member {DayPoint}
   * @instance
   * @returns {DayPoint}
   */
  get prevDay() {
    return createDay(this, -1, 0, 0);
  }

  /**
   * @summary Returns the month following this month.<br/>
   * _**Warning**: This method will error when navigating to next months that do not include a current day._
   * @memberOf DayPoint
   * @public
   * @member {DayPoint}
   * @instance
   * @returns {DayPoint}
   */
  get nextMonth() {
    return createDay(this, 0, 1, 0);
  }

  /**
   * @summary Returns the month preceding this month.<br/>
   * _**Warning**: This method will error when navigating to previous months that do not include a current day._
   * @memberOf DayPoint
   * @public
   * @member {DayPoint}
   * @instance
   * @returns {DayPoint}
   */
  get prevMonth() {
    return createDay(this, 0, -1, 0);
  }

  /**
   * @summary Returns the month following this month.<br/>
   * _**Warning**: This method will error when navigating to next years that do not include a current day._
   * @memberOf DayPoint
   * @public
   * @member {DayPoint}
   * @instance
   * @returns {DayPoint}
   */
  get nextYear() {
    return createDay(this, 0, 0, 1);
  }

  /**
   * @summary Returns the month preceding this month.<br/>
   * _**Warning**: This method will error when navigating to previous years that do not include a current day._
   * @memberOf DayPoint
   * @public
   * @member {DayPoint}
   * @instance
   * @returns {DayPoint}
   */
  get prevYear() {
    return createDay(this, 0, 0, -1);
  }

  /**
   * @summary Returns the first day of this month and year.
   * @memberOf DayPoint
   * @public
   * @member {DayPoint}
   * @instance
   * @returns {DayPoint}
   */
  get firstDayOfMonth() {
    return new DayPoint(this.year, this.month, 1);
  }

  /**
   * @summary Returns the last day of this month and year.
   * @memberOf DayPoint
   * @public
   * @member {DayPoint}
   * @instance
   * @returns {DayPoint}
   */
  get lastDayOfMonth() {
    return new DayPoint(this.year, this.month, findDaysInMonth(this.month, this.year));
  }

  /**
   * @summary Returns a DayPoint modified by the number of years, months, and days passed.
   * @memberOf DayPoint
   * @public
   * @instance
   * @param {number} years - The number of years to add or subtract from this DayPoint.
   * @param {number} months - The number of months to add or subtract from this DayPoint.
   * @param {number} days - The number of days to add or subtract from this DayPoint.
   * @returns {DayPoint}
   */
  add(years, months, days) {
    function a(x, n, property) {
      let d = x;
      let c = n;
      while(c--) { d = d[property]; }
      return d;
    }
    const { abs } = Math;
    const y = abs(years);
    const d = abs(days);
    const m = abs(months);
    const ym = years < 0 ? 'prevYear' : 'nextYear';
    const dm = days < 0 ? 'prevDay' : 'nextDay';
    const mm = months < 0 ? 'prevMonth' : 'nextMonth';
    return a(a(a(this, y, ym), m, mm), d, dm);
  }

  /**
   * @summary Returns true if the other DayPoint is before this DayPoint.
   * @memberOf DayPoint
   * @public
   * @instance
   * @param {DayPoint} other - DayPoint to compare.
   * @returns {boolean}
   */
  isBefore(other) {
    return !(this.isAfter(other) || this.equals(other));
  }

  /**
   * @summary Returns true if the other DayPoint is after this DayPoint.
   * @memberOf DayPoint
   * @public
   * @instance
   * @param {DayPoint} other - DayPoint to compare.
   * @returns {boolean}
   */
  isAfter(other) {
    const ty = this.year;
    const oy = other.year;
    const tm = this.month;
    const om = other.month;
    if (ty > oy) { return true; }
    if ((ty === oy) && (tm > om)) { return true; }
    return (ty === oy) && (tm === om) && (this.date > other.date);
  }

  /**
   * @summary Returns true if the other DayPoint is equal to this DayPoint.
   * @memberOf DayPoint
   * @public
   * @instance
   * @param {DayPoint} other - DayPoint to compare.
   * @returns {boolean}
   */
  equals(other) {
    return (this.year === other.year) && (this.month === other.month) && (this.date === other.date);
  }

  /**
   * @summary Returns a date string formatted per the passed format string.
   * @memberOf DayPoint
   * @public
   * @instance
   * @param {string} formatString - format string where m = month, d = date, y = year.<br/>
   * _**Example**: For date, January, 12, 2018, `'mm/dd/yy' -> '01/12/18'` & `'dd/mm/yyyy' -> '12/01/2018'`._
   * @returns {string}
   */
  toString(formatString = 'mm/dd/yyyy') {
    const y = (/y{3,}/i.test(formatString)) ? this.year : this.shortYear;
    const m = this.month;
    const d = this.date;
    const yf = '{0}';
    const mf = (/m{2}/i.test(formatString) && m < 10) ? '0{1}' : '{1}';
    const df = (/d{2}/i.test(formatString) && d < 10) ? '0{2}' : '{2}';
    const f = formatString.replace(/y+/gi, yf).replace(/m+/gi, mf).replace(/d+/gi, df);
    return format(f, y, m, d);
  }

  /**
   * @summary Returns a `Date` value of this.
   * @memberOf DayPoint
   * @public
   * @instance
   * @returns {Date}
   */
  toDate() { return this.value; }

  /**
   * @summary Returns a JSON string value of this.
   * @memberOf DayPoint
   * @public
   * @instance
   * @returns {string}
   */
  toJson() { return this.value.toJSON(); }

  /**
   * @summary Returns true if the value can be successfully parsed.
   * @memberOf DayPoint
   * @public
   * @static
   * @param {string} value - A string value to test.
   * @returns {boolean}
   */
  static canParse(value) {
    return (Assert.isString(value) ||
      Assert.isNumber(value) ||
      Assert.isDate(value)) ? !isNaN(new Date(value).valueOf()) : false;
  }

  /**
   * @summary Returns a DayPoint with the parsed value of the passed value.<br/>
   * _**Warning**: this method will throw an error for values that cannot be parsed._
   * @memberOf DayPoint
   * @public
   * @static
   * @param {string} value - A string value to test.
   * @returns {boolean}
   */
  static parse(value) {
    if (value instanceof DayPoint) { return value; }
    let v = (Assert.isString(value))
      ? trim(value).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/, '')
      : value;

    if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(v)) {
      const components = v.split('-');
      const [component] = components;
      components.push(component);
      components.shift();
      v = components.join('/');
    }

    const D = new Date(v);
    if(!Assert.exists(v) || isNaN(D.valueOf()))
    { throw new Error(format('Cannot parse value= {0}', v)); }

    return new DayPoint(D.getFullYear(), D.getMonth() + 1, D.getDate());
  }

  /**
   * @summary Returns a DayPoint with the parsed value of the passed value.
   * _**Note**: Will return null for values that cannot be parsed._
   * @memberOf DayPoint
   * @public
   * @static
   * @param {string} value - A string value to test.
   * @returns {boolean}
   */
  static tryParse(value) {
    return DayPoint.canParse(value) ? DayPoint.parse(value) : null;
  }

  /**
   * @summary Sets the concept of now to the passed value instead of using
   * now as defined by the system clock.
   * @memberOf DayPoint
   * @public
   * @static
   * @param {DayPoint} dayPoint
   */
  static assumeNow(dayPoint) {
    assumeNow = DayPoint.parse(dayPoint);
  }

  /**
   * @summary Returns a DayPoint with value now.
   * @memberOf DayPoint
   * @public
   * @member {DayPoint}
   * @static
   * @returns {DayPoint}
   */
  static get today() {
    return assumeNow || DayPoint.parse(new Date());
  }

}

function findDaysInMonth(month, year) {
  if (month === 2) { return (isLeapYear(year)) ? 29 : 28; }
  return (((month < 8) && (Assert.isEven(month))) || ((month > 7) && (Assert.isOdd(month)))) ? 30 : 31;
}

function isLeapYear(year) {
  const y = year.toString().split(/\B/);
  const d = parseFloat(build(y[y.length - 2], y[y.length - 1]));
  return (d % 4 === 0);
}

function createDay(dp, d, m, y) {
  const tm = dp.month;
  const ty = dp.year;
  const td = dp.date;
  const ld = findDaysInMonth(tm, ty);
  const dd = d;
  const mm = m;
  const yy = y;
  let date = td + dd;
  let month = tm + mm;
  let year = ty + yy;

  if ((td + dd) > ld) {
    date = 1;
    month = tm + mm + 1;
  }

  if ((td + dd) < 1) {
    const pm = dp.prevMonth;
    date = findDaysInMonth(pm.month, pm.year);
    month = tm + mm - 1;
  }

  if (month > 12) {
    month = 1;
    year = ty + yy + 1;
  }

  if (month < 1) {
    month = 12;
    year = ty + yy - 1;
  }

  return new DayPoint(year, month, date);
}
