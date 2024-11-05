const Header = (props) => {
  return(
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      {Object.entries(props).map(([key, value]) => (
        <p key={key}>{key}: {value}</p>
      ))}
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

  const parts_exercises = {
    part1: exercises1,
    part2: exercises2,
    part3: exercises3,
  };

  const exercises = [exercises1, exercises2, exercises3];
  
  return (
    <div>
      <Header course={course} />
      <Content {...parts_exercises} />
      <Total exercises = {exercises} />
    </div>
  )
}

export default App