import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"

function App() {

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting= "Bienvenidos a Videoland Post" />
      </div>
    </>
  )
}

export default App
