let btn = document.getElementById("Shorten");

btn.addEventListener('click', short);

async function short(){
let longurl = document.getElementById("longUrl").value;
let shorturl = document.getElementById("shortUrl");

const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
const data = await result.json();

shorturl.value = data.result.short_link2;

console.log(data.result.short_link2);
}

let x = document.getElementById("shortUrl");
let y = document.getElementById("copy");

y.onclick = ()=>{
   x.select();
   window.navigator.clipboard.writeText(x.value);
}