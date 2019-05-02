## Classes

<dl>
<dt><a href="#Name">Name</a></dt>
<dd></dd>
<dt><a href="#Assert">Assert</a></dt>
<dd></dd>
<dt><a href="#DayPoint">DayPoint</a></dt>
<dd></dd>
<dt><a href="#Money">Money</a></dt>
<dd></dd>
<dt><a href="#Service">Service</a></dt>
<dd></dd>
<dt><a href="#AbstractSpecification">AbstractSpecification</a></dt>
<dd></dd>
<dt><a href="#AndSpecification">AndSpecification</a> ⇐ <code><a href="#AbstractSpecification">AbstractSpecification</a></code></dt>
<dd></dd>
<dt><a href="#OrSpecification">OrSpecification</a> ⇐ <code><a href="#AbstractSpecification">AbstractSpecification</a></code></dt>
<dd></dd>
<dt><a href="#XorSpecification">XorSpecification</a> ⇐ <code><a href="#AbstractSpecification">AbstractSpecification</a></code></dt>
<dd></dd>
<dt><a href="#NotSpecification">NotSpecification</a> ⇐ <code><a href="#AbstractSpecification">AbstractSpecification</a></code></dt>
<dd></dd>
<dt><a href="#AbstractStrategy">AbstractStrategy</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#alpha">alpha</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#alphaNumeric">alphaNumeric</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#base64">base64</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#dataUrl">dataUrl</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#email">email</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#empty">empty</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#numeric">numeric</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#script">script</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#uid">uid</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#url">url</a> : <code>RegExp</code></dt>
<dd></dd>
<dt><a href="#uuid">uuid</a> : <code>RegExp</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#uid">uid()</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#uuid">uuid()</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#round">round(value, toNearest)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#roundUp">roundUp(value, toNearest)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#roundDown">roundDown(value, toNearest)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#roundTowardZero">roundTowardZero(value, toNearest)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#gcd">gcd(a, b)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#fib">fib(n)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#fib2">fib2(n)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#fibArray">fibArray(n)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#fibArray2">fibArray2(n)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#tryParseInt">tryParseInt(value, valueIfNan)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#tryParseFloat">tryParseFloat(value, valueIfNan)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#debounce">debounce(func, wait, [immediate])</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#build">build(...rest)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#format">format(format, ...rest)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#trim">trim(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#trimStart">trimStart(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#trimEnd">trimEnd(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#capitalize">capitalize(string)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#nextTick">nextTick(func)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#wait">wait(timeout)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd></dd>
</dl>

<a name="Name"></a>

## Name
**Kind**: global class  
**Summary**: A person's proper name  

