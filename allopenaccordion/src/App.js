import './App.css';
import Accordion from './accordion';
import { data } from './data/data.js';


function App() {
  return (
    <div className="body">
      <div className="accordion">
        <h2>All About React...</h2>
        <section className='info'>
          {data.map((data) => (
            <Accordion question={data.question} answer={data.answer} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
