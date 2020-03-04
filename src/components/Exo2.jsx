import React,{useState} from 'react'

const Exo2 = () => {

    const[remplace,setremplace]=useState(" Inconnu")
    const prenom =(e) =>{
        setremplace(e.target.previousElementSibling.value)
        e.target.previousElementSibling.value=""
        // titre.target.value == 0 ?
        // titre
        // :
        // titre = titre.target.value=""

    }
    

    return (
        <div>
            <h2>Welcome  {remplace}</h2>
            <p>écrivez dans l'input ci-dessous le nom de la personne que vous voulez acceuillir l'orsque vous cliquez
            sur le boutton "go" le nom que vous avez ajouté dans l'input sera alors mis dans le span du h2 et
            l'input sera alors vidé de tous contenu. Attention, interdiction de touchez a l'html </p>
            <input type="text"  onChange = {prenom}/*value={prenom.state.value}*/ />
            <button className="btn1 btn btn-outline-primary" onClick={prenom} >go</button>

        </div>
    )
}

// titre2.innerHTML = "Welcome " + input1.value

export default Exo2