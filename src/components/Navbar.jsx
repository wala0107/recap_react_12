import React, { Fragment } from 'react'


const Navbar = (props) => {

    const handleChange = (e) => {
        let temp = [...props.exo]
        temp.forEach(e => {
            e.etat = "hide"
            e.lien = "px-4"
        });
        temp[e.target.id].etat = "block"
        temp[e.target.id].lien = "px-4 bg-primary text-white"
        props.setExo(temp)

    }
    return (

        < Fragment>
            <header>
                <h1 className="text-white bg-primary text-center" >RECAP REACT </h1>

                <div className="mx-auto my-5 d-flex justify-content-center">

                    {props.exo.map((e, index) => 

                       <button className="text-primary btn btn-white"><span key={e.id} className={e.lien} id={index} onClick={handleChange}>{e.nom}</span></button> 
                    )}
                </div>
            </header>
        </Fragment>

    )
}


export default Navbar