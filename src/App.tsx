import News from './components/news/News';
import Weather from './components/weather/Weather';
import TodoList from './components/todoList/TodoList';

function App() {
  
  return (
    <>
    <div className='lg:flex lg:flex-row-reverse lg:justify-between lg:mb-10 lg:mx-16'>      
    <Weather />
    <TodoList />   
      </div>
        <News />
    </>
  );
}

export default App;
