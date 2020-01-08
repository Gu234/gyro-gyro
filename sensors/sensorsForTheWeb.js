
const $info = document.getElementById('info');
$info.innerText = typeof AbsoluteOrientationSensor;


function initSensor() {
    sensor = new AbsoluteOrientationSensor({ frequency: 60 });
    sensor.onreading = () => model.quaternion.fromArray(sensor.quaternion);
    sensor.onerror = event => {
        if (event.error.name == 'NotReadableError') {
            $info.innerText = 'Sensor is not available'
        } else {
            $info.innerText = 'Sensor is available'
        }

    }
    sensor.start();
}

initSensor();
