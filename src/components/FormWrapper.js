import PropTypes from 'prop-types';
import FormWrapperStyles from './styles/FormWrapperStyles';
import Header from './Header';
import UptimeForm from './UptimeForm';

function FormWrapper(props) {
    return (
        <FormWrapperStyles>
            <Header handleAddButton={props.handleAddButton} />
            <UptimeForm inputs={props.inputs} handleInputChange={props.handleInputChange} handleRangeChange={props.handleRangeChange} handleCancelButton={props.handleCancelButton} handleSubmit={props.handleSubmit} handleAddButton={props.handleAddButton} />
        </FormWrapperStyles>
    )
}

FormWrapper.propTypes = {
    inputs:PropTypes.object,
    handleInputChange:PropTypes.func,
    handleRangeChange:PropTypes.func,
    handleCancelButton:PropTypes.func,
    handleSubmit:PropTypes.func,
    handleAddButton:PropTypes.func,
}

export default FormWrapper;