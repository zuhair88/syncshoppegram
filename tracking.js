let urlstring = new URL('https://webhost-shoppegram.free.beeceptor.com');
let searchParams = new URLSearchParams(urlstring.search);
console.log(searchParams.get('{{checkout.total}}'));  // outputs "m2-m3-m4-m5"




let btnGet = document.querySelector('button');
let input = document.querySelector('input');
let display = document.querySelector('h1');

btnGet.addEventListener('click', ()=>{
let url = new URL (urlstring);
let searchString = url.search.slice(1);

//let searchParams = new URLSearchParams(searchString);
let inputParam = input.value;
//display.innerText = searchParams.get('checkout.total');
document.getElementById("disp").innerHTML = searchParams.get(inputParam);
if (searchParams.has (inputParam)){
    display.innertext = searchParams.get(inputParam);
    }else {
        display.innerText = 'Wrong Parameter';

    };
});