
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewReg = () => {
     const [data, changeData ] = useState([])

     const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
     }
     useEffect(
        () => {
            fetchData()
        },[]
     )


  return (
    <div>
        <NavBar />
        <div className="container mt-4">
           
            <br></br>
                <h1><b><i>VIEW REGISTRATIONS</i></b></h1>
                <br />
                <div className="row g-4">
                    {data.map(
                        (value, index) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <p><b>regNo:</b>{value.regNo}</p>
                                            <p><b>fullName:</b> {value.fullName}</p>
                                            <p><b>aadharNumber:</b> {value.aadharNumber}</p>
                                            <p><b>email:</b> {value.email}</p>
                                            <p><b>phoneNumber:</b>{value.phoneNumberp}</p>
                                             <p><b>branch:</b> {value.branch}</p>
                                            <p><b>sslcMark:</b> {value.sslcMark}</p>
                                            <p><b>plusTwoMark:</b>{value.plusTwoMark}</p>
                                                 <p><b>ugDegree:</b> {value.ugDegree}</p>
                                            <p><b>ugMark:</b> {value.ugMark}</p>
                                            <p><b>pgDegree:</b>{value.pgDegree}</p>
                                            <p><b>pgMark:</b>{value.pgMark}</p>

                                            <button className="btn btn-primary w-100">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )

                        }
                    )}

                </div>
            </div>


    </div>
  )
}

export default ViewReg;