calculateTip = () => {
    let billAm = document.getElementById("billAm").value;
    let service = document.getElementById("service").value;
    let people = document.getElementById("people").value;
    console.log(people);
    if(billAm === 0 || service === 0){
        alert("Enter values!");
    }
    if (people <= 1) {
        document.getElementById("each").style.display = "none";
      } else {
        document.getElementById("each").style.display = "inline-block";
      }
    

    let total = (billAm * service) / people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("total").innerHTML = total + " €";
    document.getElementById("tipam").style.display = "block"

document.getElementByIds
    
    
}

let button = document.getElementById("button");
    button.onclick = () => {
        calculateTip();
    }