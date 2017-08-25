import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import * as Actions from '../actions/actions';

export class GeneratePairs extends Component {
	constructor(props) {
    	super(props);
    	this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.generatePairsAction(e.target.name.value);
	}

	render() {
		return <button onClick={this.handleClick}>Generate Pairs</button>
	}
}

GeneratePairs.propTypes = {
	generatePairsAction: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
	return {
		generatePairsAction: bindActionCreators(Actions.generatePairs, dispatch)
	};
}

export default connect(
	null,
	mapDispatchToProps
)(GeneratePairs);