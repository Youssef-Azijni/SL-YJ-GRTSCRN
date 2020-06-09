// Wrapping every letter in a seperate span (inefficient but yknow it works ebic style lets go)
var textWrapper = document.querySelector('.m13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


//Ik heb materializeCSS voor ons groetscherm helemaal geditcht en ik gebruik hiervoor anime (I know hahah weeb maar het is genuinely super goed)
anime.timeline({loop: true})
    .add({
        targets: '.m13 .letter',
        opacity: [0.3], 
        easing: "easeinOutQuad",
        duration: 1500,
        delay: (el, i) => 50 * (i+1)
    }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
