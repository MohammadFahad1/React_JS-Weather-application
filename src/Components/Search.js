import React from 'react'

export default function Search() {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="city">Type City Name</label>
                            <input type="text" name="city" id="city" className="form-control" readonly />
                        </div>
                    </div>
                    <div className="col-md-1 text-center mt-3">
                        <h2>Or</h2>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="let">Get Co-Ordinate
                                <button className="btn" style={{ margin: "0", padding: "0 5px" }}>
                                    <i className="fa-solid fa-shuffle"></i>
                                </button>
                            </label>
                            <div className="let">
                                <p>Let</p>
                                <input type="text" name="let" id="let" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="lon">
                            <p>Lon</p>
                            <input type="text" name="lon" id="lon" className="form-control" />
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
