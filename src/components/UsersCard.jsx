import React, { useState } from 'react';
import "./styles/UsersCard.css";
import Confirmation from './Confirmation';

const UsersCard = ({ user, deleteUserById, setUpdateInfo, setIsCloseForm }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false); // Permite manejar el estado de la ventana modal de confirmación para eliminar al usuario
  const [isUserDeleted, setIsUserDeleted] = useState(false); // Permite manejar el estado del mensaje de eliminación
  const [isUpdateConfirmationOpen, setIsUpdateConfirmationOpen] = useState(false);

  const handleDelete = () => { // Abre la ventana modal de confirmación
    setIsConfirmationOpen(true);
  };

  const handleConfirmDelete = () => { // Elimina el usuario de la base de datos una vez que se da aceptar
    deleteUserById('/users', user.id);

    // Muestra el mensaje de eliminación
    setIsUserDeleted(true);

    // Cierra la ventana de confirmación
    setIsConfirmationOpen(false);

    // Limpia el mensaje después de un tiempo (por ejemplo, 3 segundos)
    setTimeout(() => {
      setIsUserDeleted(false);
    }, 3000); // El mensaje desaparecerá después de 3 segundos
  };

  const handleCancelDelete = () => { // Cancela la eliminación del usuario y cierra la ventana modal
    setIsConfirmationOpen(false);
  };

  const handleUpdate = () => {
    setIsUpdateConfirmationOpen(true);
  };

  const handleCancelUpdate = () => {
    setIsUpdateConfirmationOpen(false);
  };

  const handleConfirmationUpdate = () => { // Permite actualizar el usuario
    setUpdateInfo(user);
    setIsCloseForm(false);
    setIsUpdateConfirmationOpen(false);
  };

  return (
    <article className='user_container'>
      <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='list_info_user'>
        <li className='list_email'>
          <span className='info_user'>Email</span>
          <span>{user.email}</span>
        </li>
        <li className='list_birthday'>
          <span className='info_user'>Birthday</span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <section className='btn_delete_update'>
        <button className='bx btn_trash' onClick={handleDelete}>
          <i className='bx bxs-trash'></i>
        </button>
        <button className='bx btn_edit' onClick={handleUpdate}>
          <i className='bx bxs-edit'></i>
        </button>
        {isUpdateConfirmationOpen && (
          <Confirmation
            message="Are you sure you want to update the user?"
            onConfirm={handleConfirmationUpdate}
            onCancel={handleCancelUpdate}
          />
        )}
              {isUserDeleted && (
        <div className="user-deleted-message">Usuario Actualizado correctamente</div>
      )}
      </section>
      {isConfirmationOpen && (
        <Confirmation
          message="Are you sure you want to delete the user?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      {isUserDeleted && (
        <div className="user-deleted-message">Usuario eliminado correctamente</div>
      )}
    </article>
  );
};

export default UsersCard;