import React from "react";
import axios from "axios";
const UserDetail = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = res.data;

  const { name, username, email, phone, website, address, company } = user;
  const { street, city, zipcode } = address;
  const { name: companyName } = company; 
  return (
    <>
      <div className="bg-orange-300 min-h-screen w-full pt-6 pl-5 ">
        <h1 className="text-2xl  mb-4 ml-140 pt-10">User Detail</h1>
        <div className="bg-gray-300 pt-6 pl-10 pr-10 pb-6 w-[max-content] rounded ml-100">
          <p className="pb-3"> 
            <strong>Id:</strong> {id}
            </p>
          <p className="pb-3">
            <strong>Name:</strong> {name}
          </p>
          <p className="pb-3">
            <strong>Username:</strong> {username}
          </p>
          <p className="pb-3">
            <strong>Email:</strong> {email}
          </p>
          <p className="pb-3">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="pb-3">
            <strong>Website:</strong> {website}
          </p>
          <p className="pb-3">
            <strong>Address:</strong> {street}, {city} -{zipcode}
          </p>
          <p className="pb-3">
            <strong>Company:</strong> {companyName}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
