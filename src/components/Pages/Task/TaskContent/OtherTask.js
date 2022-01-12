import React from "react";
import Select from 'react-select';
import { useState } from "react";

const OtherTask = () =>{

    const data = [
        { value: 100, label: "option 1" },
        { value: 200, label: "option 2" },
        { value: 300, label: "option 3" },
        { value: 400, label: "option 4" },
        { value: 500, label: "option 5" },
        { value: 600, label: "option 6" }
      ];


    const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }  


    return(
        <>
            <div className="otherTask">
                <h2>Search Other Task</h2>
                <div className="otherTask__content">
                     <div className="content-width">
                     <div className="input-field">
                          <label className="inputLabel">Search</label>
                          <input type="text" placeholder="Enter Reference Number"  />
                     </div>
                     <div className="dropdown">
                          <label className="userLabel">User</label>
                          <Select
                            placeholder="Select Option"
                            value={selectedOption} // set selected value
                            options={data} // set list of the data
                            onChange={handleChange} // assign onChange function
                            className="select"
                          />
                     </div>
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
            </div>
        </>
    )
}

export default OtherTask;



// {/* <div className="other-task__search">
// <form>
//     <div className="input-field">
//          <label></label>
//          <input type="text" placeholder="Enter Reference Number"  />
//     </div>
//     <div className="dropdown">
    
//     <Select
// placeholder="Select Option"
// value={selectedOption} // set selected value
// options={data} // set list of the data
// onChange={handleChange} // assign onChange function
// /> */}

// {/* {selectedOption && <div className="output">
// <b>Selected Option</b><br />
// <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
// <div><b>Value: </b> {selectedOption.value}</div>
// </div>} */}
//     </div>
// </form>
// </div>