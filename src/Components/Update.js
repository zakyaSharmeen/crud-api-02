import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Update() {

  // to read the data form local storage
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const history = useNavigate();


  // to show the data which is stored in local storage
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

  }, [])

  const handleUpdate = (e) =>{
    e.preventDefault()
    axios.put(`https://663c835a17145c4d8c368762.mockapi.io/crud/${id}`,{
      name: name, email: email,
      
     })
     .then(() =>{
      history("/read")
     })
     
  }






  return (
    <>
      <div className='d-flex justify-content-between m-2'>
                <h2>Update</h2>
                <Link to="/read">
                <button className='btn btn-primary'>back</button>

                </Link>

            </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email"
            value={email}

            onChange={(e) => setEmail(e.target.value)}

            className="form-control" />
        </div>



        <button type="submit"
          className="btn btn-primary" 
          onClick={handleUpdate}
          >Update</button>
      </form>
    </>
  )
}

export default Update