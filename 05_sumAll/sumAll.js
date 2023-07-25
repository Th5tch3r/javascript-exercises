const sumAll = function(firstNum, secondNum) {
        if (firstNum < 0 || secondNum < 0) {
                return "ERROR";
        }
        if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
                return "ERROR";
        }

        if (firstNum > secondNum) {
                const temp = firstNum;
                firstNum = secondNum;
                secondNum = temp;
        }

        let total = 0;
        for (let i = firstNum; i <= secondNum; i++) {
                total += i;
        }
        return total;

};

// Do not edit below this line
module.exports = sumAll;
