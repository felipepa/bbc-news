import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export class DevsList extends Component {
	render() {
		return (
			<ul>
				{this.props.devs.map((dev) => <li key={dev.id}>{dev.name}</li>)}
			</ul>
		);
	}
}

DevsList.propTypes = {
	devs: PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		devs: state.reducer.devs	
	}
}

export default connect(
	mapStateToProps,
	null
)(DevsList);