import './App.css'
import { ItemListContainer } from './components/ItemListContainer/itemListContainer'
import { NavBar } from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer title='NUESTROS PRODUCTOS'/>
    </>
  )
}

export default App
