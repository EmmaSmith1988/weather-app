type Props = {
  text: string,
  key:number,
  handleClick: (todoToDelete: string) => void
}

const TodoItem = ({text, key, handleClick}: Props) => {
  

  return (
    <>
    <div className='flex justify-between m-4 px-20'>
    <li className="" key={key}>{text}</li>
    <button className="inline-block px-1.5  bg-green-500 text-white rounded-md hover:bg-green-600 hover:shadow-lg" onClick={() => {handleClick(text)}}>X</button>
    </div>
    </>
  )
}

export default TodoItem