import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);

const StatisticLine = (props) => {
  const { text, value } = props;

  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value * 100} %</td>
      </tr>
    );
  }
  return (
    <>
      <tr>
        <td> {text} </td>
        <td> {value} </td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad, total, avg, positive } = props;

  if (total === 0) {
    return (
      <>
        <p>No feedback given yet</p>
      </>
    );
  }

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
    const updatedTotal = total + 1;
    setAvg((updatedGood - bad) / updatedTotal);
    setPositive(updatedGood / updatedTotal);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
    const updatedTotal = total + 1;
    setAvg((good - bad) / updatedTotal);
    setPositive(good / updatedTotal);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
    const updatedTotal = total + 1;
    setAvg((good - updatedBad) / updatedTotal);
    setPositive(good / updatedTotal);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={avg}
        positive={positive}
      />
    </div>
  );
};

export default App;
