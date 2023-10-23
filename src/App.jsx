import { useEffect, useState } from 'react'
import './App.css'
import useFetch from "./hooks/useFetch"
import FormUsers from './components/FormUsers'
import UsersCard from './components/UsersCard'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [isCloseForm, setIsCloseForm] = useState(true)

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

  const handleOpenForm = () =>{
    setIsCloseForm(false)
  }

  return (
<div>
  <div className='title__crud'>
  <h1 className='users_title'>Users Crud</h1>
  <button className='principal_btn' onClick={handleOpenForm}>
    <h2 className='create_user'>+ Create New User</h2>
  </button>
  </div>
  <div className={`form_container ${isCloseForm && 'form__close'}`}>
  <FormUsers
  createNewUser={createNewUser}
  updateInfo={updateInfo}
  updateUserById={updateUserById}
  setUpdateInfo={setUpdateInfo}
  setIsCloseForm={setIsCloseForm}
  />
  </div>
  <div className='usercard_container'>
    {
      users?.map(user => (
        <UsersCard
        key={user.id}
        user={user}
        deleteUserById={deleteUserById}
        setUpdateInfo={setUpdateInfo}
        setIsCloseForm={setIsCloseForm}
        />
      ))
    }
  </div>
</div>
  )
}

export default App
