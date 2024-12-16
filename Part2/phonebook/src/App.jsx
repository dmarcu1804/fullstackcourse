import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import FullOutput from "./components/FullOutput";
import axios from "axios";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState([]);

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const deletePersonOf = (id) => {
    const person = persons.find(p => p.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name} ?`)
    if(!confirmDelete) return;

    personService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  const addPerson = (e) => {
    e.preventDefault();

    const checkDuplicateName = persons.some(
      (person) => person.name === newName
    );

    if (checkDuplicateName) {
      const person = persons.find(p => p.name === newName)
      const changedPerson = {...person, number:newNumber}
      const confirmUpdate = window.confirm(`${person.name} is already added to phonebook, replace phone number with new one??`)
      if(!confirmUpdate) return;

      personService
      .updatePerson(person.id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.name === newName ? returnedPerson : person))
      })
      setNewName("");
      setNewNumber("");
      return;
    } 

    const personObject = {
      name: newName,
      number: newNumber,
    };

    personService.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
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
        <div>
          <h1>Filtered Output</h1>
          {namesToShow.map(person => (
            <Filter key = {person.id} person={person} deletePerson={() => deletePersonOf(person.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
