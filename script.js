let intputext = document.querySelector(".intputext");
let inputbox = document.querySelector("#inputbox");
let inputbtn = document.querySelector("#inputbtn");
let qrImage = document.querySelector("#qrImage");


inputbtn.addEventListener('click', () => {
    if(inputbox.value.trim() === ""){
        alert("Please enter text or URL");
    } else {
        qrImage.src = "https://quickchart.io/qr?text=" + encodeURIComponent(inputbox.value);
    }
});
