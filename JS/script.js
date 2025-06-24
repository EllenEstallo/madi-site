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

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
	accordion.addEventListener("click", function () {
		this.classList.toggle("active");
		const panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
});
