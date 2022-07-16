import React from 'react'

export default function Result() {
    return (
        <>
            <div className="container weather-info mt-4">
                <h2>City Name (Temp) Description</h2>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Head</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center" width="30%">City Name</td>
                            <td width="70%">Dhaka</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
