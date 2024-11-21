import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [showNames, setShowNames] = useState(true);

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const namesToShow = showNames ? persons : [];

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={() => setShowNames(showNames)}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        {namesToShow.map((person) => (
          <p key={person.name}> {person.name} </p>
        ))}
      </div>
    </div>
  );
};

export default App;
