import PropTypes from 'prop-types';
import UptimeButtonStyles from './styles/UptimeButtonStyles';

function UptimeButton(props) {
    return (
        <UptimeButtonStyles onClick={props.handleAddButton}>Add Uptime Button</UptimeButtonStyles>
    )
}

UptimeButton.propTypes = {
    handleAddButton:PropTypes.func
}

export default UptimeButton;