import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Read() {

   





    // to store the data
    const [data, setData] = useState([]);







    // showwing data through get
    function getData() {
        axios.get("https://663c835a17145c4d8c368762.mockapi.io/crud")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }



    // delete
    function handleDelete(id) {
        axios.delete(`https://663c835a17145c4d8c368762.mockapi.io/crud/${id}`)
            .then(() => {
               getData()
            })
    }



    // storing the data in local storage to call the data while updating
    const setLocalStorage = (id, name,email) =>{
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)


    }



    // to sttop callimg the api multiple times

    useEffect(() => {

        getData()
    }, [])

    // getData();





    return (
        <>
            <h1>READ </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col"></th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                {/* to get thedata from each data */}
                {
                    data.map((eachData) => {
                        return (

                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>

                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td><Link to="/update">
                                        <button className='btn-success'
                                        onClick={() => setLocalStorage(
                                            eachData.id,
                                            eachData.name,
                                            eachData.email
                                        )}
                                         
                                        >EDIt</button>

                                        </Link></td>
                                        <td><button className='btn-danger'
                                        onClick={() => handleDelete(eachData.id)} 
                                        >DELETE</button></td>

                                    </tr>

                                </tbody>
                            </>
                        )
                    })

                }
            </table>
        </>
    )
}

export default Read