import { useEffect } from "react";
import { useState } from "react";

function RevisionList() {

  const [dueQuestions, setDueQuestions] =
    useState([]);

  useEffect(() => {

    const revisions =
      JSON.parse(
        localStorage.getItem(
          "revisions"
        )
      ) || [];

    const today =
      Date.now();

    const pending =
      revisions.filter(
        (item) =>
          item.revisionDate <= today
      );

    setDueQuestions(
      pending
    );

  }, []);

  return (

    <div className="card">

      <h2>
        Revision Due
      </h2>

      {
        dueQuestions.length === 0
        ? (
          <p>
            No revisions due 🎉
          </p>
        )
        : (
          dueQuestions.map(
            (item) => (

              <div
                key={item.id}
                className="revision-item"
              >

                <h4>
                  {item.question}
                </h4>

                <p>
                  Topic :
                  {" "}
                  {item.topic}
                </p>

              </div>

            )
          )
        )
      }

    </div>

  );

}

export default RevisionList;