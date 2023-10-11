import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUsers.css'

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setIsCloseForm}) => {

    const {register, reset, handleSubmit} = useForm()

    useEffect(() => {
      reset(updateInfo)
    }, [updateInfo])
    

    const submit = data =>{
      if(updateInfo) {
        updateUserById('/users', updateInfo.id, data)
        setUpdateInfo()
      }else{
      createNewUser('/users', data)
      }
      reset({
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        birthday:'',

      })
      setIsCloseForm(true)
    }

    const handleExit = () => {
      reset({
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        birthday:'',
      })
      setIsCloseForm(true)
      setUpdateInfo()
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <h1 className='form_title'>Form Users</h1>
      <div className='form__x' onClick={handleExit}>&times;</div>
        <div className='form_section'><label className='form_label' htmlFor="email">Email</label><input className='form_input' {...register('email')} id='email' type="text" /></div>
        <div className='form_section'><label className='form_label' htmlFor="password">Password</label><input className='form_input' {...register('password')} id='password' type="password" /></div>
        <div className='form_section'><label className='form_label' htmlFor="first_name">First Name</label><input className='form_input' {...register('first_name')} id='first_name' type="text" /></div>
        <div className='form_section'><label className='form_label' htmlFor="last_name">Last Name</label><input className='form_input' {...register('last_name')} id='last_name' type="text" /></div>
        <div className='form_section'><label className='form_label' htmlFor="birthday">Birthday</label><input className='form_input' {...register('birthday')} id='birthday' type="date" /></div>
        <button className='form_btn'>{ updateInfo ? 'update' : 'Create' }</button>
    </form>
  )
}

export default FormUsers