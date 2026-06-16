import { useState } from "react";

import questionsData
from "../data/questions";

import QuestionCard
from "../components/QuestionCard";

function Questions() {

  const [search, setSearch] =
    useState("");

  const [selectedTopic,
    setSelectedTopic] =
    useState("All");

  const topics = [

    "All",

    ...new Set(
      questionsData.map(
        (q) => q.topic
      )
    )

  ];

  const filteredQuestions =
    questionsData.filter((q) => {

      const matchesSearch =
        q.question
         .toLowerCase()
         .includes(
           search.toLowerCase()
         );

      const matchesTopic =

        selectedTopic === "All"

        ||

        q.topic ===
        selectedTopic;

      return (
        matchesSearch &&
        matchesTopic
      );

    });

  return (

    <div>

      <h1>
        Interview Questions
      </h1>

      <br />

      <input

        type="text"

        placeholder=
        "Search Question..."

        value={search}

        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }

      />

      <br />
      <br />

      <select

        value={
          selectedTopic
        }

        onChange={(e) =>
          setSelectedTopic(
            e.target.value
          )
        }

      >

        {
          topics.map(
            (topic) => (

              <option
                key={topic}
                value={topic}
              >

                {topic}

              </option>

            )
          )
        }

      </select>

      <br />
      <br />

      <div
        className="grid"
      >

        {
          filteredQuestions.map(
            (item) => (

              <QuestionCard

                key={item.id}

                id={item.id}

                topic={
                  item.topic
                }

                question={
                  item.question
                }

              />

            )
          )
        }

      </div>

    </div>

  );

}

export default Questions;