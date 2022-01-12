import React from "react";
import SearchBar from "../../SearchBar/SearchBar";

const SelfTask = () =>{
    return(
        <>
            <div className="self__task">
                <h2>Search Self Task</h2>
                <div className="search">
                     <form>
                         <div className="title">
                              <p>Search Self Task</p>
                         </div>
                         <div className="input-field">
                              <input type="text" placeholder="Enter Reference Number"  />
                              <button className="search-btn st-bg-btn">Search</button>
                         </div>
                     </form>
                 </div>
            </div>
            <div className="table">
                <p>Total on going query : 0</p>
                 <thead>
                   <tr>
                   <th className="st-bg">#</th>
                   <th className="st-bg">Star/Square</th>
                   <th className="st-bg">Work Status</th>
                   <th className="st-bg">Client/User</th>
                   <th className="st-bg">3 Month Sale</th>
                   <th className="st-bg">Target</th>
                   <th className="st-bg">Translator</th>
                   <th className="st-bg">Translator Mobile Number</th>
                   <th className="st-bg">Refrence.No</th>
                   <th className="st-bg">Delivery Date Time</th>
                   <th className="st-bg">Action</th>
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

        </>
    )
}

export default SelfTask;