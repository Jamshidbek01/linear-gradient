let btn = document.querySelector('.button');
function random() {
    let ranNum = Math.trunc(Math.random() * 360) + 1;
    return ranNum
}
function bgcolor() {
    document.querySelector('.body').style.background = `linear-gradient(${random()}deg, rgb(${random()},${random()},${random()}),rgb(${random()},${random()},${random()}),rgb(${random()},${random()},${random()}))`
    document.querySelector('.button').style.background = `linear-gradient(${random()}deg, rgb(${random()},${random()},${random()}),rgb(${random()},${random()},${random()}),rgb(${random()},${random()},${random()}))`
}
btn.addEventListener('click', function () {
    bgcolor()
})
random()
bgcolor()