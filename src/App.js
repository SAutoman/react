import logo from './logo.svg';
import './App.css';
import Nav from './layouts/nav';
import SubNav from './layouts/subnav';
import Main from './layouts/main';

function App() {
  return (
    <div className=' h-full flex  bg-dark-blue'>
      <Nav />
      <SubNav />
      <Main 
        title={`New Task`}
        subtitle={`Things to do`}
      />
    </div>
  );
}

export default App;
