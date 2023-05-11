const showcase = document.querySelector('.showcase');
const theCube = document.querySelector('.r-cube');
let theCubeRotationZ = 1;
let theCubeTranslateZ = 50;

// cube sliders
const slideCubeSize = document.querySelector('#cubeSize');
const slideCubeRotate = document.querySelector('#cubeRotate');
const sliderLabelSizeOutput = document.querySelector('#sliderLabelSizeOutput');
const sliderLabelRotateOutput = document.querySelector('#sliderLabelRotateOutput');

// listen for label to rotate cube
slideCubeRotate.addEventListener('input', (event) => {
  let value = event.target.value;
  sliderLabelRotateOutput.textContent = value;
  rotateCube(value);
});

// listen for label to resize cube
slideCubeSize.addEventListener('input', (event) => {
  sliderLabelSizeOutput.textContent = event.target.value * 100;
});

/**
 * @description it rotates the cube to the face matching the value passed in
 * @param {number} face - 1 to 4, with 1 being front face and left face is 4 
 */
function rotateCube(face) {
  // prepare rotateZ value
  const rotateBy = face == 1 ? '0deg' : face == 2 ? '90deg' : face == 3 ? '180deg' : face == 4 ? '270deg' : '360deg';
  // console.log("YOU ARE HERE: ", `${theCubeTranslateZ} rotateZ(${rotateBy})`)
  theCube.style.transform = `translateZ(-${theCubeTranslateZ}px) rotateY(${rotateBy})`;
}
