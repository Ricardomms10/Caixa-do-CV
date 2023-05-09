import './button.css'

const mensage = () => {
    alert('A label desse botão é Baixar CV')
}

const Button = (props) => {
    return <button className='btn' onClick={mensage} >{props.label} </button>
}

export default Button