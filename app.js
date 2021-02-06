let body=document.getElementById("body");
let title=document.getElementsByTagName('h1')[0];
let stat=false;
let fontsize=80;
let origin=80;
function changecolor() {
    fontsize=origin
    title.style.fontSize=`${origin}px`
    for (let i=1;i<=6;i++) {
        setTimeout(()=>{
            if(stat) {
                body.style.backgroundColor='#ffffff'
                title.style.color="#ff2600"
            }else{
                body.style.backgroundColor="#ff2600"
                title.style.color="#ffffff"
            }
            stat=!stat
        }, i*433);
    }
}

function grow() {
    for (let i=1;i<=3;i++) {
        setTimeout(()=>{
            fontsize+=10
            title.style.fontSize=`${fontsize}px`
        }, i*300);
    }
}
for (let i=0;i<=3;i++) {
    let n=3500*i
    setTimeout(() => {
        changecolor()
    }, n);
    setTimeout(() => {
        grow()
    }, n+2600);
}
setTimeout(() => {
    title.innerHTML="Happy birthday <strong>A ZAML</strong>!!"
}, 10500);
