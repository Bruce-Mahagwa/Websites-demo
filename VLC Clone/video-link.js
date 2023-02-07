const videos_json = [
{
	video_url: "./videos/file_example_MP4_480_1_5MG.mp4",
	duration: null,
	thumbnail: "./thumbnails/68-280x380.jpg",
	title: "Would-you-rather-Phoebe-Bridgers"
}, 
{
	video_url: "./videos/file_example_MP4_640_3MG.mp4",
	duration: null,
	thumbnail: "./thumbnails/171-280x380.jpg",
	title: "Coming-of-age-Foster-the-people"
}, 
{
	video_url: "./videos/sample_640x360.mp4",
	duration: null,
	thumbnail: "./thumbnails/202-280x380.jpg",
	title: "Garden-song-Phoebe-Bridgers"
}, 
{
	video_url: "./videos/sample-5s.mp4",
	duration: null,
	thumbnail: "./thumbnails/217-280x380.jpg",
	title: "Greater-Mercy-me"
}, 
{
	video_url: "./videos/sample-5s.mp4",
	duration: null,
	thumbnail: "./thumbnails/217-280x380.jpg",
	title: "Greater-Mercy-me"
}, 
{
	video_url: "./videos/sample-10s.mp4",
	duration: null,
	thumbnail: "./thumbnails/236-280x380.jpg",
	title: "Waiting-for-love-Avicii"
}, 
{
	video_url: "./videos/sample-mp4-file-small.mp4",
	duration: null,
	thumbnail: "./thumbnails/260-280x380.jpg",
	title: "Oats-we-sow-Lila-Tristram"
}, 
{
	video_url: "./videos/SampleVideo_1280x720_1mb.mp4",
	duration: null,
	thumbnail: "./thumbnails/328-280x380.jpg",
	title: "In-the-shadows-The-Rasmus"
}, 
{
	video_url: "./videos/SampleVideo_1280x720_2mb.mp4",
	duration: null,
	thumbnail: "./thumbnails/345-280x380.jpg",
	title: "Flawless-Mercy-me"
}
];

function sortMe(arr) {
	arr.sort((a, b) => {
		if (a.title < b.title) {
			return -1;
		}
		else if (a.title > b.title) {
			return 1;
		}
		return 0;
		
	})
}


const parent_container = document.querySelector(".video-items-article-container")
const video_container_article = document.querySelector(".my-video-container")
const video_player = document.querySelector("#video source");
const details_container = document.querySelector(".video-details-container");

window.addEventListener("DOMContentLoaded", (e) => {
	videos_json.forEach((item, index, arr) => {
		let element = `
		<div class = "single-video" data-name = ${item.title}>
			<img src = ${item.thumbnail} class = "video-link-shortcut" alt = "poster" data-name = ${item.title} />
			<button class = "more-options" style = "width: 10px"  data-name = ${item.title}>
				<i class="fa fa-ellipsis-v"></i>
			</button>
			<div class = "video-info-ellipse">
				<div class = "video-info">
					<p>${item.title}</p>
				</div>
				<div class = "ellipse">
					<i class="fas fa-ellipsis-h"></i>
				</div>
			</div>
			<span>3:25</span>
		</div>
		`
		video_container_article.innerHTML += element
	})	
	const details_container = document.querySelector(".video-details-container");
	const more_options = document.querySelectorAll(".more-options");
	const info_video = document.querySelector(".video-details-section");
	more_options.forEach((ele) => {
		ele.addEventListener("click", (e) => {
			let name = ele.dataset.name;
			let image = videos_json.filter((ele) => {
				return ele.title === name;
			})

			let element = `
						<div class = "video-details-only ff-medium">
							<img src = ${image[0].thumbnail} alt = "video-placeholder" />
							<h6 class = "ff-medium">Title: <span>${name}</span></h6>
							<h6 class = "ff-medium">Length: <span>2:56</span></h6>
							<h6 class = "ff-medium">File size: <span>9MB</span></h6>
						</div>
						<div class = "video-details-options m2-top">
							<ul>
								<li><button class = "play-btn"><i class="fa fa-play"></i> Play</button></li>
								<li><button class = "remove-video" data-name = ${name}><i class="fa-solid fa-trash-can"></i> Delete</button></li>
								<li><button class = "close-info"><i class="fa-solid fa-circle-xmark"></i> Close</button></li>
							</ul>
						</div>
			`
			details_container.innerHTML = element;
			info_video.classList.add("move-left")
			// buttons - close btn
			const close_info = document.querySelector(".close-info");
			close_info.addEventListener("click", () => {
				info_video.classList.remove("move-left")
			})


			// delete video
			const delete_video = document.querySelector(".remove-video");
			delete_video.addEventListener("click", (e) => {
				let element = delete_video.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.children;
				element = Array.from(element)

				element.forEach((ele, index, arr) => {
					if (ele.dataset.name === delete_video.dataset.name) {
						ele.remove()
						delete_video.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("move-left");
						videos_json.splice(index, 1);
						console.log(videos_json)
					}
				})

			})

			// play button
			const play_btn = document.querySelector(".play-btn");
			const play_video = document.querySelector("#video source")
			const mainVid = document.querySelector("#video");
			play_btn.addEventListener("click", () => {
				window.scrollBy(0, 1000);
				mainVid.pause();
				play_video.src = image[0].video_url;
				mainVid.load()
				// mainVid.play()
			})

			// buttons
		})
	})		
	// short cut to video
	const shortcut_video = document.querySelectorAll(".video-link-shortcut");
	shortcut_video.forEach((ele) => {
		ele.addEventListener("click", (e) => {
			window.scrollBy(0, 1000)
			const mainVideo = document.querySelector("#video");
			let name = e.target.dataset.name;
			let vid = videos_json.filter((ele) => {
				return ele.title === name;
			})
			mainVideo.pause();
			mainVideo.src = vid[0].video_url
			mainVideo.load()
		})
	})
})


