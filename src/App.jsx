import './App.css'
import useFetch from "./hooks/useFetch"

function App() {
  const baseUrl = "https://users-crud.academlo.tech/"
  const [
    users, 
    getAllUsers, 
    createNewUser, 
    deleteUserById,
    updateUserById
  ] = useFetch(baseUrl)

  return (
<div>
  <h1>Crud</h1>
</div>
  )
}

export default App
