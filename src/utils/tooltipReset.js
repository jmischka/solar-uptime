function tooltipReset() {
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    for (let i = 0; i < rangeInputs.length; i++) {
        rangeInputs[i].nextElementSibling.style.left = `calc(${(rangeInputs[i].value - rangeInputs[i].min) / (rangeInputs[i].max - rangeInputs[i].min) * 100}% - 55px)`;
        if (rangeInputs[i].name === 'down' && rangeInputs[i].value <= 1170) {
            rangeInputs[i].nextElementSibling.style.left = `calc(5.5% - 55px)`;
        }
        if (rangeInputs[i].name === 'down' && rangeInputs[i].value >= 29000) {
            rangeInputs[i].nextElementSibling.style.left = `calc(96% - 55px)`;
        }
        if (rangeInputs[i].name === 'alert' && rangeInputs[i].value <= 2) {
            rangeInputs[i].nextElementSibling.style.left = `calc(3.33333% - 55px)`;
        }
        if (rangeInputs[i].name === 'alert' && rangeInputs[i].value >= 58) {
            rangeInputs[i].nextElementSibling.style.left = `calc(96% - 55px)`;
        }
        if (rangeInputs[i].name === 'resend' && rangeInputs[i].value < 1) {
            rangeInputs[i].nextElementSibling.style.left = `calc(2% - 55px)`;
        } 
        if (rangeInputs[i].name === 'resend' && rangeInputs[i].value > 0 && rangeInputs[i].value <= 3) {
            rangeInputs[i].nextElementSibling.style.left = `calc(5% - 55px)`;
        }
        if (rangeInputs[i].name === 'resend' && rangeInputs[i].value > 56) {
            rangeInputs[i].nextElementSibling.style.left = `calc(94% - 55px)`;
        }
        // SET RANGE PROGRESS
        rangeInputs[i].style.setProperty("--webkitProgressPercent", `${(rangeInputs[i].value - rangeInputs[i].min) / (rangeInputs[i].max - rangeInputs[i].min) * 100}%`);
    }
}

export default tooltipReset;