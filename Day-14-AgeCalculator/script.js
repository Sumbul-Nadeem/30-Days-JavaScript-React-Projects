function age(){
    let d1 = parseInt(document.getElementById('date').value);
    let m1 = parseInt(document.getElementById('month').value);
    let y1 = parseInt(document.getElementById('year').value);

    if(isNaN(d1) || isNaN(m1) || isNaN(y1)){
        document.getElementById('age').className = "error";
        document.getElementById('age').innerHTML = "⚠ Please enter a valid date!";
        return;
    }

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Leap year fix
    if ((y2 % 4 === 0 && y2 % 100 !== 0) || (y2 % 400 === 0)) {
        month[1] = 29;
    }

    if(d1 > d2){
        d2 += month[m2 - 2 < 0 ? 11 : m2 - 2]; 
        m2 -= 1;
    }

    if(m1 > m2){
        m2 += 12;
        y2 -= 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

   if (y < 0) {
    document.getElementById('age').className = "error";
    document.getElementById('age').innerHTML = "⚠ Future date not valid!";
} else {
    document.getElementById('age').className = "";
    document.getElementById('age').innerHTML = `🎉 Your age is ${y} Years ${m} Months ${d} Days`;

}
    document.getElementById('date').value = "";
    document.getElementById('month').value = "";
    document.getElementById('year').value = "";

    setTimeout(() => {
    document.getElementById('age').innerHTML = "";
    }, 3000);
}

