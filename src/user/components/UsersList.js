import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

import "./UsersList.css";

const UsersList = (props) => {
  console.log(props, "props in users list");
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users available</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((items) => (
        <UserItem
          key={items.id}
          id={items.id}
          name={items.name}
          image={items.image}
          placeCount={items.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
