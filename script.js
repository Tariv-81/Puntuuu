const message = `

My Dearest Punti ❤️,

Happy International Girlfriend's Day.

Thank you for coming into my life.

Every smile of yours makes my whole day better.

Whenever I'm with you,
everything feels peaceful.

You're not just my girlfriend...

You're my home.

I promise to keep loving you,
respecting you,
and making memories with you.

No matter what happens,

I'll always choose you.

❤️ Forever Yours.

`;

let i = 0;

function typeWriter(){

if(i < message.length){

document.getElementById("typing").innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

typeWriter();

function showPhotos(){

document.getElementById("gallery").style.display="grid";

}