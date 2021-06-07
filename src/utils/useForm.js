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
    }

    const handleRangeChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        // SET RANGE TOOLTIPS ON CHANGE
        let percent = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100;
        e.target.nextElementSibling.style.left = `calc(${percent}% - 60px)`;   
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