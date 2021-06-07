function tooltipReset() {
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    for (let i = 0; i < rangeInputs.length; i++) {
        rangeInputs[i].nextElementSibling.style.left = (rangeInputs[i].offsetWidth / rangeInputs[i].max) * rangeInputs[i].value - 60 + 'px';
        // SET RANGE PROGRESS
        rangeInputs[i].style.setProperty("--webkitProgressPercent", `${(rangeInputs[i].value - rangeInputs[i].min) / (rangeInputs[i].max - rangeInputs[i].min) * 100}%`);
    }
}

export default tooltipReset;