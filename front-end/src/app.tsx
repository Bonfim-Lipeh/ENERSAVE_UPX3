import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme.provider'
import { router } from './routes'
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="light">
        <Helmet titleTemplate="%s | EnerSave" />
        <Toaster richColors />

        <RouterProvider router={router}></RouterProvider>

      </ThemeProvider>
    </HelmetProvider>
  )
}
