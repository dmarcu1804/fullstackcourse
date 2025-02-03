const AddPerson = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange, deletePerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input type="text" value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
//<AddPerson addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
export default AddPerson;
