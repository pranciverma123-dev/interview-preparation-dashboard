import {
 createContext,
 useState,
 useEffect
}
from "react";
import questions
from "../data/questions";

export const ProgressContext =
createContext();

function ProgressProvider({
 children
}) {

 const [completedQuestions,
 setCompletedQuestions] =
 useState(() => {

   const savedData =
   localStorage.getItem(
    "completedQuestions"
   );

   return savedData
   ? JSON.parse(savedData)
   : [];

 });

 useEffect(() => {

   localStorage.setItem(
    "completedQuestions",

    JSON.stringify(
      completedQuestions
    )
   );

 }, [completedQuestions]);

//  const markCompleted =
//  (id) => {

//    if(
//     !completedQuestions.includes(id)
//    ) {

//     setCompletedQuestions(
//       [
//        ...completedQuestions,
//        id
//       ]
//     );

//    }

//  };
const markCompleted = (id) => {

  if (
    !completedQuestions.includes(id)
  ) {

    setCompletedQuestions([
      ...completedQuestions,
      id
    ]);

    const question =
      questions.find(
        (q) => q.id === id
      );

    if (question) {

      const revisions =
        JSON.parse(
          localStorage.getItem(
            "revisions"
          )
        ) || [];

      const alreadyExists =
        revisions.some(
          (item) =>
            item.id === question.id
        );

      if (!alreadyExists) {

        revisions.push({

          id: question.id,

          topic: question.topic,

          question:
            question.question,

          revisionDate:
            Date.now() +
            24 * 60 * 60 * 1000

        });

        localStorage.setItem(

          "revisions",

          JSON.stringify(
            revisions
          )

        );

      }

    }

  }

};

 return (

  <ProgressContext.Provider

   value={{
    completedQuestions,
    markCompleted
   }}

  >

   {children}

  </ProgressContext.Provider>

 );

}

export default ProgressProvider;