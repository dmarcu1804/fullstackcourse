import Header from "./Header"
import Part from "./Part"
import Total from "./Total"

const Course = ({ course }) => {
  return (
    <>
      <Header courses={course} />
      <Part parts={course.parts} />
      <Total exercises={course.parts} />
    </>
  );
};

export default Course;
