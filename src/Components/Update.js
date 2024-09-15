import React, { useEffect, useState } from 'react'

function Update() {

  // to read the data form local storage
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");



  // to show the data which is stored in local storage
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));



  }, [])






  return (
    <>
      <h2>UPDATE</h2>
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
          className="btn btn-primary">Update</button>
      </form>
    </>
  )
}

export default Update