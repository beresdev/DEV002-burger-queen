import { Link } from 'react-router-dom'

export function MenuButton (props) {
  return (
    <Link to={props.route}>
      <button className='menu-button' onClick={() => {props.setOrderN()}}>{props.text}</button>
    </Link>
  )
}
