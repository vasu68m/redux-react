import React from "react";

const User = (props) => {
  // const {data} = props;
  return (
    <div>
      <h2>{props.data.name}</h2>
      <h2>{props.data.age}</h2>
      <h2>{props.data.email}</h2>
    </div>
  );
};

export default User;
