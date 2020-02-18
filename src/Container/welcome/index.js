import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './../Style';

class Welcome extends Component {
	render() {
		const { name } = this.props.navigation.state.params;
		return (
			<View>
				<Text style={styles.heading}>Welcome {name}</Text>
			</View>
		);
	}
}

export default Welcome;
