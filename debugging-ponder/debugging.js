const PI = 3.14;
let area = 0;

function circleArea(radius) {
  const area = radius * radius * PI;
  return area
}

area = circleArea(3);
console.log("Area#1:", area);

area = circleArea(4);
console.log("Area#2:", area);