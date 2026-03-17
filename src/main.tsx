import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.scss'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

window.onload = () => {
  window.scrollTo(0, 0);
};
