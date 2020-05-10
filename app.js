const logo = document.querySelector("svg");
const paths = document.querySelectorAll("svg path");

let duration = 2;
let delay = 0.3;
let fillDelay = paths.length * delay;

logo.style.animation = `fillAnimation ${duration}s ease forwards ${fillDelay}s`;

console.log(paths);
for (let path of paths) {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  path.style.animation = `lineAnimation ${duration}s ease forwards ${delay}s`;
}
