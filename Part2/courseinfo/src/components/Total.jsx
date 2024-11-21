const Total = ( {exercises} ) => {

    const totalExercises = exercises.reduce((acc, exercise) => {
        return acc += exercise.exercises
    }, 0)

    return (
        <>
            <p><strong> total of {totalExercises} exercises </strong></p>
        </>
    )
}

export default Total