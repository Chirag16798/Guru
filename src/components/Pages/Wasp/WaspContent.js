import React from "react";


const WaspContent = () =>{
    return(
        <div className="wasp__table">
                        
                 <thead>
                   <tr>
                   <th className="st-bg">Company Name</th>
                   <th className="st-bg">Person</th>
                   <th className="st-bg">Mobile</th>
                   <th className="st-bg">Email Id</th>
                   <th className="st-bg">Country</th>
                   <th className="st-bg">Our Company</th>
                   <th className="st-bg">Notes</th>
                   <th className="st-bg">PM</th>
                   <th className="st-bg">3 Months Sale</th>
                   <th className="st-bg">Credit Limit</th>
                   <th className="st-bg">Currency</th>
                   <th className="st-bg">W/T</th>
                   <th className="st-bg">A/P/D</th>
                   <th className="st-bg">Status</th>
                   <th className="st-bg">Edit</th>
                   </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  </tr>
                  <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  </tr>
                  <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  </tr>
                  </tbody>
              
        </div>
    )
}

export default WaspContent;