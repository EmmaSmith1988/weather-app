type Props = {
  text: string,
  handleClick: () => void
}

const Button = ({text, handleClick}: Props) => {
  return (
    <button onClick={handleClick} className='inline-block px-6 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 hover:shadow-lg'>{text}</button>
  )
}

export default Button