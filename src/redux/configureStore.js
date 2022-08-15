import { configureStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = configureStore(rootReducer)

export default store


// import React from 'react'
// import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './components/App'
// import rootReducer from './reducers'

// const store = createStore(rootReducer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
