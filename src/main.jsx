import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CarritoProvider } from './contexts/carritoContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <CarritoProvider>
        <App />
      </CarritoProvider>
   
  </React.StrictMode>
)