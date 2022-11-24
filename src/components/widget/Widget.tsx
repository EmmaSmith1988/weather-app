import './Widget.css'
type Props = {
    children: JSX.Element
}

const Widget = ({children}: Props) => {
  return (
    <div className='widget'>{children}</div>
  )
}

export default Widget