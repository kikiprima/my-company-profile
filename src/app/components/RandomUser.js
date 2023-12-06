// RandomUser.js
'use server'
import Image from "next/image";
import React from "react";


const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=4&seed=abc');
     
      const data = await response.json();
    
      return data.results; // Assuming you want only one random user
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
const RandomUser = async () => {
   const userData = await fetchData()
  console.log(userData)
   return (
    <>
    <div className="grid justify-center items-center">
    <div className="gap-3 p-3 grid grid-cols-2 justify-between items-center">    
           <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
              <img src={`${userData[0].picture.large}`} className="rounded-full p-2" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
              {`${userData[0].name.title}`} {`${userData[0].name.first}`} {`${userData[0].name.last}`}
              </h2>
              <p>{`${userData[0].location.street.name}`} {`${userData[0].location.street.number}`}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Chairman, CEO</div> 
              </div>
            </div>
          </div>

          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
              <img src={`${userData[1].picture.large}`} className="rounded-full p-2" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
              {`${userData[1].name.title}`} {`${userData[1].name.first}`} {`${userData[1].name.last}`}
              </h2>
              <p>{`${userData[1].location.street.name}`} {`${userData[1].location.street.number}`}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Chairman, CEO</div> 
              </div>
            </div>
          </div>
          </div>


          <div className="grid grid-cols-2 gap-3 p-3  ">
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
              <img src={`${userData[2].picture.large}`} className="rounded-full p-2" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
              {`${userData[2].name.title}`} {`${userData[2].name.first}`} {`${userData[2].name.last}`}
              </h2>
              <p>{`${userData[2].location.street.name}`} {`${userData[2].location.street.number}`}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Chairman, CEO</div> 
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
              <img src={`${userData[3].picture.large}`} className="rounded-full p-2" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
              {`${userData[3].name.title}`} {`${userData[3].name.first}`} {`${userData[3].name.last}`}
              </h2>
              <p>{`${userData[3].location.street.name}`} {`${userData[3].location.street.number}`}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Chairman, CEO</div> 
              </div>
            </div>
            </div>
          </div>
    </div>
        
    </>
   
  
  );
};

export default RandomUser;