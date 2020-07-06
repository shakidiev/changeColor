const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'pink', 'silver', '#3b5998', 'brown', 'black', 'violet', 'grey', 'white'];

colorBtn.addEventListener('click', changeColor);

function changeColor () {
    // bodyBcg.style.backgroundColor =colors[0];
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor =colors[random]
}