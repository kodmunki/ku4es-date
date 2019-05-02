<a name="DayPoint"></a>

## DayPoint
**Kind**: global class  
**Summary**: Date utility class.  

* [DayPoint](#DayPoint)
    * [new DayPoint(year, month, date)](#new_DayPoint_new)
    * _instance_
        * [.shortYear](#DayPoint+shortYear) ⇒ <code>number</code>
        * [.isWeekday](#DayPoint+isWeekday) ⇒ <code>boolean</code>
        * [.isWeekend](#DayPoint+isWeekend) ⇒ <code>boolean</code>
        * [.isLeapYear](#DayPoint+isLeapYear) ⇒ <code>boolean</code>
        * [.nextDay](#DayPoint+nextDay) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.prevDay](#DayPoint+prevDay) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.nextMonth](#DayPoint+nextMonth) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.prevMonth](#DayPoint+prevMonth) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.nextYear](#DayPoint+nextYear) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.prevYear](#DayPoint+prevYear) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.firstDayOfMonth](#DayPoint+firstDayOfMonth) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.lastDayOfMonth](#DayPoint+lastDayOfMonth) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.add(years, months, days)](#DayPoint+add) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.isBefore(other)](#DayPoint+isBefore) ⇒ <code>boolean</code>
        * [.isAfter(other)](#DayPoint+isAfter) ⇒ <code>boolean</code>
        * [.equals(other)](#DayPoint+equals) ⇒ <code>boolean</code>
        * [.toString(formatString)](#DayPoint+toString) ⇒ <code>string</code>
        * [.toDate()](#DayPoint+toDate) ⇒ <code>Date</code>
        * [.toJson()](#DayPoint+toJson) ⇒ <code>string</code>
    * _static_
        * [.today](#DayPoint.today) ⇒ [<code>DayPoint</code>](#DayPoint)
        * [.canParse(value)](#DayPoint.canParse) ⇒ <code>boolean</code>
        * [.parse(value)](#DayPoint.parse) ⇒ <code>boolean</code>
        * [.tryParse(value)](#DayPoint.tryParse) ⇒ <code>boolean</code>
        * [.assumeNow(dayPoint)](#DayPoint.assumeNow)

<a name="new_DayPoint_new"></a>

### new DayPoint(year, month, date)

| Param | Type | Description |
| --- | --- | --- |
| year | <code>number</code> | a valid year. |
| month | <code>number</code> | a valid month (1-12) where 1 = January and 12 = December. |
| date | <code>number</code> | a valid date for a given month. |

<a name="DayPoint+shortYear"></a>

### dayPoint.shortYear ⇒ <code>number</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a truncated two digit year.  
**Access**: public  
<a name="DayPoint+isWeekday"></a>

### dayPoint.isWeekday ⇒ <code>boolean</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true for days Monday-Friday.  
**Access**: public  
<a name="DayPoint+isWeekend"></a>

### dayPoint.isWeekend ⇒ <code>boolean</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true for days Saturday and Sunday  
**Access**: public  
<a name="DayPoint+isLeapYear"></a>

### dayPoint.isLeapYear ⇒ <code>boolean</code>
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true for years that have a February 29th date.  
**Access**: public  
<a name="DayPoint+nextDay"></a>

### dayPoint.nextDay ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the day following this day.  
**Access**: public  
<a name="DayPoint+prevDay"></a>

### dayPoint.prevDay ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the day preceding this day.  
**Access**: public  
<a name="DayPoint+nextMonth"></a>

### dayPoint.nextMonth ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the month following this month.<br/>
_**Warning**: This method will error when navigating to next months that do not include a current day._  
**Access**: public  
<a name="DayPoint+prevMonth"></a>

### dayPoint.prevMonth ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the month preceding this month.<br/>
_**Warning**: This method will error when navigating to previous months that do not include a current day._  
**Access**: public  
<a name="DayPoint+nextYear"></a>

### dayPoint.nextYear ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the month following this month.<br/>
_**Warning**: This method will error when navigating to next years that do not include a current day._  
**Access**: public  
<a name="DayPoint+prevYear"></a>

### dayPoint.prevYear ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the month preceding this month.<br/>
_**Warning**: This method will error when navigating to previous years that do not include a current day._  
**Access**: public  
<a name="DayPoint+firstDayOfMonth"></a>

### dayPoint.firstDayOfMonth ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the first day of this month and year.  
**Access**: public  
<a name="DayPoint+lastDayOfMonth"></a>

### dayPoint.lastDayOfMonth ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns the last day of this month and year.  
**Access**: public  
<a name="DayPoint+add"></a>

### dayPoint.add(years, months, days) ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a DayPoint modified by the number of years, months, and days passed.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| years | <code>number</code> | The number of years to add or subtract from this DayPoint. |
| months | <code>number</code> | The number of months to add or subtract from this DayPoint. |
| days | <code>number</code> | The number of days to add or subtract from this DayPoint. |

<a name="DayPoint+isBefore"></a>

### dayPoint.isBefore(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true if the other DayPoint is before this DayPoint.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>DayPoint</code>](#DayPoint) | DayPoint to compare. |

<a name="DayPoint+isAfter"></a>

### dayPoint.isAfter(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true if the other DayPoint is after this DayPoint.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>DayPoint</code>](#DayPoint) | DayPoint to compare. |

<a name="DayPoint+equals"></a>

### dayPoint.equals(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true if the other DayPoint is equal to this DayPoint.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>DayPoint</code>](#DayPoint) | DayPoint to compare. |

<a name="DayPoint+toString"></a>

### dayPoint.toString(formatString) ⇒ <code>string</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a date string formatted per the passed format string.  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| formatString | <code>string</code> | <code>&quot;mm/dd/yyyy&quot;</code> | format string where m = month, d = date, y = year.<br/> _**Example**: For date, January, 12, 2018, `'mm/dd/yy' -> '01/12/18'` & `'dd/mm/yyyy' -> '12/01/2018'`._ |

<a name="DayPoint+toDate"></a>

### dayPoint.toDate() ⇒ <code>Date</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a `Date` value of this.  
**Access**: public  
<a name="DayPoint+toJson"></a>

### dayPoint.toJson() ⇒ <code>string</code>
**Kind**: instance method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a JSON string value of this.  
**Access**: public  
<a name="DayPoint.today"></a>

### DayPoint.today ⇒ [<code>DayPoint</code>](#DayPoint)
**Kind**: static property of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a DayPoint with value now.  
**Access**: public  
<a name="DayPoint.canParse"></a>

### DayPoint.canParse(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns true if the value can be successfully parsed.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | A string value to test. |

<a name="DayPoint.parse"></a>

### DayPoint.parse(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a DayPoint with the parsed value of the passed value.<br/>
_**Warning**: this method will throw an error for values that cannot be parsed._  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | A string value to test. |

<a name="DayPoint.tryParse"></a>

### DayPoint.tryParse(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Returns a DayPoint with the parsed value of the passed value.
_**Note**: Will return null for values that cannot be parsed._  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | A string value to test. |

<a name="DayPoint.assumeNow"></a>

### DayPoint.assumeNow(dayPoint)
**Kind**: static method of [<code>DayPoint</code>](#DayPoint)  
**Summary**: Sets the concept of now to the passed value instead of using
now as defined by the system clock.  
**Access**: public  

| Param | Type |
| --- | --- |
| dayPoint | [<code>DayPoint</code>](#DayPoint) | 

