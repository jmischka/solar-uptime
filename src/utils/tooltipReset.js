function tooltipReset() {
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    for (let i = 0; i < rangeInputs.length; i++) {
        rangeInputs[i].nextElementSibling.style.left = `calc(${(rangeInputs[i].value - rangeInputs[i].min) / (rangeInputs[i].max - rangeInputs[i].min) * 100}% - 55px)`;
        if (rangeInputs[i].name === 'down' && rangeInputs[i].value <= 2000) {
            rangeInputs[i].nextElementSibling.style.left = `calc(6.89655% - 55px)`;
        }
        if (rangeInputs[i].name === 'down' && rangeInputs[i].value >= 28000) {
            rangeInputs[i].nextElementSibling.style.left = `calc(93.1034% - 55px)`;
        }
        if (rangeInputs[i].name === 'alert' && rangeInputs[i].value <= 2) {
            rangeInputs[i].nextElementSibling.style.left = `calc(5% - 55px)`;
        }
        if (rangeInputs[i].name === 'alert' && rangeInputs[i].value >= 56) {
            rangeInputs[i].nextElementSibling.style.left = `calc(93.3333% - 55px)`;
        }
        if (rangeInputs[i].name === 'resend' && rangeInputs[i].value < 1) {
            rangeInputs[i].nextElementSibling.style.left = `calc(2% - 55px)`;
        } 
        if (rangeInputs[i].name === 'resend' && rangeInputs[i].value > 0 && rangeInputs[i].value <= 3) {
            rangeInputs[i].nextElementSibling.style.left = `calc(6.66667% - 55px)`;
        }
        if (rangeInputs[i].name === 'resend' && rangeInputs[i].value > 54) {
            rangeInputs[i].nextElementSibling.style.left = `calc(90% - 55px)`;
        }
        // SET RANGE PROGRESS
        rangeInputs[i].style.setProperty("--webkitProgressPercent", `${(rangeInputs[i].value - rangeInputs[i].min) / (rangeInputs[i].max - rangeInputs[i].min) * 100}%`);
    }
}

export default tooltipReset;