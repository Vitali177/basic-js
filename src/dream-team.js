module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  let arr = [];
  members.forEach((item) => {
    if (typeof(item) === 'string') {
      arr.push((item.trim())[0].toUpperCase());
    }
  })
  arr = arr.sort();
  return arr.join('');
};