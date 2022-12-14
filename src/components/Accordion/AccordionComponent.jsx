import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import "./accordionStyles.css";

const AccordionComponent = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {questions?.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </main>
  );
};

export default AccordionComponent;
