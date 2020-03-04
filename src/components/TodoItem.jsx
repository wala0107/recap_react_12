import React, {useState} from 'react';

const TodoItem = (props) => {

    const [input,setInput] = useState(false)
    // Si on clique sur le texte, alors je mets true pour afficher l'input
    const handleClick = () => {
        setInput(true)
    }
    // Si j'appuie sur Enter, alors je mets false pour ne plus l'afficher
    const conditonInput = (e) => {
        if(e.key === "Enter")
            setInput(false)
    }

    return (
        <li className={props.check === true ? "list-group-item bg-success w-75 mx-auto" : "list-group-item w-75 mx-auto"} id={props.id} onDoubleClick={handleClick} >
            <input type="checkbox" onClick={props.onCheck}  defaultChecked={props.check} />
            {!input && props.text}
            {input && <input type="text" className="w-75" onChange={props.onUpdate} onKeyPress={conditonInput} />}
            <button type="button" className="close" onClick={props.onDelete} data-dismiss="toast" >
                <span>&times;</span>
            </button>
        </li>
    )

}

export default TodoItem




































































// import React, { Fragment, useState } from "react"
// const TodoList = (props) => {
//     const BtnChoix=['ALL', 'DONE', 'DO']
//     const [list, setList] = useState([])
//     const [filter, setFilter] = useState(BtnChoix[0])
    
//     const listFiltre = () => {
//         if (filter === BtnChoix[0]) {
//           return list
//         } else if (filter === BtnChoix[1]) {
//           return list.filter(e => e.check)
//         } else if (filter === BtnChoix[2]) {
//           return list.filter(e => !e.check)
//         };
//       };
//     const enter = (e) => {
//          if(e.key == 'Enter'){
//              setList([...list, {
//             id: genId(),
//             text: e.target.value,
//             check: false,
//           }])
//           e.target.value = ''
//         };
//     }
    // générateur d'id random
//   const genId = () => '_' + Math.random().toString(36).substr(2, 9) + '_' + Math.random().toString(36).substr(2, 9)
   // checked
//    const handleTodoDone = (todo) => { setList(list.map(e => e.id === todo.id ? { ...e, check: !e.check } : e)) }
//    Autre manier
    // const handleTodoDone = (i) => {
    //     let tabList = list.slice();
    //     if(tabList[i].check== false){
    //         tabList[i].check = true;
    //     setList(tabList);   
    //     }else{
    //         tabList[i].check = false;
    //         setList(tabList);  
    //     }
    // }
// event sur les boutons
// const [choix, setChoix] = useState([]);
//     const handleChoix = (e) => {
//         let tache = {
//             text: e.target.value,
//             check : false,
//         }
//         let tabList = choix.slice();
//         tabList.push(tache)
//         if(tabList[e].check== false){
//             tabList[e].check = true;
//         setChoix(tabList);   
//         }else {
//             tabList[e].check = false;
//             setChoix(tabList);  
//         }if (tabList[e]if (tabList[e].check== true).check== true)
//     }
// event pour le croix
// const handleChoix = (todo) => { setList(list.filter(e => e.id !== todo.id)) }
// const[none, setNone]= useState("d-none")
// const [block, setBlock] =useState("")
//  const handleRename=()=>{
//      setNone("")
//      setBlock("d-none")
//  }
//     return (
//         <Fragment>
//             <section className="sect7">
//                 <div className="divsect7 bggrey m-5 p-5 ">
//                     <h2 className="h2sect7 my-3">To do List</h2>
//                     <input id="inputsect7" onKeyPress={enter}type="text" placeholder="Que dois-je faire ?"/>
//                     <br />
//                     <div className="text-center my-5">
//                         <button className="btntodo bg-light border border-primary text-primary" onClick={() => setFilter(BtnChoix[0])} className={filter === BtnChoix[0] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>Toutes</button>
//                         <button className="btntodo bg-light border border-primary text-primary" onClick={() => setFilter(BtnChoix[1])} className={filter === BtnChoix[1] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>Completé</button>
//                         <button className="btntodo bg-light border border-primary 
//                         text-primary" onClick={() => setFilter(BtnChoix[2])} className={filter === BtnChoix[2] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>A faire</button>
//                     </div>
//                     <hr />
//                     <div id='list'>
//                         {listFiltre().map((todo, i) =>                    
//                             <div key={todo.id} className={todo.check? "bg-success" : ""}>
//                                 <input onChange={() => handleTodoDone(todo)}type="checkbox" value={todo.check} name="" id="" />
//                                 <span className={block} onDoubleClick={handleRename}>{todo.text}</span> 
//                                 <input className={none}type="text"/>
//                                 <button type="button" class="close" data-dismiss="toast" aria-text="Close">
//                                 <span aria-hidden="true" onClick={() => handleChoix(todo)}
//                                 >&times;</span>
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </Fragment >
//     )
//                         }


