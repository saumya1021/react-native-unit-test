import React from 'react';
import AppNavigator from './Container';
import { Root } from 'native-base';

const App: () => React$Node = () => {
	return (
		<Root>
			<AppNavigator />
		</Root>
	);
};

export default App;
