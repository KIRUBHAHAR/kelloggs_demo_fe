import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardRedux';

const store = configureStore({
  reducer: { dashboard: dashboardReducer },
});

export default store;