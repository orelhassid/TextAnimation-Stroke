const logo = document.querySelector("#logo");
const paths = document.querySelectorAll("#logo path");

let duration = 2;
let delay = 0.3;
let fillDelay = paths.length * delay;

logo.style.animation = `fill ${duration}s ease forwards ${fillDelay}s`;

console.log(paths);
for (let path of paths) {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  path.style.animation = `lineAnimation ${duration}s ease forwards ${delay}s`;
}
