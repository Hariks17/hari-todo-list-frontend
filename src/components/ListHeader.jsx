import React from "react";

const ListHeader = ({ listHeader }) => {
  const signOut = () => {
    console.log("SignOut");
  };

  return (
    <div className="list-header">
      <h1>{listHeader}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
