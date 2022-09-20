import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import "./style.css"

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const setData = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setIsLoading(false);
        setUsers(data);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      // setIsLoading(false);
      setData();
    }, 4000);
    
  },[]);

  const clickHandler = () =>{
    console.log("Hello");
  }
  return (
    <>
    {isLoading && <Loading/>}
    {users.length > 0 && (
        <div>
      {users.map((ele) => {

        const {id,username,name,email,phone,company,website,address} = ele;
        return (   
          <>
            <div className="card mb-3 card-outer" onClick={clickHandler} >
              <div className="row no-gutters" key={id}>
                <div className="col-md-4">
                  <img src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Email: {email}</h6>
                    <h6>Phone: {phone}</h6>
                    <h6>Company: {company.name}</h6>
                    <h6>Website: {website}</h6>
                    <h6>Address: {address.street}</h6>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      </div>
      )}
      
    </>
  );
};

export default FetchData;
