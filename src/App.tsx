import News from './components/news/News';
import Weather from './components/weather/Weather';
import TodoList from './components/todoList/TodoList';

function App() {
  
  return (
    <>
    <div className='flex justify-between mb-10 mx-16'>   
        <TodoList />
        <Weather />
      </div>
        <News />
    </>
  );
}

export default App;
