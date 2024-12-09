import React from "react";

const Filter = ({ person, deletePerson }) => {
  return (
    <>
      <p key={person.id}>
          {" "}
          {person.name} {person.number} {<button onClick = {deletePerson} > delete </button>}
      </p>
    </>
  );
};

export default Filter;
