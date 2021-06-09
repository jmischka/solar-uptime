import PropTypes from 'prop-types';
import { AiFillQuestionCircle } from "react-icons/ai";
import FormStyles from './styles/FormStyles';
import NameStyles from './styles/NameStyles';
import SelectStyles from './styles/SelectStyles';
import RangeStyles from './styles/RangeStyles';
import SubmitStyles from './styles/SubmitStyles';


function UptimeForm(props) {
    return (
        <FormStyles onSubmit={props.handleSubmit}>
            <NameStyles>
                <label htmlFor="name">
                    Name    
                    <input type="text" id="name" name="name" required="required" value={props.inputs.name} onChange={props.handleInputChange} />  
                </label>
            </NameStyles>     
            <SelectStyles>
                <label htmlFor="type">
                    Type
                    <select id="type" name="type" value={props.inputs.type} onChange={props.handleInputChange}>
                        <option>HTTP</option>
                        <option>HTTPS</option>
                    </select>
                    <span className="tooltip">
                        <AiFillQuestionCircle />
                        <span className="tooltip-text">Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                    </span>
                </label>
                <label htmlFor="url">
                    URL
                    <input type="url" id="url" name="url" required="required" pattern={props.inputs.type === 'HTTP' ? "http:.+" : "https:.+"} value={props.inputs.url} placeholder={`${props.inputs.type.toLowerCase()}://`} onChange={props.handleInputChange} />
                </label>
                <label className="High" htmlFor="importance">
                    Importance
                    <select id="importance" className="custom-select" name="importance" value={props.inputs.importance} onChange={props.handleInputChange}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <span className="tip">Tip: Users can now configure alerts based on different importance levels</span>
                </label>
            </SelectStyles> 
            <RangeStyles>
                <label htmlFor="down">
                    Consider down after
                    <div>
                        <input type="range" id="down" name="down" min={props.inputs.down < 10000 ? "100" : "1000"} max="30000" step={props.inputs.down < 10000 ? "100" : "1000"} value={props.inputs.down} onChange={props.handleRangeChange} />
                        <span>{props.inputs.down < 9999 ? `${props.inputs.down * .1}ms timeout` : `${props.inputs.down * .001}s timeout`}</span>
                    </div>
                </label>
                <label htmlFor="alert">
                    When down, alert after
                    <div>
                        <input type="range" id="alert" name="alert" min="0" max="60" step="1" value={props.inputs.alert} onChange={props.handleRangeChange} />
                        <span>{props.inputs.alert === '0' ? `Instantly` : `${props.inputs.alert} minutes`}</span>
                    </div>
                </label>
                <label htmlFor="resend">
                    Resend alert
                    <div>
                        <input type="range" id="resend" name="resend" min="0" max="60" step="1" value={props.inputs.resend} onChange={props.handleRangeChange} />
                        <span>{props.inputs.resend === '0' ? `Never` : `${props.inputs.resend} down cycles`}</span>
                    </div>
                </label>
            </RangeStyles>
            <SubmitStyles>
                <button className="cancel" type="button" onClick={props.handleCancelButton}>Cancel</button>
                <button className="save" type="submit">Save</button>
            </SubmitStyles>
        </FormStyles>
    )
}

UptimeForm.propTypes = {
    handleCancelButton: PropTypes.func,
    handleInputChange: PropTypes.func,
    handleRangeChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    inputs: PropTypes.shape({
        alert: PropTypes.string,
        down: PropTypes.string,
        importance: PropTypes.string,
        name: PropTypes.string,
        resend: PropTypes.string,
        type: PropTypes.string,
        url: PropTypes.string
    })
}

export default UptimeForm;