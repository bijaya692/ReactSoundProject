import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddAnimalForm from './components/AddAnimalForm.jsx'
import AnimalCard from './components/AnimalCard.jsx'
import Container from './components/Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AddAnimalForm />
    <AnimalCard />
    <Container />
  </StrictMode>,
)
