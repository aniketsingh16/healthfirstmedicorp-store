import ecommerceReducer from './ecommerceSlice';
import shopReducer from './shopSlice';
// import appReducer from './appReducer';

const rootReducers = {
  // Reducers here
    ecommerce: ecommerceReducer,
    shop: shopReducer,
    // app: appReducer
};

export default rootReducers;