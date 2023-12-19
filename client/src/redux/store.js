import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './User/userSlice'

import {persistReducer} from 'redux-persist'

const rootReducer = combineReducers({user:userReducer})

const persistConfig = {
    key:'root',
    storage,
    version:1
}

const persistedReducer = persistReducer(persitConfig, rootReducer)

export default configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
