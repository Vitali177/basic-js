module.exports = function getSeason(date) {
  // return date.getMonth();
  if (!date) throw new Error('');
  let month = date.getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month > 4 && month < 8) return 'summer';
  if (month > 7 && month < 11) return 'autumn';
  return 'winter';
};
