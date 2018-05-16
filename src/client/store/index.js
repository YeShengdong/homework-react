import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from 'reducers'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
	const store = createStore(
		persistedReducer, 
		applyMiddleware(thunkMiddleware)
	)	
	const persistor = persistStore(store)
	return { store, persistor }
}