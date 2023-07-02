import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Taylor Swift",
      image:
        "https://www.rollingstone.com/wp-content/uploads/2023/04/taylor-swift-city-celebrations.jpg?w=1600&h=900&crop=1",
      places: 7,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
