import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null)
    const [submitedData, setSubmittedData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = { name: name, address: address, phoneNumber: phoneNumber };

        if (name.length > 0 && address.length > 0 && phoneNumber.length > 0 && editIndex) {
            const newData = [...submitedData];
            newData[editIndex] = obj;
            setData(data);
        }
        else if
            (name.length > 0 && address.length > 0 && phoneNumber.length > 0 && !editIndex) {
            setData([...data, obj]);

        }
        setName("");
        setAddress("");
        setPhoneNumber("");
    }
    console.log(data);

    const handleEdit = (index) => {
        setSubmittedData(data[index])
        setEditIndex(index);
        setName(data[index].name)
        setAddress(data[index].name)
        setPhoneNumber(data[index].phoneNumber);
    }

  return (
      <div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{marginTop:"10px"}} placeholder='enter name' required />
              <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}   style={{marginTop:"10px"}} placeholder='enter address' required />
              <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} style={{marginTop:"10px"}}   placeholder='enter number' required />
                <button  type="submit" style={{ marginTop: "10px" }} >Submit</button>
          </form>
          
          <table style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'50px',padding:'10px',}}>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Edit</th>
                  </tr>
              </thead>
              <tbody>
                  {data && data.map((val, index) => {
                      return(
                      <tr key={index}>
                          <td>{val.name}</td>
                          <td>{val.address}</td>
                          <td>{val.phoneNumber}</td>
                          <td>
                              <button onClick={()=>handleEdit(index)}>Edit</button>
                          </td>
                          </tr>
                      )
                  })}
              </tbody>
          </table>
    </div>
  )
}

export default Form;