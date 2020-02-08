let number = 0;
const htmlNum = document.getElementById("number");
htmlNum.innerText = number;

lower = () => {
    number-- ;
    htmlNum.innerText = number;
    if(number < 0) {htmlNum.style.color = "red";}
    else if (number > 0) {htmlNum.style.color = "green";
    } else if(number === 0) {htmlNum.style.color = "black";}
}

add = () => {
    number++;
    htmlNum.innerText = number;
    if(number < 0) {htmlNum.style.color = "red";}
    else if (number > 0) {htmlNum.style.color = "green";
    }else if(number === 0){htmlNum.style.color = "black";}
}