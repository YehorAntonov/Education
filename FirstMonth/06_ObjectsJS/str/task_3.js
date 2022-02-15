/*function find(str)
{
    return 'Title has this substring: ' + str;
}*/
function findTitle(array, str)
{
    let array2= [];
    for (let i = 0; i < array.length; i++)
    {
        if (typeof(array[i]) === 'object')
        {
            let obj = array[i];
            let key = Object.keys(obj);
            if (key[0] === 'title')
            {
                if (obj.title === str)
                {
                    array2.push(obj);
                }
            }
        }
    }
    return array2;
}


module.exports = findTitle;