import logo from './logo.svg';
import './App.css';
import Nav from './layouts/nav';
import Main from './layouts/main';

function App() {
  return (
    <div className=' h-full flex  bg-dark-blue'>
      <Nav />
      
      <Main 
        title={`New Task`}
        subtitle={`Things to do`}
      />
    </div>
  );
}

export default App;
