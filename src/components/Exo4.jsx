import React, { useState } from 'react'
import Oeuf from '../images/oeuf.png'





const Exo4 = (props) => {
    // oeuf = [] et setOeuf c'est sa funct 
    //on va crée tableau qui va copier le contenue de oeuf (dedans on mettra img mais plus tard dans le onclick c'est vide pour l'instant)
    //dans ce tableau on va  copier oeuf([]) et son conte nu puis on va faire tableau.push(oeuf) pour le rajouter au tableau donc ta [[vide]vide]
    //pour finir on met seOeuf pour  reprendre toute la fonction pour que la function sexecute

    const [oeuf, setOeuf] = useState([])
    const ajout = () => {
        let letaboeuf = oeuf.slice()
        
        
        letaboeuf.push(oeuf)
        setOeuf(letaboeuf)
        console.log(letaboeuf);
        
    }
    
    return (



        <section className="">
            <div className="bggrey pl-5 pr-5 mt-3">

                <h2 >
                    Générer des éléments du DOM
            </h2>
                <p>Cliquer sur le boutton ci- dessous pour generer des oeufs.</p>


                <div className=""> 
                {/* {
                    count > 0
                        ?
                        props.img

                        :
                        <p>rien</p>
                } */}
                </div>


                <button onClick={ajout}
                

                type="button" className="ajtOeuf btn btn-success text-light mt-2">Ajoutez un oeuf</button>

                <div className="mt-4 " id="divpourimg">
                {oeuf.map(e=> <img src={Oeuf} className="taille" />)
                }
                </div>
            </div>

        </section>

    )
}





export default Exo4