* [Name](#Name)
    * [new Name(first, middle, last)](#new_Name_new)
    * [.first](#Name+first) ⇒ <code>string</code>
    * [.middle](#Name+middle) ⇒ <code>string</code>
    * [.last](#Name+last) ⇒ <code>string</code>
    * [.full](#Name+full) ⇒ <code>string</code>
    * [.initials](#Name+initials) ⇒ <code>string</code>
    * [.equals(other)](#Name+equals) ⇒ <code>boolean</code>
    * [.toString([format])](#Name+toString) ⇒ <code>string</code>

<a name="new_Name_new"></a>

### new Name(first, middle, last)

| Param | Type |
| --- | --- |
| first | <code>string</code> | 
| middle | <code>string</code> | 
| last | <code>string</code> | 

<a name="Name+first"></a>

### name.first ⇒ <code>string</code>
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: First name.  
**Access**: public  
<a name="Name+middle"></a>

### name.middle ⇒ <code>string</code>
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: Middle name.  
**Access**: public  
<a name="Name+last"></a>

### name.last ⇒ <code>string</code>
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: Last name.  
**Access**: public  
<a name="Name+full"></a>

### name.full ⇒ <code>string</code>
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: Space delimited first, [middle] and last name.  
**Access**: public  
<a name="Name+initials"></a>

### name.initials ⇒ <code>string</code>
**Kind**: instance property of [<code>Name</code>](#Name)  
**Summary**: Initials delimited by '.'.  
**Access**: public  
<a name="Name+equals"></a>

### name.equals(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Name</code>](#Name)  
**Summary**: Returns true if this is equal to another Name.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Name</code>](#Name) | 

<a name="Name+toString"></a>

### name.toString([format]) ⇒ <code>string</code>
**Kind**: instance method of [<code>Name</code>](#Name)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [format] | <code>string</code> | An optional format that can include: F, M, L, f, m, l where F, M, L represent the first, middle, and last name values respectively, and f, m, l represent the first initial, middle initial, and last initial respectively.<br/> _**Example**: `new Name('John', 'Bob', 'Doe').toString('F m. L')` === `'John B. Doe'`_ |

<a name="Assert"></a>

## Assert
**Kind**: global class  
**Summary**: Encapsulates common assertions providing a clear API.  

* [Assert](#Assert)
    * [.isNull(value)](#Assert.isNull) ⇒ <code>boolean</code>
    * [.isEmpty(value)](#Assert.isEmpty) ⇒ <code>boolean</code>
    * [.isUndefined(value)](#Assert.isUndefined) ⇒ <code>boolean</code>
    * [.isZero(value)](#Assert.isZero) ⇒ <code>boolean</code>
    * [.exists(value)](#Assert.exists) ⇒ <code>boolean</code>
    * [.isNullOrEmpty(value)](#Assert.isNullOrEmpty) ⇒ <code>boolean</code>
    * [.isArray(value)](#Assert.isArray) ⇒ <code>boolean</code>
    * [.isBool(value)](#Assert.isBool) ⇒ <code>boolean</code>
    * [.isTrue(value)](#Assert.isTrue) ⇒ <code>boolean</code>
    * [.isFalse(value)](#Assert.isFalse) ⇒ <code>boolean</code>
    * [.isDate(value)](#Assert.isDate) ⇒ <code>boolean</code>
    * [.isNumber(value)](#Assert.isNumber) ⇒ <code>boolean</code>
    * [.isEven(value)](#Assert.isEven) ⇒ <code>boolean</code>
    * [.isOdd(value)](#Assert.isOdd) ⇒ <code>boolean</code>
    * [.isString(value)](#Assert.isString) ⇒ <code>boolean</code>
    * [.isFunction(value)](#Assert.isFunction) ⇒ <code>boolean</code>
    * [.isObject(value)](#Assert.isObject) ⇒ <code>boolean</code>
    * [.isObjectLiteral(value)](#Assert.isObjectLiteral) ⇒ <code>boolean</code>
    * [.isTruthy(value)](#Assert.isTruthy) ⇒ <code>boolean</code>
    * [.isFalsy(value)](#Assert.isFalsy) ⇒ <code>boolean</code>

<a name="Assert.isNull"></a>

### Assert.isNull(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is null.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isEmpty"></a>

### Assert.isEmpty(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is an empty string, empty array, or empty object literal.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isUndefined"></a>

### Assert.isUndefined(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isZero"></a>

### Assert.isZero(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is zero.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.exists"></a>

### Assert.exists(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value is null or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isNullOrEmpty"></a>

### Assert.isNullOrEmpty(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value not {exists} or {isEmpty}.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isArray"></a>

### Assert.isArray(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is an Array.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isBool"></a>

### Assert.isBool(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a boolean.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isTrue"></a>

### Assert.isTrue(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is `true`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isFalse"></a>

### Assert.isFalse(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isDate"></a>

### Assert.isDate(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a Date.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isNumber"></a>

### Assert.isNumber(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a number.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isEven"></a>

### Assert.isEven(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value is a number and is even.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isOdd"></a>

### Assert.isOdd(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value is a number and is odd.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isString"></a>

### Assert.isString(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isFunction"></a>

### Assert.isFunction(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is a function.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isObject"></a>

### Assert.isObject(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is an Object.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isObjectLiteral"></a>

### Assert.isObjectLiteral(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if and only if value is an object literal.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isTruthy"></a>

### Assert.isTruthy(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value is not {isFalsy}.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

<a name="Assert.isFalsy"></a>

### Assert.isFalsy(value) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Assert</code>](#Assert)  
**Summary**: Returns true if value {isZero}, {isFalse}, {isNullOrEmpty}, or {isNaN}.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to test |

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

<a name="Money"></a>

## Money
**Kind**: global class  

* [Money](#Money)
    * [new Money(amount, [currency])](#new_Money_new)
    * [.nearestWhole](#Money+nearestWhole) ⇒ [<code>Money</code>](#Money)
    * [.nearestDollar](#Money+nearestDollar) ⇒ [<code>Money</code>](#Money)
    * [.add(other)](#Money+add) ⇒ [<code>Money</code>](#Money)
    * [.subtract(other)](#Money+subtract) ⇒ [<code>Money</code>](#Money)
    * [.multiply(factor)](#Money+multiply) ⇒ [<code>Money</code>](#Money)
    * [.divide(divisor)](#Money+divide) ⇒ [<code>Money</code>](#Money)
    * [.equals(other)](#Money+equals) ⇒ <code>boolean</code>
    * [.isGreaterThan(other)](#Money+isGreaterThan) ⇒ <code>boolean</code>
    * [.isLessThan(other)](#Money+isLessThan) ⇒ <code>boolean</code>
    * [.round([to])](#Money+round) ⇒ [<code>Money</code>](#Money)
    * [.roundDown([to])](#Money+roundDown) ⇒ [<code>Money</code>](#Money)
    * [.roundUp([to])](#Money+roundUp) ⇒ [<code>Money</code>](#Money)
    * [.exchange(rate, currency)](#Money+exchange) ⇒ [<code>Money</code>](#Money)
    * [.isOfCurrency(other)](#Money+isOfCurrency) ⇒ <code>boolean</code>
    * [.toString([format])](#Money+toString) ⇒ <code>string</code>
    * [.zero(currency)](#Money+zero) ⇒ [<code>Money</code>](#Money)
    * [.isMoney(other)](#Money+isMoney) ⇒ <code>boolean</code>
    * [.canParse(value)](#Money+canParse) ⇒ <code>boolean</code>
    * [.parse(value)](#Money+parse) ⇒ [<code>Money</code>](#Money)
    * [.tryParse(value)](#Money+tryParse) ⇒ [<code>Money</code>](#Money)

<a name="new_Money_new"></a>

### new Money(amount, [currency])

| Param | Type |
| --- | --- |
| amount | <code>number</code> | 
| [currency] | <code>string</code> | 

<a name="Money+nearestWhole"></a>

### money.nearestWhole ⇒ [<code>Money</code>](#Money)
**Kind**: instance property of [<code>Money</code>](#Money)  
**Summary**: Returns `Money` rounded to the nearest whole value.  
**Access**: public  
<a name="Money+nearestDollar"></a>

### money.nearestDollar ⇒ [<code>Money</code>](#Money)
**Kind**: instance property of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` rounded to the nearest whole value.
_**Note**: This property is simply an API for common US usage.  
**Access**: public  
<a name="Money+add"></a>

### money.add(other) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns the sum two `Money`s.<br/>
_**Warning**: will throw an error for dissimilar currencies.
Use `isOfCurrency` to check currencies and `exchange` as necessary._  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>Money</code>](#Money) | {Money} of currency to add to this |

<a name="Money+subtract"></a>

### money.subtract(other) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns the difference two `Money`s.<br/>
_**Warning**: will throw an error for dissimilar currencies.
Use `isOfCurrency` to check currencies and `exchange` as necessary._  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Money</code>](#Money) | 

<a name="Money+multiply"></a>

### money.multiply(factor) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns the product of `this` multiplied by factor  
**Access**: public  

| Param | Type |
| --- | --- |
| factor | <code>number</code> | 

<a name="Money+divide"></a>

### money.divide(divisor) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns the quotient of `this` divided by divisor.  
**Access**: public  

| Param | Type |
| --- | --- |
| divisor | <code>number</code> | 

<a name="Money+equals"></a>

### money.equals(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if `this` and another `Money` have equal values and currencies.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Money</code>](#Money) | 

<a name="Money+isGreaterThan"></a>

### money.isGreaterThan(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if `this` value is greater than another `Money` of the same currency's value.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Money</code>](#Money) | 

<a name="Money+isLessThan"></a>

### money.isLessThan(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if `this` value is less than another `Money` of the same currency's value.  
**Access**: public  

| Param | Type |
| --- | --- |
| other | [<code>Money</code>](#Money) | 

<a name="Money+round"></a>

### money.round([to]) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` rounded to the nearest tens exponent.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [to] | <code>number</code> | tens exponent to round to. |

<a name="Money+roundDown"></a>

### money.roundDown([to]) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` rounded down to the nearest tens exponent.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [to] | <code>number</code> | tens exponent to round to. |

<a name="Money+roundUp"></a>

### money.roundUp([to]) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` rounded up to the nearest tens exponent.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [to] | <code>number</code> | tens exponent to round to. |

<a name="Money+exchange"></a>

### money.exchange(rate, currency) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a `Money` with type currency and value calculated over the passed rate of exchange.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| rate | <code>number</code> | rate of exchange |
| currency | <code>string</code> | symbol for target currency |

<a name="Money+isOfCurrency"></a>

### money.isOfCurrency(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if the target `Money` is of the same currency.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>Money</code>](#Money) | other Money |

<a name="Money+toString"></a>

### money.toString([format]) ⇒ <code>string</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns a string representation of this formatted to the
passed format, where format follows the following rules:<br/>
`<wholeValue(d)><decimalCharacter(.|,)><fractionalValue(c)><numberOfFractionalValues(#)>`<br/>
 _**Example**: for money with value `1234.5678` and currency 'C', `d,c2` would return `'C1.234,56'`_  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>string</code> | <code>&quot;d.c2&quot;</code> | format string. |

<a name="Money+zero"></a>

### money.zero(currency) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns `Money` with a zero value.  
**Access**: public  

| Param | Type |
| --- | --- |
| currency | <code>string</code> | 

<a name="Money+isMoney"></a>

### money.isMoney(other) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if other is an instance of `Money`.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| other | <code>\*</code> | value to test |

<a name="Money+canParse"></a>

### money.canParse(value) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns true if value can be parsed to `Money`.  
**Access**: public  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="Money+parse"></a>

### money.parse(value) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns `Money` with value and currency calculated from passed value
if value can be parsed into `Money`. Otherwise will throw an error.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to parse to Money |

<a name="Money+tryParse"></a>

### money.tryParse(value) ⇒ [<code>Money</code>](#Money)
**Kind**: instance method of [<code>Money</code>](#Money)  
**Summary**: Returns `Money` with value and currency calculated from passed value
if value can be parsed into `Money`, otherwise null.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to parse to Money |

<a name="Service"></a>

## Service
**Kind**: global class  
**Summary**: Service abstraction.  

* [Service](#Service)
    * [new Service([config])](#new_Service_new)
    * _instance_
        * [.$get(endpoint, [payload], [config])](#Service+$get)
        * [.$post(endpoint, [payload], [config])](#Service+$post)
        * [.$put(endpoint, [payload], [config])](#Service+$put)
        * [.$patch(endpoint, [payload], [config])](#Service+$patch)
        * [.$delete(endpoint, [config])](#Service+$delete)
        * [.$head(endpoint, [config])](#Service+$head)
        * [.$options(endpoint, [config])](#Service+$options)
    * _static_
        * [.all(operations)](#Service.all)

<a name="new_Service_new"></a>

### new Service([config])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> | <code>{}</code> | Additional configurations to set for all calls. See axios documentation for list of available values. |

<a name="Service+$get"></a>

### service.$get(endpoint, [payload], [config])
**Kind**: instance method of [<code>Service</code>](#Service)  
**Summary**: Call endpoint with GET request.  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>String</code> |  | Target endpoint address |
| [payload] | <code>Object</code> | <code>{}</code> | Payload to pass with request |
| [config] | <code>Object</code> | <code>{}</code> | Additional configurations to set for this call. See axios documentation for list of available values. |

<a name="Service+$post"></a>

### service.$post(endpoint, [payload], [config])
**Kind**: instance method of [<code>Service</code>](#Service)  
**Summary**: Call endpoint with POST request.  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>String</code> |  | Target endpoint address |
| [payload] | <code>Object</code> | <code>{}</code> | Payload to pass with request |
| [config] | <code>Object</code> | <code>{}</code> | Additional configurations to set for this call. See axios documentation for list of available values. |

<a name="Service+$put"></a>

### service.$put(endpoint, [payload], [config])
**Kind**: instance method of [<code>Service</code>](#Service)  
**Summary**: Call endpoint with PUT request.  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>String</code> |  | Target endpoint address |
| [payload] | <code>Object</code> | <code>{}</code> | Payload to pass with request |
| [config] | <code>Object</code> | <code>{}</code> | Additional configurations to set for this call. See axios documentation for list of available values. |

<a name="Service+$patch"></a>

### service.$patch(endpoint, [payload], [config])
**Kind**: instance method of [<code>Service</code>](#Service)  
**Summary**: Call endpoint with PATCH request.  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>String</code> |  | Target endpoint address |
| [payload] | <code>Object</code> | <code>{}</code> | Payload to pass with request |
| [config] | <code>Object</code> | <code>{}</code> | Additional configurations to set for this call. See axios documentation for list of available values. |

<a name="Service+$delete"></a>

### service.$delete(endpoint, [config])
**Kind**: instance method of [<code>Service</code>](#Service)  
**Summary**: Call endpoint with DELETE request.  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>String</code> |  | Target endpoint address |
| [config] | <code>Object</code> | <code>{}</code> | Additional configurations to set for this call. See axios documentation for list of available values. |

<a name="Service+$head"></a>

### service.$head(endpoint, [config])
**Kind**: instance method of [<code>Service</code>](#Service)  
**Summary**: Call endpoint with HEAD request.  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>String</code> |  | Target endpoint address |
| [config] | <code>Object</code> | <code>{}</code> | Additional configurations to set for this call. See axios documentation for list of available values. |

<a name="Service+$options"></a>

### service.$options(endpoint, [config])
**Kind**: instance method of [<code>Service</code>](#Service)  
**Summary**: Call endpoint with OPTIONS request.  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>String</code> |  | Target endpoint address |
| [config] | <code>Object</code> | <code>{}</code> | Additional configurations to set for this call. See axios documentation for list of available values. |

<a name="Service.all"></a>

### Service.all(operations)
**Kind**: static method of [<code>Service</code>](#Service)  
**Summary**: Call an array of endpoints in parallel.  
**Access**: public  

| Param | Type |
| --- | --- |
| operations | <code>Array</code> | 

<a name="AbstractSpecification"></a>

## AbstractSpecification
**Kind**: global class  

* [AbstractSpecification](#AbstractSpecification)
    * [.and()](#AbstractSpecification+and)
    * [.or()](#AbstractSpecification+or)
    * [.xor()](#AbstractSpecification+xor)
    * [.not()](#AbstractSpecification+not)
    * *[.isSatisfiedBy()](#AbstractSpecification+isSatisfiedBy)*

<a name="AbstractSpecification+and"></a>

### abstractSpecification.and()
**Kind**: instance method of [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: public  
<a name="AbstractSpecification+or"></a>

### abstractSpecification.or()
**Kind**: instance method of [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: public  
<a name="AbstractSpecification+xor"></a>

### abstractSpecification.xor()
**Kind**: instance method of [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: public  
<a name="AbstractSpecification+not"></a>

### abstractSpecification.not()
**Kind**: instance method of [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: public  
<a name="AbstractSpecification+isSatisfiedBy"></a>

### *abstractSpecification.isSatisfiedBy()*
**Kind**: instance abstract method of [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: public  
<a name="AndSpecification"></a>

## AndSpecification ⇐ [<code>AbstractSpecification</code>](#AbstractSpecification)
**Kind**: global class  
**Extends**: [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: package  

* [AndSpecification](#AndSpecification) ⇐ [<code>AbstractSpecification</code>](#AbstractSpecification)
    * [.and()](#AbstractSpecification+and)
    * [.or()](#AbstractSpecification+or)
    * [.xor()](#AbstractSpecification+xor)
    * [.not()](#AbstractSpecification+not)
    * [.isSatisfiedBy()](#AbstractSpecification+isSatisfiedBy)

<a name="AbstractSpecification+and"></a>

### andSpecification.and()
**Kind**: instance method of [<code>AndSpecification</code>](#AndSpecification)  
**Access**: public  
<a name="AbstractSpecification+or"></a>

### andSpecification.or()
**Kind**: instance method of [<code>AndSpecification</code>](#AndSpecification)  
**Access**: public  
<a name="AbstractSpecification+xor"></a>

### andSpecification.xor()
**Kind**: instance method of [<code>AndSpecification</code>](#AndSpecification)  
**Access**: public  
<a name="AbstractSpecification+not"></a>

### andSpecification.not()
**Kind**: instance method of [<code>AndSpecification</code>](#AndSpecification)  
**Access**: public  
<a name="AbstractSpecification+isSatisfiedBy"></a>

### andSpecification.isSatisfiedBy()
**Kind**: instance method of [<code>AndSpecification</code>](#AndSpecification)  
**Overrides**: [<code>isSatisfiedBy</code>](#AbstractSpecification+isSatisfiedBy)  
**Access**: public  
<a name="OrSpecification"></a>

## OrSpecification ⇐ [<code>AbstractSpecification</code>](#AbstractSpecification)
**Kind**: global class  
**Extends**: [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: package  

* [OrSpecification](#OrSpecification) ⇐ [<code>AbstractSpecification</code>](#AbstractSpecification)
    * [.and()](#AbstractSpecification+and)
    * [.or()](#AbstractSpecification+or)
    * [.xor()](#AbstractSpecification+xor)
    * [.not()](#AbstractSpecification+not)
    * [.isSatisfiedBy()](#AbstractSpecification+isSatisfiedBy)

<a name="AbstractSpecification+and"></a>

### orSpecification.and()
**Kind**: instance method of [<code>OrSpecification</code>](#OrSpecification)  
**Access**: public  
<a name="AbstractSpecification+or"></a>

### orSpecification.or()
**Kind**: instance method of [<code>OrSpecification</code>](#OrSpecification)  
**Access**: public  
<a name="AbstractSpecification+xor"></a>

### orSpecification.xor()
**Kind**: instance method of [<code>OrSpecification</code>](#OrSpecification)  
**Access**: public  
<a name="AbstractSpecification+not"></a>

### orSpecification.not()
**Kind**: instance method of [<code>OrSpecification</code>](#OrSpecification)  
**Access**: public  
<a name="AbstractSpecification+isSatisfiedBy"></a>

### orSpecification.isSatisfiedBy()
**Kind**: instance method of [<code>OrSpecification</code>](#OrSpecification)  
**Overrides**: [<code>isSatisfiedBy</code>](#AbstractSpecification+isSatisfiedBy)  
**Access**: public  
<a name="XorSpecification"></a>

## XorSpecification ⇐ [<code>AbstractSpecification</code>](#AbstractSpecification)
**Kind**: global class  
**Extends**: [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: package  

* [XorSpecification](#XorSpecification) ⇐ [<code>AbstractSpecification</code>](#AbstractSpecification)
    * [.and()](#AbstractSpecification+and)
    * [.or()](#AbstractSpecification+or)
    * [.xor()](#AbstractSpecification+xor)
    * [.not()](#AbstractSpecification+not)
    * [.isSatisfiedBy()](#AbstractSpecification+isSatisfiedBy)

<a name="AbstractSpecification+and"></a>

### xorSpecification.and()
**Kind**: instance method of [<code>XorSpecification</code>](#XorSpecification)  
**Access**: public  
<a name="AbstractSpecification+or"></a>

### xorSpecification.or()
**Kind**: instance method of [<code>XorSpecification</code>](#XorSpecification)  
**Access**: public  
<a name="AbstractSpecification+xor"></a>

### xorSpecification.xor()
**Kind**: instance method of [<code>XorSpecification</code>](#XorSpecification)  
**Access**: public  
<a name="AbstractSpecification+not"></a>

### xorSpecification.not()
**Kind**: instance method of [<code>XorSpecification</code>](#XorSpecification)  
**Access**: public  
<a name="AbstractSpecification+isSatisfiedBy"></a>

### xorSpecification.isSatisfiedBy()
**Kind**: instance method of [<code>XorSpecification</code>](#XorSpecification)  
**Overrides**: [<code>isSatisfiedBy</code>](#AbstractSpecification+isSatisfiedBy)  
**Access**: public  
<a name="NotSpecification"></a>

## NotSpecification ⇐ [<code>AbstractSpecification</code>](#AbstractSpecification)
**Kind**: global class  
**Extends**: [<code>AbstractSpecification</code>](#AbstractSpecification)  
**Access**: package  

* [NotSpecification](#NotSpecification) ⇐ [<code>AbstractSpecification</code>](#AbstractSpecification)
    * [.and()](#AbstractSpecification+and)
    * [.or()](#AbstractSpecification+or)
    * [.xor()](#AbstractSpecification+xor)
    * [.not()](#AbstractSpecification+not)
    * [.isSatisfiedBy()](#AbstractSpecification+isSatisfiedBy)

<a name="AbstractSpecification+and"></a>

### notSpecification.and()
**Kind**: instance method of [<code>NotSpecification</code>](#NotSpecification)  
**Access**: public  
<a name="AbstractSpecification+or"></a>

### notSpecification.or()
**Kind**: instance method of [<code>NotSpecification</code>](#NotSpecification)  
**Access**: public  
<a name="AbstractSpecification+xor"></a>

### notSpecification.xor()
**Kind**: instance method of [<code>NotSpecification</code>](#NotSpecification)  
**Access**: public  
<a name="AbstractSpecification+not"></a>

### notSpecification.not()
**Kind**: instance method of [<code>NotSpecification</code>](#NotSpecification)  
**Access**: public  
<a name="AbstractSpecification+isSatisfiedBy"></a>

### notSpecification.isSatisfiedBy()
**Kind**: instance method of [<code>NotSpecification</code>](#NotSpecification)  
**Overrides**: [<code>isSatisfiedBy</code>](#AbstractSpecification+isSatisfiedBy)  
**Access**: public  
<a name="AbstractStrategy"></a>

## *AbstractStrategy*
**Kind**: global abstract class  
**Summary**: Strategy pattern allows a class to delegate behavior or execution
to an eternal dependency that can be selected at runtime. Because
JavaScript is not a statically typed language and does not support
Interfaces or Generics, it is only possible to restrict access to
target members via convention. Because of this, it is allowed for
the implementation of the `execute` method of an extending
concrete strategy to access both the public and $private members
of it's target.  
<a name="AbstractStrategy+execute"></a>

### **abstractStrategy.execute()**
**Kind**: instance abstract method of [<code>AbstractStrategy</code>](#AbstractStrategy)  
**Access**: public  
<a name="alpha"></a>

## alpha : <code>RegExp</code>
**Kind**: global constant  
<a name="alphaNumeric"></a>

## alphaNumeric : <code>RegExp</code>
**Kind**: global constant  
<a name="base64"></a>

## base64 : <code>RegExp</code>
**Kind**: global constant  
<a name="dataUrl"></a>

## dataUrl : <code>RegExp</code>
**Kind**: global constant  
<a name="email"></a>

## email : <code>RegExp</code>
**Kind**: global constant  
<a name="empty"></a>

## empty : <code>RegExp</code>
**Kind**: global constant  
<a name="numeric"></a>

## numeric : <code>RegExp</code>
**Kind**: global constant  
<a name="script"></a>

## script : <code>RegExp</code>
**Kind**: global constant  
<a name="uid"></a>

## uid : <code>RegExp</code>
**Kind**: global constant  
<a name="url"></a>

## url : <code>RegExp</code>
**Kind**: global constant  
<a name="uuid"></a>

## uuid : <code>RegExp</code>
**Kind**: global constant  
<a name="uid"></a>

## uid() ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Returns a "unique" string.  
<a name="uuid"></a>

## uuid() ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Returns a universally "unique" string.  
<a name="round"></a>

## round(value, toNearest) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Rounds a value to the nearest tens exponent.  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| toNearest | <code>number</code> | 

<a name="roundUp"></a>

## roundUp(value, toNearest) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Rounds a value up to the nearest tens exponent.  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| toNearest | <code>number</code> | 

<a name="roundDown"></a>

## roundDown(value, toNearest) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Rounds a value down to the nearest tens exponent.  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| toNearest | <code>number</code> | 

<a name="roundTowardZero"></a>

## roundTowardZero(value, toNearest) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Rounds a value toward zero to the nearest tens exponent.  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| toNearest | <code>number</code> | 

<a name="gcd"></a>

## gcd(a, b) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Returns the greatest common denominator for arguments a and b.  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="fib"></a>

## fib(n) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Returns the nth number in a Fibonacci set.<br/>
_**Note**: zero indexed._<br/>
_**Warning**: Due to this function's attempt at leveraging tail-calls
it can cause stack overflows for large values of n._  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | index. |

<a name="fib2"></a>

## fib2(n) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Returns the nth number in a Fibonacci set.<br/>
_**Note**: zero indexed._<br/>
_**Warning**: This function has better performance and is not
prone to stack overflows as is fib._  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | index. |

<a name="fibArray"></a>

## fibArray(n) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Returns an array of length n with Fibonacci values.<br/>
_**Warning**: Due to this function's attempt at leveraging tail-calls
it can cause stack overflows for large values of n._  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | length. |

<a name="fibArray2"></a>

## fibArray2(n) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Returns an array of length n with Fibonacci values.<br/>
_**Warning**: This function has better performance and is not
prone to stack overflows as is fibArray._  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | length. |

<a name="tryParseInt"></a>

## tryParseInt(value, valueIfNan) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Returns a parsed integer value for values that can be parsed,
or a set value if passed, or zero.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to parse. |
| valueIfNan | <code>number</code> | value to return if {value} cannot be parsed. |

<a name="tryParseFloat"></a>

## tryParseFloat(value, valueIfNan) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Returns a parsed float value for values that can be parsed,
or a set value if passed, or zero.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to parse. |
| valueIfNan | <code>number</code> | value to return if {value} cannot be parsed. |

<a name="debounce"></a>

## debounce(func, wait, [immediate]) ⇒ <code>function</code>
**Kind**: global function  
**Summary**: Returns a debounced function per the function and wait passed  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to debounce. |
| wait | <code>number</code> | The time to wait between calls of func. |
| [immediate] | <code>boolean</code> | True if func should be called immediately. |

<a name="build"></a>

## build(...rest) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Builds a string from string arguments  

| Param |
| --- |
| ...rest | 

<a name="format"></a>

## format(format, ...rest) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Returns a string template filled with passed values.  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>string</code> | String format in the form "${0} indexed ${1}." |
| ...rest | <code>string</code> | Value arguments e.g. "Zero", "arguments" |

<a name="trim"></a>

## trim(string) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Returns a string with leading and trailing whitespace trimmed.  

| Param |
| --- |
| string | 

<a name="trimStart"></a>

## trimStart(string) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Returns a string with leading whitespace trimmed.  

| Param |
| --- |
| string | 

<a name="trimEnd"></a>

## trimEnd(string) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Returns a string with trailing whitespace trimmed.  

| Param |
| --- |
| string | 

<a name="capitalize"></a>

## capitalize(string) ⇒ <code>string</code>
**Kind**: global function  
**Summary**: Returns a string with the first character capitalized.  

| Param |
| --- |
| string | 

<a name="nextTick"></a>

## nextTick(func) ⇒ <code>number</code>
**Kind**: global function  
**Summary**: Postpones function execution until the next event loop.  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | function to move to the next event loop |

<a name="wait"></a>

## wait(timeout) ⇒ <code>Promise.&lt;any&gt;</code>
**Kind**: global function  
**Summary**: A promisified setTimeout.  

| Param | Type | Description |
| --- | --- | --- |
| timeout | <code>number</code> | the number of milliseconds to wait |

