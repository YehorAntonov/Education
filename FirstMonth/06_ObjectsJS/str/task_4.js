function countCharacters(str) {
    let obj = {};
    let arr = str.split('');
    let arr2 = [];
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        if (i === (arr.length - 1))
        {
            if (arr3.includes(arr[i]) === false)
            {
                arr2.push(count);
                arr3.push(arr[i]);
            }

        }
        if (arr3.includes(arr[i]) === false)
        {

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === arr[i]) {
                    count++;
                }
                if (j === (arr.length - 1))
                {
                    arr2.push(count);
                }
            }
            arr3.push(arr[i]);
        }


    }

    for (let i = 0; i < arr3.length; i++)
    {
        let props = arr3[i];
        obj[props] = arr2[i];

    }
    return obj;
}

module.exports = countCharacters;