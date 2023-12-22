import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const BasicSpinner = () => {

    const [showLoading, setShowLoading] = useState('');
    const [showLoadingText, setShowLoadingText] = useState('');
    const [text, setText] = useState('Loading...')

    setTimeout(()=>{
        setShowLoading('visually-hidden');
        setText('Loaded.');
    },1000)

   setTimeout(()=>{
        setShowLoadingText('visually-hidden')
    },1500)

  return (
   <div className='spinner'>
        <Spinner animation="border" role="status" className= {showLoading}></Spinner><br />
        <span className={showLoadingText}><b>{text}</b></span>
   </div>
  );
}

export default BasicSpinner;