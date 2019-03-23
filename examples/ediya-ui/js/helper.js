/* -----------------------------------------------------
 * DOM 선택 헬퍼 함수 */

function els(selector, context) {
  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
  context = !context ? document : context.nodeType === 1 ? context : el(String(context));
  return context.querySelectorAll(selector);
}

function el(selector, context) {
  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
  context = !context ? document : context.nodeType === 1 ? context : el(String(context));
  return context.querySelector(selector);
}



/* -----------------------------------------------------
 * 날짜,시간 헬퍼 함수 */

function getYear(format) {
  return (new Date()).getFullYear() + (format || '');
}

function getMonth(format) {
  return ((new Date()).getMonth() + 1) + (format || '');
}

function getDate(format) {
  return (new Date()).getDate() + (format || '');
}

function getDay(format) {
  var day = (new Date()).getDay();
  switch(day) {
    case 0: day = '일'; break;
    case 1: day = '월'; break;
    case 2: day = '화'; break;
    case 3: day = '수'; break;
    case 4: day = '목'; break;
    case 5: day = '금'; break;
    case 6: day = '토';
  }
  return day + (format || '');
}

function getHours(format, ampm) {
  var hour = Number((new Date()).getHours());
  if (ampm) {
    ampm = !ampm ? '' : hour < 12 ? 'AM ' : 'PM ';
    hour = hour >= 12 ? hour - 12 : 12 - hour > 3 ? '0' + hour : hour;
  } 
  else { ampm = ''; }
  return ampm + hour + (format || '');
}

function getMinutes(format) {
  return (new Date()).getMinutes() + (format || '');
}

function getSeconds(format) {
  return (new Date()).getSeconds() + (format || '');
}

function getMilliseconds(format) {
  return (new Date()).getMilliseconds() + (format || '');
}

function getISOString(format) {
  return (new Date()).toISOString() + (format || '');
}
