import { useState } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import FullOutput from "./components/FullOutput";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState([]);

  const addPerson = (e) => {
    e.preventDefault();

    const checkDuplicateName = persons.some(
      (person) => person.name === newName
    );

    if (checkDuplicateName) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    const checkDuplicateNumber = persons.some(
      (person) => person.number === newNumber
    );
    if (checkDuplicateNumber) {
      alert(`${newNumber} is already added to phonebook`);
      setNewNumber("");
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleNameFilter = (e) => {
    setFilteredName(e.target.value);
  };

  const namesToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filteredName.toString().toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input value={filteredName} onChange={handleNameFilter} />
        <h1>Add a new Person</h1>
      </div>
      <AddPerson
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <div>
        <Filter filteredPersons={namesToShow} />
        <FullOutput persons={persons} />
      </div>
    </div>
  );
};

export default App;