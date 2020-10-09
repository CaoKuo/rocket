let num = 40;

function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1; 
}

for (let i = 0; i < num; i ++) {
    const oI = document.createElement("i")
    oI.style.height = rand(30, 100) + 'px';
    oI.style.left = rand(1, 99) + 'vw';
    oI.style.animationDuration = rand(5, 30) / 10 + 's';

    document.getElementById('wrapper').appendChild(oI);
}