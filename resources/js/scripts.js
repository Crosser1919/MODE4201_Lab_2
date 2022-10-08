// Global Vars
const popup = document.querySelector(".popup-container");
// const popupImg = document.querySelector(".popup-row").childNodes[0];
const popupBox = document.querySelector(".popup-row");
const popupTitle = document.querySelector(".popup-title");
const popupBody = document.querySelector(".popup-body");
const skills = document.querySelectorAll(".skill");
const images = document.querySelectorAll(".skill-img");
const skillNames = document.querySelectorAll(".skill-name");
const navbar = document.querySelector("nav");
var currentSkill = "";

const email = document.querySelectorAll("#about-links")[0].childNodes[1];
const github = document.querySelectorAll("#about-links")[0].childNodes[3];
const linkedin = document.querySelectorAll("#about-links")[0].childNodes[5];
const resume = document.querySelectorAll("#about-links")[0].childNodes[7];
const lab1link = document.querySelectorAll(".project-links")[0].childNodes[1];
const lab2linkvid =
	document.querySelectorAll(".project-links")[1].childNodes[1];
const lab2link = document.querySelectorAll(".project-links")[1].childNodes[3];

const about_section = document.querySelectorAll(".sub-nav-item")[0];
// const skills_section = document.querySelectorAll(".sub-nav-item")[1];
const labs_section = document.querySelectorAll(".sub-nav-item")[1];
const projects_section = document.querySelectorAll(".sub-nav-item")[2];

const location_projects = document.querySelector("#projects").offsetTop;
// const location_skills = document.querySelector("#skills").offsetTop;
const location_labs = document.querySelector("#labs").offsetTop;
const location_about = 0;

console.log(projects_section);

projects_section.addEventListener("click", () => {
	scroll({ top: location_projects, behaviour: "smooth" });
});

labs_section.addEventListener("click", () => {
	scroll({ top: location_labs, behaviour: "smooth" });
});

// skills_section.addEventListener("click", () => {
// 	scroll({ top: location_skills, behaviour: "smooth" });
// });

about_section.addEventListener("click", () => {
	scroll({ top: location_about, behaviour: "smooth" });
});

lab1link.addEventListener("click", () => {
	window.open("./resources/files/Lab_1_Cross_Drew.pdf", "_blank");
});

lab2link.addEventListener("click", () => {
	window.open("./resources/files/Cross_Drew_Lab_2.pdf", "_blank");
});

lab2linkvid.addEventListener("click", () => {
	window.open("./resources/files/Lab_2_Cross_Drew.mp4", "_blank");
});

linkedin.addEventListener("click", () => {
	window.open("https://www.linkedin.com/in/drew-cross-dev/", "_blank");
});

github.addEventListener("click", () => {
	window.open("https://github.com/Crosser1919?tab=repositories", "_blank");
});

email.addEventListener("click", () => {
	window.open("mailto:drew.cross19@gmail.com", "_blank");
});
