import React from 'react'

export default function Search(props) {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="city">Type City Name</label>
                            <input type="text" name="city" value={props.city} onChange={props.change} id="city" className="form-control" readOnly />
                        </div>
                    </div>
                    <div className="col-md-1 text-center mt-3">
                        <h2>Or</h2>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="let">Get Co-Ordinate
                                <button className="btn" style={{ margin: "0", padding: "0 5px" }} onClick={props.getLocation}>
                                    <i className="fa-solid fa-shuffle"></i>
                                </button>
                            </label>
                            <div className="let">
                                <p>Lat</p>
                                <input type="number" name="lat" id="lat" className="form-control" value={props.lat} onChange={props.change} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="lon">
                            <p>Lon</p>
                            <input type="number" name="lon" id="lon" className="form-control" value={props.lon} onChange={props.change} />
                        </div>
                    </div>
                    <div className="col-md-1 mt-3">
                        <button className="btn btn-primary"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
