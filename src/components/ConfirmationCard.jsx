import './styles/ConfirmationCard.css'
import './styles/FormUser.css'
const ConfirmationCard = ({setIsConfirmation,userDelete}) => {
    
    const handleExit=()=>{
        setIsConfirmation(true)
        
    }
  return (
    <article className='window__msg' >
        <div className='form__x' onClick={handleExit}>x</div>
        <h2 className='title__confirmation'>Eliminar Usuario</h2>
        <p className='msg__confirmation'>El Usuario <span className='user__delete'>{userDelete}</span> ha sido eliminado</p>
        <button className='btn__confirmation' onClick={handleExit}>Aceptar</button>
    </article>
  )
}

export default ConfirmationCard