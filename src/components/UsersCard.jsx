import React from 'react'
import "./styles/UsersCard.css"

const UsersCard = ({user, deleteUserById, setUpdateInfo, setIsCloseForm}) => {
    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
      setUpdateInfo(user)
      setIsCloseForm(false)
    }

  return (
    <article className='user_container'>
        <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='list_info_user'>
            <li className='list_email'><span className='info_user'>Email</span>
            <span>{user.email}</span></li>

            <li className='list_birthday'><span className='info_user'>Birthday</span>
            <span>{user.birthday}</span></li>
        </ul>
        <section className='btn_delete_update'>
        <button className='bx btn_trash' onClick={handleDelete}><i className='bx bxs-trash'></i></button>
        <button className='bx btn_edit' onClick={handleUpdate}><i className='bx bxs-edit' ></i></button>
        </section>
    </article>
  )
}

export default UsersCard