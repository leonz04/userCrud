import { useEffect, useState } from 'react'

import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import ConfirmationCard from './components/ConfirmationCard'

function App() {

  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  const [isConfirmation, setIsConfirmation]= useState(true)

  const [userDelete,setUserDelete]=useState('')


  const baseUrl = 'https://usercrudbackend.onrender.com'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()

  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setIsFormClose(false)
  }


  return (
    <div className='app'>
      <div className='app__header'>
        <h1 className='app__title'>Usuario</h1>
        <button className='app__btn' onClick={handleOpenForm}>Create User</button>

      </div>
      <div className={`confirmation__card ${isConfirmation && 'form__close'}`}>
      <ConfirmationCard
        setIsConfirmation={setIsConfirmation}
        userDelete={userDelete}
        

      
      />
      </div>
      <div className={`form__container ${isFormClose && 'form__close'}`}>
        <FormUser
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          setUserUpdate={setUserUpdate}
          setIsFormClose={setIsFormClose} />
      </div>
      <div className='info__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              setIsFormClose={setIsFormClose}
              setIsConfirmation={setIsConfirmation}
              setUserDelete={setUserDelete} />
              
          ))
        }
      </div>
    </div>
  )
}

export default App
