console.log("✅ script.js is running");

// HAMBURGER ANIMATION //
function toggleMobileNav() {
	const hamburger = document.getElementById("hamburger");
	const mobileNav = document.getElementById("mobileNav");

	hamburger.classList.toggle("active");
	mobileNav.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
	const textBlock = document.querySelector(".scroll-in");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	observer.observe(textBlock);
});

document.addEventListener("DOMContentLoaded", function () {
	const textBlock = document.querySelector(".scroll-in");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	observer.observe(textBlock);
});

// const accordions = document.querySelectorAll(".accordion");

// accordions.forEach((accordion) => {
// 	accordion.addEventListener("click", function () {
// 		this.classList.toggle("active");
// 		const panel = this.nextElementSibling;
// 		if (panel.style.display === "block") {
// 			panel.style.display = "none";
// 		} else {
// 			panel.style.display = "block";
// 		}
// 	});
// });

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
	accordion.addEventListener("click", function () {
		// Close all panels
		accordions.forEach((btn) => {
			if (btn !== this) {
				btn.nextElementSibling.style.display = "none";
			}
		});

		const panel = this.nextElementSibling;
		panel.style.display = panel.style.display === "block" ? "none" : "block";
	});
});

// const buttons = document.querySelectorAll(".tab-button");
// const contents = document.querySelectorAll(".tab-content");

// buttons.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		// Remove active from all
// 		buttons.forEach((btn) => btn.classList.remove("active"));
// 		contents.forEach((content) => content.classList.remove("active"));

// 		// Activate current
// 		button.classList.add("active");
// 		const tabId = button.getAttribute("data-tab");
// 		document.getElementById(tabId).classList.add("active");
// 	});
// });
