const removeFromArray = function(arr, ...trash) {
        const newArr = [];

        arr.forEach((item) => {
              if (!trash.includes(item)) {
                newArr.push(item);
              }  
        });

        return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
