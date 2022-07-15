import React from 'react'

export default function About() {
    return (
        <>
            <div className="container">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="assets/images/321168.png" className="card-img-top" alt="Md. Fahad Monshi" />
                    <div className="card-body">
                        <h5 className="card-title">Md. Fahad Monshi</h5>
                        <p className="card-text">Full Stack Web Developer.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">HTML</li>
                        <li className="list-group-item">CSS</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">Jquery</li>
                        <li className="list-group-item">bootstrap</li>
                        <li className="list-group-item">PHP</li>
                        <li className="list-group-item">MySQL</li>
                        <li className="list-group-item">Laravel</li>
                        <li className="list-group-item">Tailwind CSS</li>
                        <li className="list-group-item">Node Js</li>
                        <li className="list-group-item">Express JS</li>
                        <li className="list-group-item">MongoDB</li>
                        <li className="list-group-item">React JS</li>
                        <li className="list-group-item">Next JS</li>
                        <li className="list-group-item">Redux</li>
                    </ul>
                    <div className="card-body">
                        <a href="https://facebook.com/mdfahad.index" className="card-link btn btn-primary" target="_blank" rel="noreferrer">Follow
                            me at Facebook</a>
                    </div>
                </div>
            </div>
        </>
    )
}
