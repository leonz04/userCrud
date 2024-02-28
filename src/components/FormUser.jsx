import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUser.css'


const FormUser = ({ createUser, userUpdate, updateUser, setUserUpdate,setIsFormClose }) => {

    const { handleSubmit, reset, register } = useForm()

    useEffect(() => {
        reset(userUpdate)
    }, [userUpdate])

    const submit = data => {
        if (userUpdate) {
            //Update
            updateUser(userUpdate.id, data)
            setUserUpdate()

        } else {
            createUser(data)
        }

        reset({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            birthday: ''
        })
        setIsFormClose(true)
    }

    const handleExit=()=>{
        setIsFormClose(true);
        reset({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            birthday: ''
        })
        setUserUpdate()
    }




    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <div className='form__x' onClick={handleExit}>x</div>
            <h2 className='form__title'>{userUpdate?'updateUser':'create User'}</h2>
            <label className='form__label'>
                <span className='form__field__name'>Email</span>
                <input className='form__field' required {...register('email')} type="email" />
            </label>
            <label className='form__label'>
                <span className='form__field__name'>Password</span>
                <input className='form__field' required {...register('password')} type="password" />
            </label>
            <label className='form__label'>
                <span className='form__field__name'>First name</span>
                <input className='form__field' required {...register('firstName')} type="text" />
            </label>
            <label className='form__label'>
                <span className='form__field__name'>Last name</span>
                <input className='form__field' required {...register('lastName')} type="text" />
            </label>
            <label className='form__label'>
                <span className='form__field__name'>Birthday</span>
                <input className='form__field' {...register('birthday')} type="date" />
            </label>
            <button className='form__btn'>{userUpdate ? 'update' : 'create'} </button>
        </form>)
}

export default FormUser