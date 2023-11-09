import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContext } from './AppContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const client = new QueryClient;

ReactDOM.createRoot(document.getElementById('root')).render(

  
    <React.StrictMode>
      <QueryClientProvider client={client}>
      <AppContext>
      <App />
      </AppContext>
      </QueryClientProvider>
    </React.StrictMode>
 
)