//  export default TodoList;
































































































































































































//Video YOUTUBE avec modification et commentaires
// import React, { useState, Component } from 'react'

// class TodoList extends Component {
//     //6. l'item que je vais ajouter dans le formulaire soit = à la valeur de cet input pour ça on va créé des States  on a besoin de la methode constuctor

//     constructor() {
//         //7. super() Obligatoire sinon le contructor ne fonctionnera pas
//         super();
//         //8. this.state sera = à un objet
//         this.state = {
//             //9. le 1ere el sera le terme userInput 
//             //il sera egal a une chaine de carac vide car l'utilisateur n'a rien encors entré CEST LE STATE
//             userInput: "",
//             //10. il se remplira quand l'utilisateur entrera des el dans le formulaire
//             items: []

//         };
//     }
//     onChange(event) {

//         //1. la methode
//         this.setState({
//             //2. le userInput sera egale à
//             userInput: event.target.value
//             //3. et pour verifier que notre State est bien egale à ce que l'on a besoin on va ajouter une fonction (sans aucun parametre) en second argument apres fermeture accolade (log)
//         });
//     }

//     // 14. on va mettre une methode qui va ajouter
//     addTodo(event) {
//         //15. sinon la page va se renomé parceque le nav comprend que c'est un formulaire et il va renvoyer le formulaire on veut pas que ca renouvelle la page
//         event.preventDefault()
//         this.setState({
//             //17. pour retirer le contenu du input apres avoir appuiyer sur ajouter
//             userInput: "",
//             //16. ici on reprend le tableau d'origine
//             //les ... serve a ne pas afficher l'item par default (vide)
//             items: [...this.state.items, this.state.userInput]
//         });
//         // ,() => console.log(this.state)
//     }

//     deleteTodo(item) {
//         // no event 
//         // pass the item to indexOf
//         const array = this.state.items;
//         const index = array.indexOf(item);
//         array.splice(index, 1);
//         this.setState({
//             items: array
//         });
//     }
//     // focus(e){
//     //     e.target.style.backgroundColor="green"

//     // }
//     // focusBlur(e){
//     //     e.target.style.backgroundColor="white"

//     // }
//     //18. pour voir la todo
//     renderTodo() {
//         return this.state.items.map((item) => {
//             return (
//                 //19.KEY snon on aura une erreur quand on map chaque element doit etre unique
//                 <div className="list-group-item" key={item}>

//                     <hr />
//                     <div className="row d-flex">
                       
//                         <div className="justify-content-end mx-4">
//                             <input type="checkbox" name="" id="" />

//                              {item}
//                         </div>

//                         {/* <div
//                             className=" w-25"
//                             type="text"
//                             value={item} /> */}
//                     <a onClick={this.deleteTodo.bind(this)}><strong>x</strong></a>
//                     </div>
//                 </div>

//             )
//         })
//     }
//     //4. on applique la methode render
//     render() {

//         return (
//             <div className="bggrey">
//                 <h1>Todo list</h1>
//                 <hr />
//                 {/* 5. balise Formulaire */}
//                 <form>
//                     <input className="form-control"
//                         //11. seter une value a notre input les accolade psk c'est du js ('' userInput ^)
//                         value={this.state.userInput}
//                         type="text"
//                         placeholder="Que dois-je faire ?"
//                         //.12 on ajoute une methode onChange
//                         //cree une action qui apel la fuction onChange qu'on va appeler en haut avec un (event)(c'est une methode) 
//                         //et bind(this c'est pour dire qu'il s'agit  bien de cet input)

//                         //13. onChange recois un event et cet event aura une valeur
//                         onChange={this.onChange.bind(this)}

//                     // value={this.state.userInput} 
//                     // type="text" 
//                     // placeholder="Renseigner un item"
//                     // onChange={this.onChange.bind(this)}
//                     // className="form-control mb-2"

//                     />
//                     <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>Ajouter</button>
//                 </form>
//                 {/* 20. on cree une div qui va contenir la fuction de renderTodo */}
//                 <div>
//                     {this.renderTodo()}
//                 </div>
//             </div>
//         );
//     }
// }
// export default TodoList
