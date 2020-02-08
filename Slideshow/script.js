const images = ["astrology-astronomy-background-image-956981.jpg","astronomy-beautiful-clouds-355465.jpg", "starry_sky_mountains_sunrise_120808_1920x1080.jpg"];
const slideshow = document.getElementById("slideshow");
slideshow.style.backgroundImage = `url("./${images[0]}")`;
const numPic = images.length - 1 ;
let currImg = 0;

right = () => {
    currImg++;
    if(currImg > numPic) {
        currImg = 0;
        slideshow.style.backgroundImage = `url("./Img/${images[currImg]}")`;
    } else {
        slideshow.style.backgroundImage = `url("./Img/${images[currImg]}")`;
    }
}

left = () => {
    currImg--;
    if(currImg < 0) {
        currImg = numPic;
        slideshow.style.backgroundImage = `url("./Img/${images[currImg]}")`;
    } else {
        slideshow.style.backgroundImage = `url("./Img/${images[currImg]}")`;
    }
}
