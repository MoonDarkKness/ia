const video = document.getElementById("video")

function starVideo(){
    navigator.getUserMedia(
    { video: {}},
    stream => video.srcObject = stream,
    err => console.error(Error)
    )
}

starVideo();