import ReactDOM from 'react-dom';
import Body from './components/Body';
import Top from './components/Top';

function App(){

  return (
    <>
      <Top /> 
      <Body/>
    </>
  );
}

ReactDOM.render(App(), document.querySelector(".root"));






