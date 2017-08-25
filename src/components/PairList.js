import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export class DevsList extends Component {
	render() {
		return (
			<ul>
				{this.props.pairs.map((pair, index) => <li key={index}>{pair[0].name} - {pair[1].name}</li>)}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		pairs: state.reducer.pairs	
	}
}

export default connect(
	mapStateToProps,
	null
)(DevsList);