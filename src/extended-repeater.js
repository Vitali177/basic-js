module.exports = function repeater(str, options) {
    let res = '';

    let repeatTimes = options.repeatTimes;
    if (!options.repeatTimes) {
        repeatTimes = 1;
    }

    let additionRepeatTimes = options.additionRepeatTimes;
    if (!options.additionRepeatTimes) {
        additionRepeatTimes = 1;
    }

    let separator = '+';
    if (options.separator) {
        separator = options.separator;
    }

    let addition = '';
    if (options.addition) {
        addition = options.addition;
    }


    let additionSeparator = '';
    if (options.additionSeparator) {
        additionSeparator = options.additionSeparator;
    }

    for (let i = 0; i < repeatTimes; i++) {
        res += `${str}`;

        for (let j = 0; j < additionRepeatTimes; j++) {
            res += `${addition}`;

            if (j !== additionRepeatTimes - 1) {
                res += `${additionSeparator}`;
            }   
        }

        if (i !== repeatTimes - 1) {
            res += `${separator}`;
        }
    }
    return res;
};
  