import React from 'react'

export default function Result() {
    return (
        <>
            <div class="container weather-info mt-4">
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center">Head</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center" width="30%">City Name</td>
                            <td width="70%">Dhaka</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
