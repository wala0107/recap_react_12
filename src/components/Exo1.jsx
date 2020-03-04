import React,{useState} from 'react'

const Exo1 = (props) => {

    const [titre, setTitre] = useState("Le titre");
    const [titreRougebgprimary, setTitreRougebgprimary]=useState("");
    const LancerPlusieurFonction =() =>{
        setTitre("Le titre modifié")
        setTitreRougebgprimary('text-danger bg-primary')
    }

    return (
        <div className="bggris pl-5 pr-5 mt-3">
        <div className="m-5 p-5">
            <h2 className={titreRougebgprimary}>{titre} </h2>
            <p>list de propriété et méthode à retrouver dans la documentation</p>
            <ul>
                <li>innerText</li>
                <li>innerHTML</li>
                <li>querySelector()</li>
                <li>querySelectorAll()</li>
                <li>style</li>
                <li>classList</li>
            </ul>
            <button type="button" className="btn1 btn btn-outline-warning"onClick={LancerPlusieurFonction
                // change % 2==1 ? "bg-primary  text-danger" :""

            }>click</button>
        </div>
        </div>
    )
}



export default Exo1