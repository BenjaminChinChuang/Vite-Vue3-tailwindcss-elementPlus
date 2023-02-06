/**
* 數字轉換成2位數 ex. 1 => 01
*
* @param number {String} 數字
* @return {String}
*/
const toDoubleDigit = number => {
  return (number < 10 && number > 0) ? `0${number}` : `${number}`
}

/**
* 日期轉換成 yyyy/mm/dd
*
* @param date {String || Date Object} 日期
* @return {String}
*/
const convertToDateString = (date = new Date()) => {
  const dateObj = new Date(date)
  return `${dateObj.getFullYear()}/${toDoubleDigit(dateObj.getMonth() + 1)}/${toDoubleDigit(dateObj.getDate())}`
}

/**
* 日期往前/後 推幾天
*
* @param day {String || Number} 天數 (可為正負數)
* @param baseDate {String || Date Object} 基準日期
* @return {Date Object}
*/
const dateOffsetByDay = (day = 0, baseDate) => {
  let finalDate = new Date(baseDate)
  finalDate.setDate(finalDate.getDate() + Number(day))
  return finalDate
}

/**
* 日期往前/後 推幾年
*
* @param year {String || Number} 年數 (可為正負數)
* @param baseDate {String || Date Object} 基準日期
* @return {Date Object}
*/
const dateOffsetByYear = (year = 0, baseDate) => {
  let finalDate = new Date(baseDate)
  finalDate.setFullYear(finalDate.getFullYear() + Number(year))
  return finalDate
}

/**
* 計算兩日期相差的天數
*
* @param date {String || Date Object} 日期
* @param baseDate {String || Date Object} 基準日期
* @return {Number}
*/
const diffDays = (date, baseDate) => {
  const oneDayTimestamp = 1000 * 3600 * 24
  return Math.floor((new Date(date).getTime() - new Date(baseDate).getTime()) / oneDayTimestamp)
}

/**
* 獲得兩日期之間的所有日期陣列
* @function getDateRangeSet
* @param {String || Date Object} startDate 日期      // date sould only contain year, month, day
* @param {String || Date Object} endDate 基準日期    // date sould only contain year, month, day
* @param {Boolean} isReversed 陣列是否由小到大排序
* @return {Array}
*/
const getDateRangeSet = (startDate, endDate, isReversed = false) => {
  let minusDay = diffDays(startDate, endDate)
  let minusDayAbsolute = Math.abs(minusDay)
  let baseCalculateDate = (minusDay < 0) ? endDate : startDate
  let dateArray = []

  while(minusDayAbsolute >= 0) {
    dateArray.push(convertToDateString(dateOffsetByDay(-minusDayAbsolute, baseCalculateDate)))
    minusDayAbsolute -= 1
  }

  return isReversed ? dateArray.reverse() : dateArray
}

/**
 * 計算指定的日期是否在給定的區間內
 * @function isOutOfDateRange
 * @param targetDate {String || Date Object} 日期
 * @param minDate {String || Date Object} 日期
 * @param maxDate {String || Date Object} 日期
 * @return {Boolen}
 */
const isOutOfDateRange = (targetDate, minDate, maxDate) => (diffDays(targetDate, minDate) < 0 || diffDays(targetDate, maxDate) > 0)

export {
  toDoubleDigit,
  convertToDateString,
  dateOffsetByDay,
  dateOffsetByYear,
  diffDays,
  getDateRangeSet,
  isOutOfDateRange
}