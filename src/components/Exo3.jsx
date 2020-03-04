import React, { Fragment, useState } from 'react'

const Exo3 = () => {

    const [count, setCount] = useState(0)
    const handleClick = () => {

        setCount(count + 1)
    }

    return (

        <Fragment>
            <section className='sect4 mt-5'>
                <div className="divsect4  bgpurple ">
                    <h2 className="h2sect4 text-center mb-5">Déplacer les éléments</h2>
                    <div className="row mx-auto">
                        <div className="col-5 text-center">
                            {count % 2 === 0 && <div id="cr1" className="carrered"></div>}
                        </div>
                        <div className="col-1">
                        </div>
                        <div className="col-5 text-center">
                            {count % 2 === 1 && <div id="cr1" className="carrered"></div>}
                        </div>
                    </div>
                    <br />
                    <div className='btncentre text-center'>
                        <button onClick={handleClick} className="btn btn-warning jaune text-white bg-warning">Change place</button>
                        <br /><br />
                        <button className="btn btn-success vert text-white bg-success">Nombre de click {count}</button>
                    </div>
                </div>
            </section>
        </Fragment>

    )
}

export default Exo3