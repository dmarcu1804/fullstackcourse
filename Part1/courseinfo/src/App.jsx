const Header = (props) => {
  return(
    <>
      <h1>
        {props.course.name}
      </h1>
    </>
  )
}

const Part = ( {parts} ) => {
  return (
    <>
      <p> {parts[0].name} : {parts[0].exercises} </p>
      <p> {parts[1].name} : {parts[1].exercises} </p>
      <p> {parts[2].name} : {parts[2].exercises} </p>
    </>
  );
}

const Content = ( {parts} ) => {
  return(
    <>
      <Part parts = {parts} />
    </>
  )
}


const Total = ( {parts} ) => {
  return (
    <>
      {parts[0].exercises + parts[1].exercises +parts[2].exercises}
    </>
  );
};


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}


export default App;