module.exports = class DepthCalculator {
    calculateDepth(arr) {        
        let maxDepth = 0;
        let depth = 0;

        function calc(arr) {
            depth++;
            arr.forEach((item) => calc(item));

            if (depth > maxDepth) maxDepth = depth;
            depth = 0;
        }
        console.log(maxDepth);
        return maxDepth;
    }
};