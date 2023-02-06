const wordEndings = {
  'yearsEndings': {
    firstState: 'лет',
    secondState: 'год',
    thirdState: 'года',
    fourthState: 'лет',
  },
  'monthEndings': {
    firstState: 'месяцев',
    secondState: 'месяц',
    thirdState: 'месяца',
    fourthState: 'месяцев',
  },
};

export const inclineWord = (num, type) => {
  let n = num ? num.toString() : '1';
  let last = n.slice(-1);
  let twoLast = n.slice(-2);
  if (twoLast === '11' || twoLast === '12' || twoLast === '13' || twoLast === '14') {
    return `${n} ${wordEndings[type].firstState}`;
  }
  if (last === '1') {
    return `${n} ${wordEndings[type].secondState}`;
  }
  if (last === '2' || last === '3' || last === '4') {
    return `${n} ${wordEndings[type].thirdState}`;
  }
  return `${n} ${wordEndings[type].fourthState}`;
};
