document.getElementById("admin").addEventListener("click", function() {
  window.location.href = "login.html";
});

document.getElementById("associate").addEventListener("click", function() {
  window.location.href = "login.html";
});

document.getElementById("guest").addEventListener("click", function() {
  window.location.href = "login.html";
});

// Get the video element and the start scan button
const videoElement = document.getElementById('preview');
const startScanButton = document.getElementById('startScan');

// Initialize the scanner
let scanner = new Instascan.Scanner({ video: videoElement });

// Add a listener for when a QR code is scanned
scanner.addListener('scan', function (content) {
  alert('Scanned: ' + content);
});

// Add a click event listener to the start scan button
startScanButton.addEventListener('click', function () {
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
  });
});

