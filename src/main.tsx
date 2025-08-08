import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'
import { ThemeProvider } from './providers/Theme.provider.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store.ts' 
import{ Toaster } from 'react-hot-toast'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
     <ReduxProvider store={store}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"> 
     <RouterProvider router={router}></RouterProvider> 
    {/* <Toaster></Toaster> */}
    <Toaster></Toaster>
    </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
)
