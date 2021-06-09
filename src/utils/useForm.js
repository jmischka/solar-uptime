import { useEffect, useState } from "react";
import tooltipReset from './tooltipReset';

function useForm(initialState = {}) {
    const [inputs, setInputs] = useState(initialState);
    
    // SET RANGE TOOLTIPS and RANGE PROGRESS ON INITIAL LOAD
    useEffect(() => {
        tooltipReset();
    }, []);

    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'importance') {
            let classAttr = e.target.parentElement.className;
            e.target.parentElement.classList.remove(classAttr);
            e.target.parentElement.classList.add(e.target.value);
        }
    }

    const handleRangeChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        // SET RANGE TOOLTIPS ON CHANGE
        let percent = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100;   
        e.target.nextElementSibling.style.left = `calc(${percent}% - 55px)`;
        // ACCOUNT FOR TOOLTIP OVERFLOW 
        if (e.target.name === 'down' && e.target.value <= 1170) {
            e.target.nextElementSibling.style.left = `calc(5.5% - 55px)`;
        }
        if (e.target.name === 'down' && e.target.value >= 29000) {
            e.target.nextElementSibling.style.left = `calc(96% - 55px)`;
        }
        if (e.target.name === 'alert' && e.target.value <= 2) {
            e.target.nextElementSibling.style.left = `calc(3.33333% - 55px)`;
        }
        if (e.target.name === 'alert' && e.target.value >= 58) {
            e.target.nextElementSibling.style.left = `calc(96% - 55px)`;
        }
        if (e.target.name === 'resend' && e.target.value < 1) {
            e.target.nextElementSibling.style.left = `calc(2% - 55px)`;
        } 
        if (e.target.name === 'resend' && e.target.value > 0 && e.target.value <= 3) {
            e.target.nextElementSibling.style.left = `calc(5% - 55px)`;
        }
        if (e.target.name === 'resend' && e.target.value > 56) {
            e.target.nextElementSibling.style.left = `calc(94% - 55px)`;
        }
        // SET RANGE PROGRESS ON CHANGE
        e.target.style.setProperty("--webkitProgressPercent", `${percent}%`);
    }

    const handleCancelButton = (e) => {
        e.preventDefault();
        setInputs(initialState);
        // SET RANGE TOOLTIPS and RANGE PROGRESS AFTER RESET
        setTimeout(() => {
            tooltipReset();
        }, 100);
    }

    return [inputs, handleInputChange, handleRangeChange, handleCancelButton];
}

export default useForm;