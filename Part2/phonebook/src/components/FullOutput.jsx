const FullOutput = ({ persons }) => {
  return (
    <>
      <h1>Full output</h1>
      {persons.map((person) => (
        <p key={person.name}>
          {" "}
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

export default FullOutput;
