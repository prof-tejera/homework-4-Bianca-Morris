import PropTypes from 'prop-types';


export const propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onClick: PropTypes.func.isRequired,
    isClear: PropTypes.bool,
    operator: PropTypes.string,
    second: PropTypes.string,
    disabled: PropTypes.bool
}