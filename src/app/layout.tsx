import { AppProvider } from '@/context/appContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
        <ToastContainer/>
      </body>
    </html>
  )
}
