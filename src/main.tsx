import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
   <QueryClientProvider client={client}>
     <BrowserRouter>
      <App />
      <Toaster />
     </BrowserRouter>
   </QueryClientProvider>

)
