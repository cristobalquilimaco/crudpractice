import React from 'react'

const UsersCard = ({user, deleteUserById, setUpdateInfo, setIsCloseForm}) => {
    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
      setUpdateInfo(user)
      setIsCloseForm(false)
    }

  return (
    <article>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span>Email</span>
            <span>{user.email}</span></li>

            <li><span>Birthday</span>
            <span>{user.birthday}</span></li>
        </ul>
        <button onClick={handleDelete}><i className='bx bxs-trash'></i></button>
        <button onClick={handleUpdate}><i className='bx bxs-edit' ></i></button>
    </article>
  )
}

export default UsersCard