import React, { Fragment, useState } from 'react'

const Exo5 = () => {
    //NIVEAU 1
    //si tu ne met pas " dans les usestate si tu notre rien il y aura ecri nan"
    const [calcule1, setCalcule1] = useState("")
    const [calcule2, setCalcule2] = useState("")
    const [resultat, setResultat] = useState("?")

    const calcul1recup = (e) => {
        let value = e.target.value
        setCalcule1(value)
    }
    const calcul2recup = (e) => {
        let value = e.target.value
        setCalcule2(value)
    }
    const buttonQuiDonneLeResultat = () => {
        setResultat(Number(calcule1) + Number(calcule2))
        
    }
    
    //NIVEAU 2
    
    const [input, setInput] = useState('');
    const [p, setP] = useState('');
    const [operateur, setOperateur] = useState('');
    const [nb, setNb] = useState('');
    const [nb2, setNb2] = useState('');
    const [save, setSave] = useState('');
    let tab = [{ nb: nb, fct: setNb }, { nb: nb2, fct: setNb2 }]
    const [count, setCount] = useState(0);
    

    //nombre
    const add = (e) => {
        setInput(input + e.target.innerText);
        setSave(save + e.target.innerText);
        tab[count].fct(tab[count].nb + e.target.innerText);
    }

    //operateur
    const operator = (e) => {
        setOperateur(e.target.innerText);
        setSave(save + e.target.innerText);
        setInput(input + e.target.innerText);
        setCount((count + 1) % 2)
    }


    //remise a zero
    const clear = () => {
        setInput('');
        setP(0);
        setCount(0);
        setNb('');
        setNb2('');
        setSave('')
    }
    const egal = () => {
        setP(p + save);
        switch (operateur) {
            case '+':
                setP( (Number(nb) + Number(nb2)));
                break;
            case '-':
                setP((Number(nb) - Number(nb2)));
                break;
            case '*':
                setP((Number(nb) * Number(nb2)));
                break;
            case '/':
                setP((Number(nb) / Number(nb2)));
                break;
            default:
                setP('SyntaxError');
        }
        //c'est pour supprimer le contenu de l'input aores operation
        setInput('');
        setOperateur('');
        setNb('');
        setNb2('');
        setSave('');
        setCount(0);
    }
    
    return (
        
        
        
        //NIVEAU1
        
        <Fragment>
            <section className="bggrey container mt-5 pt-4 pb-4">

                {/* <h2>Création Calculatrice</h2>
                <h3>Niveau 1</h3>
                <input value={cal1} onChange={cal1Recup} id="rep1" type="text" /> + <input value={cal2} onChange={cal2Recup} id="rep2" type="text" /> <button onClick={cal1Result} id="egal0">=</button> <span
                id="response0">{resultat}</span>
            <div> */}


                <h2>Creation Calculatrice</h2>
                <h3>Niveau 1</h3>
                <div className="row">
                    <input value={calcule1} onChange={calcul1recup} type="text" />
                    <span className="size">+</span>
                    
                    
                    <input value={calcule2} onChange={calcul2recup} type="text" />
                    <button onClick={buttonQuiDonneLeResultat} className="btnniv1 btn btn-primary">=</button>
                    <span className="final size">{resultat}</span><br /><br />
                </div>
                <div>

                    {/*NIVEAU 2*/}
                    <h4>Niveau 2</h4>
                    <div className="calculatrice  bg-dark pt-3">

                        <div className="text-white resultat w-75 ">
                            <p className='text-right'>{p}</p>
                            <input type="text" className='text-dark' value={input} onChange={() => setInput(input)} />
                        </div>
                        <div className="boutons text-center">
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>1</button>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>2</button>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>3</button>
                            <div className="btn btn-primary col-2 ml-2 mt-3" onClick={operator}>+</div>
                            <div className="w-100"></div>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>4</button>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>5</button>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>6</button>
                            <div className="btn btn-primary col-2 ml-2 mt-3" onClick={operator}>-</div>
                            <div className="w-100"></div>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>7</button>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>8</button>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>9</button>
                            <div className="btn btn-primary col-2 ml-2 mt-3" onClick={operator}>*</div>
                            <div className="w-100"></div>
                            <div className="btn btn-danger col-2 ml-2 mt-3" onClick={clear}>C</div>
                            <button className="btn btn-light col-2 ml-2 mt-3" onClick={add}>0</button>
                            <div className="btn btn-success col-2 ml-2 mt-3" onClick={egal}>=</div>
                            <div className="btn btn-primary col-2 ml-2 mt-3" onClick={operator}>/</div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >



)
}

