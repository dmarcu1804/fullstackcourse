const Header = (props) => {
  return(
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Part = ( {part, exercises} ) => {
  return (
    <>
      <p> {part} : {exercises} </p>
    </>
  );
}

const Content = ( {parts_exercises} ) => {
  return(
    <>
      <Part part = {parts_exercises[0].part} exercises={parts_exercises[0].exercises} />
      <Part part = {parts_exercises[1].part} exercises={parts_exercises[1].exercises} />
      <Part part = {parts_exercises[2].part} exercises={parts_exercises[2].exercises} />
    </>
  )
}

const Total = ( {exercises} ) => {
  const initialValue = 0;
  const sumWithInitial = exercises.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  
  return (
    <>
      {sumWithInitial}
    </>
  );
};


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts_exercises = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 },
  ];

  const exercises = [exercises1, exercises2, exercises3];
  
  return (
    <div>
      <Header course={course} />
      <Content parts_exercises={parts_exercises} />
      <Total exercises = {exercises} />
    </div>
  )
}

export default App