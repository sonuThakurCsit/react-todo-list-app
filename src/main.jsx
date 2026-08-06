import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />

  <Toaster
    position="top-right"
    reverseOrder={false}
    toastOptions={{
      duration: 3000,

      style: {
        background: "#1e293b",
        color: "#fff",
        borderRadius: "10px",
        padding: "16px",
        fontSize: "15px",
      },

      success: {
        iconTheme: {
          primary: "#22c55e",
          secondary: "#fff",
        },
      },

      error: {
        iconTheme: {
          primary: "#ef4444",
          secondary: "#fff",
        },
      },
    }}
  />

</StrictMode>,
)
