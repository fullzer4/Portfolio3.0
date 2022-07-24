import React from 'react'
import ReactDOM from 'react-dom/client'
const Rota = require("./routes/routes") 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Rota />
  </React.StrictMode>
)
