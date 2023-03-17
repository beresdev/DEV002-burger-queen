import { Link } from 'react-router-dom'

export function MenuButton (props) {
  return (
    <Link to={props.route}>
      <button className='menu-button' onClick={typeof props.function === 'function' ? props.function : null}>{props.text}</button>
    </Link>
  )
}
