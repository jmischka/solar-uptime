import PropTypes from 'prop-types';
import SuccessStyles from './styles/SuccessStyles';

function SuccessCard(props) {
    return (
        <SuccessStyles className="success-card">
            <h2><span>Success!</span></h2>
            <h2>{`${props.inputs.name} your preferences have been saved`}</h2>
            <p>You can change them anytime</p>
        </SuccessStyles>
    )
}

SuccessCard.propTypes = {
    inputs: PropTypes.shape({
        name: PropTypes.string
    })
}

export default SuccessCard;