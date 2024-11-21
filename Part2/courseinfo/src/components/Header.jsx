const Header = ({ courses }) => {
    console.log(courses.name);
    
    return (
      <>
        <h1> {courses.name} </h1>
      </>
    );
  };

  export default Header