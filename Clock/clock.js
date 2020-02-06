

showTime = () => {
    var clock = document.getElementById('clock');
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if(m<10) {m="0" + m;};
    if(s<10) {s="0" + s;};
    
    

    
    var time = h + ":" + m + ":" + s;
    clock.innerText = time;

    var t = setTimeout(showTime,500);
}

showDate = () => {
    var date = document.getElementById("date");
    var day= new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
       
    date.innerText = day + "." + month + "." + year;
}

showDate();