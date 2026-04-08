import store from './Store/store.js'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux" //we need to import the Provider component from react-redux to wrap our App component with it, so that we can access the store in our App component and its child components.


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
