import './index.css';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <PersonalInfo />
      </header>
      <main>
        <Projects />
      </main>
    </div>
  );
}

export default App;
