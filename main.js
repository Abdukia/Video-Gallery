const video = document.querySelector(".video");
const videoPlayer = document.querySelector(".video .videoPlayer");
const closeBtn = document.querySelector(".video .close-btn");

const playVideo = (videoId) => {   

    if (document.pictureInPictureElement == null) {
        video.classList.add("active");
    }

    videoPlayer.src = 'https://drive.google.com/uc?export=download%Id=${videoId'}
}

closeBtn.addEventListener("click", () => {
    video.classList.remove("active");
    videoPlayer.pause();
})

videoPlayer.addEventListener("enterpictureinpicture", () => {
    video.classList.remove("active");
})

videoPlayer.addEventListener("leavepictureinpicture", () => {
    video.classList.add("active");
})
