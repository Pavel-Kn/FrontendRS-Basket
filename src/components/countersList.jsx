import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newIncreaseArray = counters.map((elem) => {
      if (elem.id === id) {
        return { ...(counters[elem.id].value += 1), ...elem };
      }
      return elem;
    });
    setCounters(newIncreaseArray);
  };

  const handleDecrement = (id) => {
    const newDecreaseArray = counters.map((elem) => {
      if (elem.id === id) {
        return {
          ...(counters[elem.id].value > 0
            ? (counters[elem.id].value -= 1)
            : (counters[elem.id].value = 0)),
          ...elem,
        };
      }
      return elem;
    });
    setCounters(newDecreaseArray);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
