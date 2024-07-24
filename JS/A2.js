function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
function checkCookie(name) {
  const cookie = getCookie(name);
  if (cookie === undefined || cookie === null || cookie === "") {
    return false;
  }
  return true;
}


if (checkCookie("IsGood") != true) {
  if (getCookie("IsGood") != "OK") {
    window.location.pathname = "检测浏览器版本.html"
  }

}

const video = document.getElementById('video');
const playback = document.getElementById('playback');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const playBtn = document.getElementById('playBtn');

let mediaRecorder;
let recordedChunks = [];

// 请求摄像头权限并显示视频流
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        video.srcObject = stream;

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            playback.src = URL.createObjectURL(blob);
            playBtn.disabled = false;
            recordedChunks = [];
        };
    })
    .catch(err => {
        console.error("无法访问摄像头: ", err);
    });

startBtn.addEventListener('click', () => {
    mediaRecorder.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    playBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
    mediaRecorder.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

playBtn.addEventListener('click', () => {
    playback.play();
});










