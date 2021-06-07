import PropTypes from 'prop-types';
import HeaderStyles from './styles/HeaderStyles';

function Header(props) {
    return (
        <HeaderStyles>
            <h1>Add Uptime Check</h1>
            <button onClick={props.handleAddButton}>
                <span />
                <span />
            </button>
        </HeaderStyles>
    )
}

Header.propTypes = {
    handleAddButton:PropTypes.func
}

export default Header;