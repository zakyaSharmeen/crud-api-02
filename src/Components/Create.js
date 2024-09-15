import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
    /* to track the data and store the data-usestate() */
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const history = useNavigate()

    const header = {"Access Control Allow Origin": "*"}

    // to capture the input data we use onchange in input
    // to send the data of input to the mock api we will cretae function on button
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("clicked");
        
          
       axios.post("https://663c835a17145c4d8c368762.mockapi.io/crud",{
        name: name, email: mail,
        header
       })
       .then(() => {
        history("/read")
        
    })


    //    redirect to read component
    //    history("/read")


    }


    return (
        <>
            

            <h2>CREATE</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text"
                        onChange={(e) => setName(e.target.value)}
                     className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email"
                           onChange={(e) => setMail(e.target.value)}

                     className="form-control" />
                </div>

               

                <button type="submit" onClick={handleSubmit}
                 className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Create