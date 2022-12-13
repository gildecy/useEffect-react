import { useState, useEffect } from 'react';
import './App.css'



// USANDO useEffect 

function App() {


    const [count, setCount] = useState(0);
    
 // atualizar title da pagina usando API browser
    useEffect(() => {
        document.title = `você clicou ${count} vezes`;
        console.log('render')
    });

    const changenamber = () => {
        setCount((previewState) => previewState + 1);

    };
    return (
        <div>

            <p>você clicou  {count} vezes </p>

            <button onClick={() => setCount(count + 1)}>+ </button>


        </div>
    )
}


export default App