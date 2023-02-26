const maintitle = document.getElementsByClassName("maintitle")[0];
const bio = document.getElementsByClassName("bio")[0];

try {
    maintitle.addEventListener("mouseover", () => {
        maintitle.innerText = "Matyáš Trnka";
    });
    maintitle.addEventListener("mouseout", () => {
        maintitle.innerText = "matrn";
    });
} catch {
    console.log("couldn't find maintitle");
};


const biooptions = ["<3 italian cuisine", "in love with USB-C", '"' + "should i use italic for this?" + '"' ,"professional dumbass", "open-source is the way" ,"professional procrastinator", "yes." ,'"' + "it's not a bug, it's a feature" + '"', "pizza", "professional indecisive person"];
var lastrandbio = 0;

window.setInterval(() => {
    var randbio = Math.floor(Math.random() * biooptions.length);
    while (lastrandbio == randbio) {
        randbio = Math.floor(Math.random() * biooptions.length);
    };
    lastrandbio = randbio;
    bio.innerText = biooptions[randbio];
}, 2000);