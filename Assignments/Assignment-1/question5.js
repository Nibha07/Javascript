
var nums= function numberArray(strings)
            {
                var result = [];
                strings.forEach(element => {
                    result.push(Number(element));
                });
                return result;
            }

console.log(nums(["3.2","6.7"]));
        