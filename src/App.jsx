import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import "bootstrap/dist/css/bootstrap.min.css"
const film= [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {


  return (
    <>
      <Header />
      <Main data={film} />
     
    </>
  )
}

export default App
