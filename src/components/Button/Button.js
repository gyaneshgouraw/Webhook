import React from 'react';
import PropTypes from 'prop-types';

import stl from './Button.css';
import './Button.scss'

/**
 * The only true button.
 */
export default function Button({ color, size, onClick, disabled, children, ...others }) {
	const styles = {
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<div>
			<button id='button' className={stl.button} style={styles} onClick={onClick} disabled={disabled} { ...others }>
			<span className='color1'>{children}0</span>
			</button>
		</div>
		
	);
}
Button.propTypes = {
	/** Button label */
	children: PropTypes.node.isRequired,
	/** The color for the button */
	color: PropTypes.string,
	/** The size of the button */
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	/** Disable button */
	disabled: PropTypes.bool,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
};
Button.defaultProps = {
	color: '#333',
	size: 'normal',
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	},
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
