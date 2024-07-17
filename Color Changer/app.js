const colorButtons = document.querySelectorAll(".color-button");
const body = document.body;
const resetBtn = document.getElementById("reset");
const colorInfo = document.getElementById("color-info");
const customColorInput = document.getElementById("custom-color");
const applyCustomColorBtn = document.getElementById("apply-custom-color");

function changeBackgroundColor(color) {
  body.style.backgroundColor = color;
  colorInfo.textContent = `Current color: ${color}`;
  colorInfo.style.backgroundColor = getContrastColor(color);
  colorInfo.style.color = color;
  colorInfo.style.padding = '10px';
  colorInfo.style.borderRadius = '5px';
}

function resetColors() {
  body.style.backgroundColor = '';
  colorInfo.textContent = '';
  colorInfo.style.backgroundColor = '';
  colorInfo.style.color = '';
  colorInfo.style.padding = '';
  colorInfo.style.borderRadius = '';
}

function getContrastColor(hexcolor) {
  hexcolor = hexcolor.replace("#", "");
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? 'black': 'white';
}

colorButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const color = this.getAttribute('data-color');
    changeBackgroundColor(color);
  });
});

resetBtn.addEventListener('click', resetColors);

applyCustomColorBtn.addEventListener('click', function() {
  const customColor = customColorInput.value;
  if (/^#[0-9A-F]{6}$/i.test(customColor)) {
    changeBackgroundColor(customColor);
  } else {
    alert("Please enter a valid hex color code (e.g., #FF5733)");
  }
});

document.querySelectorAll('.color-button, #reset, #apply-custom-color').forEach(button => {
  button.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    this.appendChild(ripple);
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    setTimeout(() => {
      ripple.remove();
    }, 300);
  });
});
