import React from "react";

const Filter = ({ filteredPersons }) => {
  return (
    <>
      <h1>Filtered Output</h1>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {" "}
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

export default Filter;
