import Button from './components/button/Button';
import Camila1 from './components/camila1/Camila1';
import Bego2 from './components/bego2/Bego2';
import Camila3 from './components/camila3/Camila3';
import Sabrina4 from './components/sabrina4/Sabrina4';
import Macarena5 from './components/macarena5/Macarena5';
import Bego6 from './components/bego6/Bego6';
const App = () => {
  return (
    <>
      <h1>React</h1>
      <Button />

      <Camila1 number1={150} number2={5} />
      <Bego2 number1={6} number2={10} />
      <Camila3 number1={34} number2={5} />
      <Sabrina4 number1={120} number2={4} />
      <Macarena5 number1={320} number2={10} />
      <Bego6 number1={62} number2={12} />
    </>
  ); //resultado
};

export default App;
//esto es una funcion jsx
