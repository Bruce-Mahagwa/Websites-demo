

// NAV
const nav_toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const nav_items = document.querySelectorAll(".nav-item")
const child_nav = document.querySelectorAll("child-nav")
const toggle_child = document.querySelectorAll(".toggle-child")
const vlc_logo = document.querySelector(".vlc-logo");

// cleanup in a way
nav_toggle.addEventListener("click", function(e) {	
	nav.classList.toggle("show-nav")
	toggle_child.forEach((ele, index) => {
		let sibling = ele.nextElementSibling;
		if (sibling.classList.contains("show-nav")) {
			sibling.classList.remove("show-nav")
		}
	})
})

toggle_child.forEach((ele, index) => {
	let sibling = ele.nextElementSibling;
	ele.addEventListener("click", function(e) {
		sibling.classList.toggle("show-nav")
		
		for (let i = 0; i < toggle_child.length; i++) {
			if (toggle_child[i].nextElementSibling.classList.contains("show-nav") && i !== index) {
				toggle_child[i].nextElementSibling.classList.remove("show-nav")
			}
		}
	})
})


// footer

const footer_div = document.querySelectorAll("#footer div")
footer_div.forEach((ele, index) => {
	ele.addEventListener("click", (e) => {
		ele.classList.add("active");
		for (let i = 0; i < footer_div.length; i++) {
			if (footer_div[i].classList.contains("active") && i !== index) {
				footer_div[i].classList.remove("active")
			}
		}
	})
})