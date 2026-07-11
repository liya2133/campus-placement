import React from 'react'


const SearchReg = () => {
  return (
    <div>

     <div className="container"><br></br><br></br>
        <h1><center>SEARCH FOR REGISTRATION</center></h1><br></br>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">enter registration id</label>
                        <input type="text" className="form-control" />
                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <button className="btn btn-success">Search registration</button>
                    </div>
                </div>
            </div>
        </div>
     </div>

    </div>
  )
}

export default SearchReg