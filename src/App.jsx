import React, { useState, Fragment } from 'react'
import Titre from './components/Titre'
import Navbar from './components/Navbar'
import Exo1 from './components/Exo1'
import Exo2 from './components/Exo2'
import Exo3 from './components/Exo3'
import Exo4 from './components/Exo4'
import Exo5 from './components/Exo5'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'



const App = () => {

    let genId = () => "_" + Math.random().toString(36).substr(2, 9)
    const [exo, setExo] = useState ([
        { div: <Exo1 />, etat: "block", nom: "exercice1", id: genId(), lien: "px-4" },
        { div: <Exo2 />, etat: "hide", nom: "exercice2", id: genId(), lien: "px-4" },
        { div: <Exo3 />, etat: "hide", nom: "exercice3", id: genId(), lien: "px-4" },
        { div: <Exo4 />, etat: "hide", nom: "exercice4", id: genId(), lien: "px-4" },
        { div: <Exo5 />, etat: "hide", nom: "exercice5", id: genId(), lien: "px-4" },
        { div: <TodoList />, etat: "hide", nom: "exercice7", id: genId(), lien: "px-4" },
    ])
    return (
        <Fragment>

            <Navbar exo={exo} setExo={setExo} />
            {exo.map(e => e.etat === "block" && <div className="" key={e.id}> {e.div}</div>)}
        </Fragment>
        
        
        )
}




export default App