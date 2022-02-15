function picture1()
{
    for (let i = 0; i < 7; i++)
    {
        console.log('* '.repeat(7));
    }
    return  ('/ / / / / / /');
}
console.log(picture1());
function picture2()
{
    console.log('* '.repeat(7));
    for (let i = 0; i < 5; i++)
    {
        console.log('*           *');
    }
    console.log('* '.repeat(7));
    return  ('/ / / / / / /');
}
console.log(picture2());
function picture3()
{
    console.log('* '.repeat(7));
    let text = '*         *';
    console.log(text);
    for (let i = 0; i < 4; i++)
    {
        text = text.replace('  ', '');
        console.log(text);
    }
    console.log('*');
    return  ('/ / / / / / /');
}
console.log(picture3());
function picture4()
{
    console.log('*');
    let text = '* *';
    console.log(text);
    for (let i = 1; i < 5; i++)
    {
        text = text.replace(' *', '   *');
        console.log(text);
    }
    console.log('* '.repeat(7));
    return  ('/ / / / / / /');

}
console.log(picture4());
function picture5()
{
    console.log('            *');
    let text = '          * *';
    console.log(text);
    text = '        *   ';
    console.log(text + '*');
    let j = 3;
    for (let i = 2; i < 5; i++)
    {
        let bs = ' ';
        text = text.slice(2, 11);
        console.log(text + bs.repeat(j) + '*');
        j = j + 2;
    }
    console.log('* '.repeat(7));
    return  ('/ / / / / / /');
}
console.log(picture5());

function picture6()
{
    console.log('* '.repeat(7));
    text = '  *         ';
    console.log(text + '*');
    let  h = 9;
    let l = 4;
    let k = 2;
    for (let i = 0; i < 4; i++)
    {
        let bs = ' ';
        text = text.slice(k, h);
        console.log(bs.repeat(l) + '*' + text + '*');
        l = l + 2;
    }
    console.log('            *');

    return  ('/ / / / / / /');
}
console.log(picture6());

function picture7()
{
    let bs = ' ';
    let bs2 = ' ';
    let j = 10;
    let k = 0;
    for (let i = 0; i < 3; i++)
    {
        console.log(bs.repeat(k) + '*' + bs2.repeat(j) + ' *');
        k = k + 2;
        j = j - 4;
    }
    console.log('      *      ');
    let h = 4;
    let y = 2;
    for (let i = 0; i < 3; i++)
    {
        console.log(bs.repeat(h) + '*' + bs2.repeat(y) + ' *');
        h = h - 2;
        y = y + 4;
    }
    return  ('/ / / / / / /');
}
console.log(picture7());
function picture8()
{
    console.log('* '.repeat(7));
    let bs = ' ';
    let bs2 = ' ';
    let j = 6;
    let k = 2;
    for (let i = 0; i < 2; i++)
    {
        console.log(bs.repeat(k) + '*' + bs2.repeat(j) + ' *');
        k = k + 2;
        j = j - 4;
    }
    console.log('      *      ');
    return  ('/ / / / / / /');

}
console.log(picture8());

function picture9()
{
    console.log('      *      ');
    let bs = ' ';
    let bs2 = ' ';
    let h = 4;
    let y = 2;
    for (let i = 0; i < 2; i++)
    {
        console.log(bs.repeat(h) + '*' + bs2.repeat(y) + ' *');
        h = h - 2;
        y = y + 4;
    }
    console.log('* '.repeat(7));
}
console.log(picture9());