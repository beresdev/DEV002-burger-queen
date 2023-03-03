import { Link } from 'react-router-dom'

export function MenuButton (props) {
  return (
    <Link to={props.route}>
      <button className='menu-button'>{props.text}</button>
    </Link>
  )
}
