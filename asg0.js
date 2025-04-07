function main() {
  let canvas = document.getElementById("example");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let v1 = new Vector3([2.25, 2.25, 0]);
  drawVector(v1, "red");
}

function drawVector(v, color) {
  let canvas = document.getElementById("example");
  let ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
}

function handleDrawEvent() {
  let v1 = new Vector3([
    parseFloat(document.getElementById("xVal").value),
    parseFloat(document.getElementById("yVal").value),
    0
  ]);
  let v2 = new Vector3([
    parseFloat(document.getElementById("xVal2").value),
    parseFloat(document.getElementById("yVal2").value),
    0
  ]);

  let canvas = document.getElementById("example");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawVector(v1, "red");
  drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
  let v1 = new Vector3([
    parseFloat(document.getElementById("xVal").value),
    parseFloat(document.getElementById("yVal").value),
    0
  ]);
  let v2 = new Vector3([
    parseFloat(document.getElementById("xVal2").value),
    parseFloat(document.getElementById("yVal2").value),
    0
  ]);
  let scalar = parseFloat(document.getElementById("scalar").value);
  let op = document.getElementById("operation").value;

  let canvas = document.getElementById("example");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawVector(v1, "red");
  drawVector(v2, "blue");

  let v3, v4;

  if (op === "add") {
    v3 = new Vector3(v1.elements).add(v2);
    drawVector(v3, "green");
  } else if (op === "sub") {
    v3 = new Vector3(v1.elements).sub(v2);
    drawVector(v3, "green");
  } else if (op === "mul") {
    v3 = new Vector3(v1.elements).mul(scalar);
    v4 = new Vector3(v2.elements).mul(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  } else if (op === "div") {
    v3 = new Vector3(v1.elements).div(scalar);
    v4 = new Vector3(v2.elements).div(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  } else if (op === "angle") {
    angleBetween(v1, v2);
  } else if (op === "area") {
    areaTriangle(v1, v2);
  }
}

function printMagnitude() {
  let v1 = new Vector3([
    parseFloat(document.getElementById("xVal").value),
    parseFloat(document.getElementById("yVal").value),
    0
  ]);
  let v2 = new Vector3([
    parseFloat(document.getElementById("xVal2").value),
    parseFloat(document.getElementById("yVal2").value),
    0
  ]);

  console.log("v1 Magnitude:", v1.magnitude().toFixed(2));
  console.log("v2 Magnitude:", v2.magnitude().toFixed(2));
}

function normalizeAndDraw() {
  let v1 = new Vector3([
    parseFloat(document.getElementById("xVal").value),
    parseFloat(document.getElementById("yVal").value),
    0
  ]);
  let v2 = new Vector3([
    parseFloat(document.getElementById("xVal2").value),
    parseFloat(document.getElementById("yVal2").value),
    0
  ]);

  let canvas = document.getElementById("example");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  v1.normalize();
  v2.normalize();

  drawVector(v1, "green");
  drawVector(v2, "green");
}

function angleBetween(v1, v2) {
  let dot = Vector3.dot(v1, v2);
  let mag1 = v1.magnitude();
  let mag2 = v2.magnitude();
  let angleRad = Math.acos(dot / (mag1 * mag2));
  let angleDeg = angleRad * (180 / Math.PI);
  console.log("Angle between v1 and v2:", angleDeg.toFixed(2), "degrees");
}

function areaTriangle(v1, v2) {
  let cross = Vector3.cross(v1, v2);
  let area = 0.5 * cross.magnitude();
  console.log("Area of triangle formed by v1 and v2:", area.toFixed(2));
}
