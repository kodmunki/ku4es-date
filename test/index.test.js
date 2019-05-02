import assert from 'assert';
import { describe, it } from 'mocha';
import DayPoint from '../src';

describe('Test', () => {

  it('should instantiate', () => {
    assert.ok(new DayPoint());
    assert.ok(new DayPoint(null));
    assert.ok(new DayPoint(2011, 1, 1));
    assert.ok(new DayPoint(2011, 11, 1));
    assert.ok(DayPoint.parse('01/01/2011'));
    assert.ok(DayPoint.parse('11/01/2011'));
    assert.ok(DayPoint.parse(new Date('1/1/2011')));
    assert.ok(DayPoint.parse(new Date('11/1/2011')));
  });

  it('should not instantiate', () => {
    assert.throws(() => new DayPoint(2011, 0, 1));
    assert.throws(() => new DayPoint(2011, 13, 1));
    assert.throws(() => new DayPoint(2011, 1, 0));
    assert.throws(() => new DayPoint(2011, 1, 32));
    assert.throws(() => new DayPoint(2011, 2, 0));
    assert.throws(() => new DayPoint(2011, 2, 29));
    assert.throws(() => DayPoint.parse('00/01/2011'));
    assert.throws(() => DayPoint.parse('13/01/2011'));
    assert.throws(() => DayPoint.parse('1/00/2011'));
    assert.throws(() => DayPoint.parse('1/32/2011'));
    assert.throws(() => DayPoint.parse('2/00/2011'));
  });

  it('value', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.deepEqual(dayPoint.value, new Date(2016, 1, 28));
  });

  it('day', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.equal(dayPoint.day, 0);
  });

  it('date', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.equal(dayPoint.date, 28);
  });

  it('month', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.equal(dayPoint.month, 2);
  });

  it('year', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.equal(dayPoint.year, 2016);
  });

  it('shortYear', () => {
    assert.equal(new DayPoint(2011, 1, 1).shortYear, 11);
    assert.equal(new DayPoint(1, 1, 1).shortYear, 1);
  });

  it('isWeekday', () => {
    const sunday = new DayPoint(2018, 1, 21);
    const monday = new DayPoint(2018, 1, 22);
    const tuesday = new DayPoint(2018, 1, 23);
    const wednesday = new DayPoint(2018, 1, 24);
    const thursday = new DayPoint(2018, 1, 25);
    const friday = new DayPoint(2018, 1, 26);
    const saturday = new DayPoint(2018, 1, 27);
    assert.ok(!sunday.isWeekday);
    assert.ok(monday.isWeekday);
    assert.ok(tuesday.isWeekday);
    assert.ok(wednesday.isWeekday);
    assert.ok(thursday.isWeekday);
    assert.ok(friday.isWeekday);
    assert.ok(!saturday.isWeekday);
  });

  it('isWeekend', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.isWeekend);
  });

  it('isLeapYear', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.isLeapYear);
  });

  it('nextDay', () => {
    const sunday = new DayPoint(2016, 2, 28);
    const monday = sunday.nextDay;
    const tuesday = monday.nextDay;
    const wednesday = tuesday.nextDay;
    const thursday = wednesday.nextDay;
    const friday = thursday.nextDay;
    const saturday = friday.nextDay;
    assert.ok(sunday.equals(new DayPoint(2016, 2, 28)));
    assert.ok(monday.equals(new DayPoint(2016, 2, 29)));
    assert.ok(tuesday.equals(new DayPoint(2016, 3, 1)));
    assert.ok(wednesday.equals(new DayPoint(2016, 3, 2)));
    assert.ok(thursday.equals(new DayPoint(2016, 3, 3)));
    assert.ok(friday.equals(new DayPoint(2016, 3, 4)));
    assert.ok(saturday.equals(new DayPoint(2016, 3, 5)));
  });

  it('nextDay into next year', () => {
    const sunday = new DayPoint(2018, 12, 30);
    const monday = sunday.nextDay;
    const tuesday = monday.nextDay;
    const wednesday = tuesday.nextDay;
    const thursday = wednesday.nextDay;
    const friday = thursday.nextDay;
    const saturday = friday.nextDay;
    assert.ok(sunday.equals(new DayPoint(2018, 12, 30)));
    assert.ok(monday.equals(new DayPoint(2018, 12, 31)));
    assert.ok(tuesday.equals(new DayPoint(2019, 1, 1)));
    assert.ok(wednesday.equals(new DayPoint(2019, 1, 2)));
    assert.ok(thursday.equals(new DayPoint(2019, 1, 3)));
    assert.ok(friday.equals(new DayPoint(2019, 1, 4)));
    assert.ok(saturday.equals(new DayPoint(2019, 1, 5)));
  });

  it('prevDay', () => {
    const saturday = new DayPoint(2019, 1, 5);
    const friday = saturday.prevDay;
    const thursday = friday.prevDay;
    const wednesday = thursday.prevDay;
    const tuesday = wednesday.prevDay;
    const monday = tuesday.prevDay;
    const sunday = monday.prevDay;
    assert.ok(sunday.equals(new DayPoint(2018, 12, 30)));
    assert.ok(monday.equals(new DayPoint(2018, 12, 31)));
    assert.ok(tuesday.equals(new DayPoint(2019, 1, 1)));
    assert.ok(wednesday.equals(new DayPoint(2019, 1, 2)));
    assert.ok(thursday.equals(new DayPoint(2019, 1, 3)));
    assert.ok(friday.equals(new DayPoint(2019, 1, 4)));
    assert.ok(saturday.equals(new DayPoint(2019, 1, 5)));
  });

  it('nextMonth', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.nextMonth.equals(new DayPoint(2016, 3, 28)));
  });

  it('prevMonth', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.prevMonth.equals(new DayPoint(2016, 1, 28)));
  });

  it('nextYear', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.nextYear.equals(new DayPoint(2017, 2, 28)));
  });

  it('prevYear', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.prevYear.equals(new DayPoint(2015, 2, 28)));
  });

  it('add', () => {
    assert.ok(new DayPoint(2011, 1, 1).add(1, 0, 0).equals(new DayPoint(2012, 1, 1)));
    assert.ok(new DayPoint(2011, 1, 1).add(0, 1, 0).equals(new DayPoint(2011, 2, 1)));
    assert.ok(new DayPoint(2011, 1, 1).add(0, 0, 1).equals(new DayPoint(2011, 1, 2)));
    assert.ok(new DayPoint(2011, 1, 1).add(-1, 0, 0).equals(new DayPoint(2010, 1, 1)));
    assert.ok(new DayPoint(2011, 1, 1).add(0, -1, 0).equals(new DayPoint(2010, 12, 1)));
    assert.ok(new DayPoint(2011, 1, 1).add(0, 0, -1).equals(new DayPoint(2010, 12, 31)));
  });

  it('firstDayOfMonth', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.firstDayOfMonth.equals(new DayPoint(2016, 2, 1)));
  });

  it('lastDayOfMonth', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.lastDayOfMonth.equals(new DayPoint(2016, 2, 29)));
  });

  it('isBefore', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(!dayPoint.isBefore(new DayPoint(2016, 2, 28)));
    assert.ok(dayPoint.isBefore(new DayPoint(2017, 2, 28)));
    assert.ok(dayPoint.isBefore(new DayPoint(2016, 3, 28)));
    assert.ok(dayPoint.isBefore(new DayPoint(2016, 2, 29)));
  });

  it('isAfter', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(!dayPoint.isAfter(new DayPoint(2016, 2, 28)));
    assert.ok(dayPoint.isAfter(new DayPoint(2015, 2, 28)));
    assert.ok(dayPoint.isAfter(new DayPoint(2016, 1, 28)));
    assert.ok(dayPoint.isAfter(new DayPoint(2016, 2, 27)));
  });

  it('assert.equals', () => {
    const dayPoint = new DayPoint(2016, 2, 28);
    assert.ok(dayPoint.equals(new DayPoint(2016, 2, 28)));
    assert.ok(!dayPoint.equals(new DayPoint(2017, 2, 28)));
    assert.ok(!dayPoint.equals(new DayPoint(2016, 3, 28)));
    assert.ok(!dayPoint.equals(new DayPoint(2016, 2, 29)));
  });

  it('toString', () => {
    assert.equal(new DayPoint(2011, 1, 1).toString(), '01/01/2011');
    assert.equal(new DayPoint(2011, 2, 1).toString('mm/dd/yy'), '02/01/11');
    assert.equal(new DayPoint(2011, 2, 1).toString('mm/dd/yyyy'), '02/01/2011');
    assert.equal(new DayPoint(2011, 2, 1).toString('dd/mm/yyyy'), '01/02/2011');
    assert.equal(new DayPoint(2011, 2, 1).toString('yy/mm/dd'), '11/02/01');
    assert.equal(new DayPoint(2011, 12, 31).toString('mm/dd/yy'), '12/31/11');
    assert.equal(new DayPoint(2011, 12, 31).toString('mm/dd/yyyy'), '12/31/2011');
    assert.equal(new DayPoint(2011, 12, 31).toString('dd/mm/yyyy'), '31/12/2011');
    assert.equal(new DayPoint(2011, 12, 31).toString('yy/mm/dd'), '11/12/31');
    assert.equal(new DayPoint(2011, 12, 31).toString('mm-dd-yyyy'), '12-31-2011');
    assert.equal(new DayPoint(2011, 12, 31).toString('mm.dd.yyyy--yyyy--m'), '12.31.2011--2011--12');
  });

  it('toDate', () => {
    assert.deepEqual(new DayPoint(2011, 1, 1).toDate(), new Date('01/01/2011'));
  });

  it('toJson', () => {
    assert.equal(new DayPoint(2011, 1, 1).toJson(), new Date('01/01/2011').toJSON());
  });

  it('canParse', () => {
    assert.ok(DayPoint.canParse('1/1/2011'));
    assert.ok(DayPoint.canParse(new Date('1/1/2011')));
    assert.ok(DayPoint.canParse(1));
    assert.ok(!DayPoint.canParse(null));
    assert.ok(!DayPoint.canParse(undefined));
    assert.ok(!DayPoint.canParse(''));
    assert.ok(!DayPoint.canParse('A'));
    assert.ok(!DayPoint.canParse([]));
    assert.ok(!DayPoint.canParse({}));
    assert.ok(!DayPoint.canParse(() => { }));
  });

  it('parse', () => {
    assert.ok(DayPoint.parse('1/1/2011'));
    assert.ok(DayPoint.parse(new Date('1/1/2011')));
    assert.ok(DayPoint.parse(1));
    assert.ok(DayPoint.parse('2017-01-16T05:00:00Z').equals(new DayPoint(2017, 1, 16)));
    assert.throws(() => { DayPoint.parse(null); });
    assert.throws(() => { DayPoint.parse(undefined); });
    assert.throws(() => { DayPoint.parse(''); });
    assert.throws(() => { DayPoint.parse('A'); });
    assert.throws(() => { DayPoint.parse([]); });
    assert.throws(() => { DayPoint.parse({}); });
    assert.throws(() => { DayPoint.parse(() => { }); });
  });

  it('tryParse', () => {
    assert.ok(DayPoint.tryParse('1/1/2011'));
    assert.ok(DayPoint.tryParse(new Date('1/1/2011')));
    assert.ok(DayPoint.tryParse(1));
    assert.ok(!DayPoint.tryParse(null));
    assert.ok(!DayPoint.tryParse(undefined));
    assert.ok(!DayPoint.tryParse(''));
    assert.ok(!DayPoint.tryParse('A'));
    assert.ok(!DayPoint.tryParse([]));
    assert.ok(!DayPoint.tryParse({}));
    assert.ok(!DayPoint.tryParse(() => { }));
  });

  it('today', () => {
    const today = DayPoint.parse(new Date());
    assert.ok(DayPoint.today.equals(today));
  });

  it('assumeNow', () => {
    const now = new DayPoint(2016, 2, 28);
    DayPoint.assumeNow(now);
    assert.ok(DayPoint.today.equals(now));
  });

});
