import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export class PairList extends Component {
	render() {
		return (
			<ul>
				{this.props.pairs.map((pair, index) => <li key={index}>{pair[0].name} - {pair[1].name}</li>)}
			</ul>
		);
	}
}

PairList.propTypes = {
	devs: PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		pairs: state.reducer.pairs	
	}
}

export default connect(
	mapStateToProps,
	null
)(PairList);