import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/FormUsers.css';
import './styles/Confirmation.css';

const FormUsers = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setIsCloseForm,
}) => {
  const { register, reset, handleSubmit } = useForm();
  const [isCreateSuccess, setIsCreateSuccess] = useState(false);

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = async (data) => {
    if (updateInfo) {
      await updateUserById('/users', updateInfo.id, data);
      setIsCreateSuccess(true); // Mostrar el mensaje de confirmación
      setTimeout(() => setIsCreateSuccess(false), 3000); 
      setUpdateInfo();
    } else {
      await createNewUser('/users', data);
    }
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    });
    setIsCloseForm(true);
  };

  const handleExit = () => {
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    });
    setIsCloseForm(true);
    setUpdateInfo();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h1 className="form_title">Form Users</h1>
        <div className="form__x" onClick={handleExit}>
          &times;
        </div>
        <div className="form_section">
          <label className="form_label" htmlFor="email">
            Email
          </label>
          <input className="form_input" {...register('email')} id="email" type="text" required/>
        </div>
        <div className="form_section">
          <label className="form_label" htmlFor="password">
            Password
          </label>
          <input className="form_input" {...register('password')} id="password" type="password" required/>
        </div>
        <div className="form_section">
          <label className="form_label" htmlFor="first_name">
            First Name
          </label>
          <input className="form_input" {...register('first_name')} id="first_name" type="text" required/>
        </div>
        <div className="form_section">
          <label className="form_label" htmlFor="last_name">
            Last Name
          </label>
          <input className="form_input" {...register('last_name')} id="last_name" type="text" required/>
        </div>
        <div className="form_section">
          <label className="form_label" htmlFor="birthday">
            Birthday
          </label>
          <input className="form_input" {...register('birthday')} id="birthday" type="date" required/>
        </div>
        <button className="form_btn">{updateInfo ? 'Update' : 'Create'}</button>
      </form>
      {isCreateSuccess && (
        <div className="create-success-message">Usuario creado correctamente</div>
      )}
    </>
  );
};

export default FormUsers;
