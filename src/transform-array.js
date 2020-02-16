module.exports = function transform(arr) {

    if (!Array.isArray(arr)) throw new Error('');
    if (arr === []) return arr;
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '--discard-next') {
            arr = arr.filter((v, index) => index !== i + 1);
        }

        if (arr[i] === '--discard-prev') {
            arr = arr.filter((v, index) => index !== i - 1);
        }

        if (arr[i] === '--double-next') {
            arr = [...arr.slice(0, i), arr[i + 1], ...arr.slice(i + 1)];
        }

        if (arr[i] === '--double-prev') {
            arr = [...arr.slice(0, i), arr[i - 1], ...arr.slice(i + 1)];
        }
    }
    return arr;
};
