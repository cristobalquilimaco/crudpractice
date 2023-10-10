import { useEffect } from 'react'
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

  useEffect(() => {
    getAllUsers('/users')
  }, [])
  
  console.log(users);

  return (
<div>
  <h1>Crud</h1>
</div>
  )
}

export default App
