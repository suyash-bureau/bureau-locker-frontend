/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLanding from './screens/AppLanding';
import { Environment } from './screens/Environment';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<AppLanding />}></Route>
			<Route path='/environment' element={<Environment />}></Route>
		</Routes>
	);
};
