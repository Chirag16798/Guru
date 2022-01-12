import React from "react";

const Remainder = () =>{
    return(
        <div className="remainder__tabel">
                               <thead>
                   <tr>
                   <th className="st-bg">#</th>
                   <th className="st-bg">Star/Square</th>
                   <th className="st-bg">Work Status</th>

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

export default Remainder;