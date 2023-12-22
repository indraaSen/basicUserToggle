import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import BasicSpinner from './Module/Spinner/Spinner';


function App() {

  const [login, setLogin] = useState('user');
  const [text, setText] = useState('User is Online');
  
  const changing = () => {
    if(login === 'admin'){
      setLogin('user');
      setText("User is Online");
    }else{
      setLogin('admin');
      setText("Admin is Online")
    }
  }

  return (
   <div className='App'>

    <Header login = {login} changing={changing} text = {text} />
    <br /> 

   

    <div>
      <BasicSpinner />
    </div>

   </div>
  );
}

export default App;
