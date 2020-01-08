const $alpha = document.getElementById('alpha');
const $beta = document.getElementById('beta');
const $gamma = document.getElementById('gamma');
const $bar1 = document.getElementById('bar1');
const $bar2 = document.getElementById('bar2');
const $bar3 = document.getElementById('bar3');

window.addEventListener("devicemotion", function (event) {
    // console.log('devicemotion', event);
});
window.addEventListener("deviceorientation", function (event) {
    // console.log('deviceorientation', event);
    $alpha.innerText = event.alpha;
    $beta.innerText = event.beta;
    $gamma.innerText = event.gamma;
    $bar1.style('width',`${event.alpha}`);
    $bar2.style('width',`${event.beta}`);
    $bar3.style('width',`${event.gamma}`);
});

console.log('hejo');

//deviceorientation

// isTrusted: true
// absolute: false
// alpha: 270.3026386562764
// beta: -0.3628933924461722
// gamma: -0.010076480294717818
// type: "deviceorientation"
// target: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// currentTarget: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// eventPhase: 0
// bubbles: false
// cancelable: false
// defaultPrevented: false
// composed: false
// timeStamp: 11554.999999993015
// srcElement: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// returnValue: true
// cancelBubble: false
// path: [Window]


//devicemotion

// isTrusted: true
// interval: 16
// acceleration: DeviceMotionEventAcceleration {x: -4.417737007141113, y: 0.8641701936721802, z: 0.17993450164794922}
// accelerationIncludingGravity: DeviceMotionEventAcceleration {x: -4.171999931335449, y: 0.6019999980926514, z: 9.979999542236328}
// rotationRate: DeviceMotionEventRotationRate {alpha: 0.25019991449876344, beta: -56.98302856608203, gamma: -5.629497836098339}
// type: "devicemotion"
// target: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// currentTarget: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// eventPhase: 0
// bubbles: false
// cancelable: false
// defaultPrevented: false
// composed: false
// timeStamp: 125841.89999999944
// srcElement: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// returnValue: true
// cancelBubble: false
// path: [Window]