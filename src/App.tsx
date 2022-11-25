
import News from './components/news/News';
import Widget from './components/widget/Widget';
import Weather from './components/weather/Weather';
import Button from './components/button/Button';

function App() {
  
  return (
    <>
      <h1 className='font-bold underline'>Hello world</h1>
      <Button />
      <Widget>
        <Weather />
      </Widget>
      
      <Widget>
        <News />
      </Widget>
    </>
  );
}

export default App;
