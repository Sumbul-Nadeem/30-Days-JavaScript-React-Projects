let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

function generateQR(){
    if(qrText.value.trim().length > 0){
        qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");
        downloadBtn.style.display = "block";  // Show download button
    } else {
        qrText.classList.add("error");
        setTimeout(() =>{
            qrText.classList.remove("error");
        }, 3000);
    }
}

function downloadQR() {
    if(qrImg.src !== "") {
        const link = document.createElement("a");
        link.href = qrImg.src;
        link.download = "qrcode.png";
        link.click();
    }
}