const search_btn = document.querySelector(".search-btn");
const search_div = document.querySelector(".search-div")
const search_video = document.querySelector(".search-video");
search_btn.addEventListener("click", (e) => {
	search_video.classList.toggle("show-search")
	search_video.focus()
	search_btn.addEventListener("click", () => {
		let name = search_video.value
		if (name === "") {
			return;
		}
		let newArr = videos_json.filter((ele) => {
			return ele.title.substr(0, 3).toLowerCase() === name.substr(0, 3).toLowerCase() || ele.title.toLowerCase() === name.toLowerCase();
		})
		video_container_article.innerHTML = ""
		newArr.forEach((item, index, arr) => {
			let element = `
			<div class = "single-video" data-name = ${item.title}>
				<img src = ${item.thumbnail} class = "video-link-shortcut" alt = "poster" data-name = ${item.title} />
				<button class = "more-options" style = "width: 10px"  data-name = ${item.title}>
					<i class="fa fa-ellipsis-v"></i>
				</button>
				<div class = "video-info-ellipse">
					<div class = "video-info">
						<p>${item.title}</p>
					</div>
					<div class = "ellipse">
						<i class="fas fa-ellipsis-h"></i>
					</div>
				</div>
				<span>3:25</span>
			</div>
		`
		
		video_container_article.innerHTML += element
	})	

	const details_container = document.querySelector(".video-details-container");
	const more_options = document.querySelectorAll(".more-options");
	const info_video = document.querySelector(".video-details-section");
	more_options.forEach((ele) => {
		ele.addEventListener("click", (e) => {
			let name = ele.dataset.name;
			let image = newArr.filter((ele) => {
				return ele.title === name;
			})

			let element = `
						<div class = "video-details-only ff-medium">
							<img src = ${image[0].thumbnail} alt = "video-placeholder" />
							<h6 class = "ff-medium">Title: <span>${name}</span></h6>
							<h6 class = "ff-medium">Length: <span>2:56</span></h6>
							<h6 class = "ff-medium">File size: <span>9MB</span></h6>
						</div>
						<div class = "video-details-options m2-top">
							<ul>
								<li><button class = "play-btn"><i class="fa fa-play"></i> Play</button></li>
								<li><button class = "remove-video" data-name = ${name}><i class="fa-solid fa-trash-can"></i> Delete</button></li>
								<li><button class = "close-info"><i class="fa-solid fa-circle-xmark"></i> Close</button></li>
							</ul>
						</div>
			`
			details_container.innerHTML = element;
			info_video.classList.add("move-left")
			// buttons - close btn
			const close_info = document.querySelector(".close-info");
			close_info.addEventListener("click", () => {
				info_video.classList.remove("move-left")
			})


			// delete video
			const delete_video = document.querySelector(".remove-video");
			delete_video.addEventListener("click", (e) => {
				let element = delete_video.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.children;
				element = Array.from(element)

				element.forEach((ele, index, arr) => {
					if (ele.dataset.name === delete_video.dataset.name) {
						ele.remove()
						newArr.length--;
						delete_video.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("move-left")
						videos_json.splice(index, 1);
						
					}
				})
					if (newArr.length === 0) {
						window.location.reload()
					}
			})

			// play button
			const play_btn = document.querySelector(".play-btn");
			const play_video = document.querySelector("#video source")
			const mainVid = document.querySelector("#video");
			play_btn.addEventListener("click", () => {
				window.scrollBy(0, 1000)
				mainVid.pause();
				play_video.src = image[0].video_url;
				mainVid.load()
				// mainVid.play()
			})

			// buttons
		})
	})		
	// short cut to video
	const shortcut_video = document.querySelectorAll(".video-link-shortcut");
	shortcut_video.forEach((ele) => {
		ele.addEventListener("click", (e) => {
			window.scrollBy(0, 1000)
			const mainVideo = document.querySelector("#video");
			let name = e.target.dataset.name;
			let vid = newArr.filter((ele) => {
				return ele.title === name;
			})
			mainVideo.pause();
			mainVideo.src = vid[0].video_url
			mainVideo.load()
		})
	})

		search_video.value = "";
	})
})



// SEARCH


// play all
const play_all = document.querySelector(".resume-play");
// const video_player = document.querySelector("#video source");
const playAllVideo = document.querySelector("#video");

play_all.addEventListener("click", (e) => {
	
	let i = 0;	
	let videoCount = videos_json.length;
	window.scrollBy(0, 1000)
	function playVideo(index) {
		video_player.src = videos_json[i].video_url
		playAllVideo.load()
		playAllVideo.play()
	}
	function myHandler() {
		i++;
	if (i == (videoCount-1)) {
		return;
	}
	else{
		playVideo(i);
		}
	}	
	playAllVideo.addEventListener("ended", myHandler);

})