const body = document.querySelector("body");

randomColor = () => {
    const letter = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0 ; i<6;i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }

    body.style.backgroundColor = color;
}

console.log(randomColor());
