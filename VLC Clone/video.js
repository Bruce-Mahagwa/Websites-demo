const formatTime = (time) => {
	let seconds = Math.floor(time % 60);
	let min = Math.floor(time / 60) % 60;
	let hours = Math.floor(time / 3600)
	seconds = seconds < 10 ? `0${seconds}` : seconds;
	min = min < 10 ? `0${min}` : min;
	hours = hours < 10 ? `0${hours}` : hours;
	
	if (hours == 0) {
		return `${min}:${seconds}`
	}
	return `${hours}:${min}:${seconds}`
}

// VIDEO
// universals
const options = document.getElementsByClassName("options")[0]
const options_list = document.querySelector(".options-list");
const speed_options = document.querySelector(".speed-options")
const speed = document.querySelector(".speed-control")
// universals

const wrapper = document.querySelector(".wrapper");
const mainVideo = document.querySelector("#video");
const play_icon = document.querySelector(".play i")
const container = document.querySelector("#video-player")
const play_pause = document.querySelector(".play-pause");
// timer
let timer;
function hideControls() {
	if (mainVideo.paused) {
		return;
	}
	timer = setTimeout(() => {
		wrapper.classList.add("hide-controls")		
	}, 3000)
}
hideControls()
container.addEventListener("mousemove", () => {
	wrapper.classList.remove("hide-controls");
	clearTimeout(timer);
	hideControls()
})
 // play and pause
play_pause.addEventListener("click", (e) => {
	mainVideo.paused ? mainVideo.play() : mainVideo.pause();

	options_list.classList.remove("show-controls")		
	speed_options.classList.remove("show-controls-speed")	
})
mainVideo.addEventListener("play", (e) => {
	play_icon.classList.replace("fa-play", "fa-pause")
})
mainVideo.addEventListener("pause", (e) => {
	play_icon.classList.replace("fa-pause", "fa-play")
})
document.addEventListener("keydown", (e) => {
	if (e.key === " ") {
		mainVideo.paused ? mainVideo.play() : mainVideo.pause();
	}

	options_list.classList.remove("show-controls")		
	speed_options.classList.remove("show-controls-speed")	
})

// skip forward and backward
const skipForward = document.querySelector(".skip-forward")
const skipBackward = document.querySelector(".skip-backward");
skipForward.addEventListener("click", (e) => {
	mainVideo.currentTime += 10;

	options_list.classList.remove("show-controls")		
	speed_options.classList.remove("show-controls-speed")	
})
skipBackward.addEventListener("click", (e) => {
	mainVideo.currentTime -= 10;
	options_list.classList.remove("show-controls")		
	speed_options.classList.remove("show-controls-speed")	
})
document.addEventListener("keydown", (e) => {
	let key = e.code;
	let control = e.ctrlKey
	if (control && key === "ArrowRight") {
		mainVideo.currentTime += 10;		
	}
	if (control && key === "ArrowLeft") {
		mainVideo.currentTime -= 10;
	}
})

// fullscreen
const fullscreen_btn = document.querySelector(".fullscreen-btn");
const fullscreen_btn_i = document.querySelector(".fullscreen-btn i")
const video_container = document.querySelector("#video-player")
fullscreen_btn.addEventListener("click", (e) => {
	if (document.fullscreenElement) {
		fullscreen_btn_i.classList.replace("fa-compress", "fa-expand")
		return document.exitFullscreen()
	}
	fullscreen_btn_i.classList.replace("fa-expand", "fa-compress");
	video_container.requestFullscreen();
	
})

// volume
const volume_input = document.querySelector(".volume input");
const volume_btn = document.querySelector(".volume i");

volume_input.addEventListener("input", (e) => {
	mainVideo.volume = e.target.value;

	options_list.classList.remove("show-controls")		
	speed_options.classList.remove("show-controls-speed")	
	if (e.target.value === "0") {
		volume_btn.classList.replace("fa-volume-high", "fa-volume-xmark")
	}
	else {
		volume_btn.classList.replace("fa-volume-xmark", "fa-volume-high")
	}
})

// speed
const speed_options_list = document.querySelectorAll(".speed-options li");
speed_options_list.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		mainVideo.playbackRate = ele.dataset.speed;
		speed_options.querySelector(".active").classList.remove("active");
		ele.classList.add("active")

		speed_options.classList.remove("show-controls-speed")		
		options_list.classList.remove("show-controls")		
	})
})
// progress bar and time
const progressBar = document.querySelector(".progress-bar")
const startTime = document.querySelector(".current-time");
const endTime = document.querySelector(".video-duration")
const progressArea = document.querySelector(".progress-area")
mainVideo.addEventListener("timeupdate", (e) => {
	const {currentTime, duration} = e.target;
	let percent = (currentTime / duration) * 100;
	// console.log(percent)
	progressBar.style.width = `${percent}%`;
	startTime.innerText = formatTime(currentTime)	
})
mainVideo.addEventListener("loadeddata", function(e) {
	endTime.innerText = formatTime(e.target.duration);
})
progressArea.addEventListener("click", (e) => {
	const timeline = progressArea.clientWidth;
	mainVideo.currentTime = (e.offsetX / timeline) * mainVideo.duration
})


options.addEventListener("click", () => {
	options_list.classList.toggle("show-controls")
})
speed.addEventListener("click", () => {
	speed_options.classList.toggle("show-controls-speed")
})
mainVideo.addEventListener("click", (e) => {
	options_list.classList.remove("show-controls")		
	speed_options.classList.remove("show-controls-speed")	
})


