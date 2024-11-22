import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" , number : "040-123456" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault();

    const checkDuplicateName = persons.some((person) => person.name === newName);
    if(checkDuplicateName){
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      return;
    }

    const checkDuplicateNumber = persons.some((person) => person.number === newNumber);
    if(checkDuplicateNumber){
      alert(`${newNumber} is already added to phonebook`)
      setNewNumber("")
      return;
    }
    
    const personObject = {
      name: newName,
      number: newNumber
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
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input type="number" value={newNumber} onChange = {handleNumberChange} /> 
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        {persons.map((person) => (
          <p key={person.name}> {person.name} {person.number}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