export default Exo5



































// <div >
//     <div className="bggrey">
//         <h2>Creation Calculatrice</h2>
//         <h3>Niveau 1</h3>
//         <div className="row">
//             <input value={calcule1} onChange={calcul1recup} type="text" />
//             +<input value={calcule2} onChange={calcul2recup} type="text" />
//             <button onClick={buttonQuiDonneLeResultat} className="btnniv1">=</button>
//             <span className="final">{resultat}</span><br /><br />
//         </div>
//     </div>



    /* 
//     <div className='bggrey mt-5'>
//         <h3>Niveau 2</h3>
//         <h2>Creation Calculatrice</h2>

//         <div className=" bg-dark  mb-5 w  ">
//             <div className="text-light">
//                 <span id="finalCalc" ></span>
//             </div>

//             <div className="row d-flex justify-content-center  ">
                // <button id="btn1" value="1" /*onclick="btm(1)" type = "button" className="btn btn-light text-dark mt-2 mr-1 ">1</button>
                // <button id="btn2" value="2" /*onclick="btm(2)" type="button" className="btn btn-light text-dark mt-2 mr-1">2</button>
//                 <button id="btn3" value="3" /*onclick="btm(3)" type="button" className="btn btn-light text-dark mt-2 mr-1">3</button>
//                 <button id="btn+" value="+" /*onclick="btmPlus()" type="button" className="btn btn-primary text-dark mt-2 mr-1">+</button>*/
//             </div>

//             <div className="row d-flex justify-content-center ">
//                 <button value="4" id="btn4" /*onclick="btm(4)"*/ type="button" className="btn btn-light text-dark mt-2 mr-1">4</button>
//                 <button value="5" id="btn5" /*onclick="btm(5)"*/ type="button" className="btn btn-light text-dark mt-2 mr-1">5</button>
//                 <button value="6" id="btn6" /*</div>onclick="btm(6)"*/ type="button" className="btn btn-light text-dark mt-2 mr-1">6</button>
//                 <button id="btn-" value="-" /*onclick="btmLess()"*/ type="button" className="btn btn-primary text-dark mt-2 mr-1">-</button>
//             </div>

//             <div className="row d-flex justify-content-center">
//                 <button id="btn7" value="7" /*onclick="btm(7)"*/ type="button" className="btn btn-light text-dark mt-2 mr-1">7</button>
//                 <button id="btn8" value="8" /*onclick="btm(8)"*/ type="button" className="btn btn-light text-dark mt-2 mr-1">8</button>
//                 <button id="btn9" value="9" /*onclick="btm(9)"*/ type="button" className="btn btn-light text-dark mt-2 mr-1">9</button>
//                 <button id="btn*" value="*" /*onclick="btmMultiply()"*/ type="button" className="btn btn-primary text-dark mt-2 mr-1">*</button>
//             </div>

//             <div className="row d-flex justify-content-center ">
//                 <button id="btnC" value="c" /*onclick="btmClean()"*/ type="button" className="btn btn-danger text-dark mt-2 mr-1">C</button>
//                 <button id="btn0" value="0" /*onclick="btm(0)"*/ type="button" className="btn btn-light text-dark mt-2 mr-1">0</button>
//                 <button id="btn/" value="/" /*onclick="btmDivision()"*/ type="button" className="btn btn-light text-dark mt-2 mr-1">/</button>
//                 <button id="btn=" value="=" /*onclick="btmEgal()"*/ type="button" className="btn btn-success text-dark mt-2 mr-1">=</button>
//             </div>
//         </div>
//     </div>
// </div> */}