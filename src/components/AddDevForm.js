import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import * as addDevActions from '../actions/actions';

export class AddDevForm extends Component {
	constructor(props) {
    	super(props);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addDevAction(e.target.name.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input placeholder="Enter a name" name="name"/>
				<button>Add Developer</button>
			</form>
		);
	}
}

AddDevForm.propTypes = {
	addDevAction: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
	return {
		addDevAction: bindActionCreators(addDevActions.addDev, dispatch)
	};
}

export default connect(
	null,
	mapDispatchToProps
)(AddDevForm);