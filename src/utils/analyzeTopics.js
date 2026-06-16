export function analyzeTopics(questions, solvedQuestions) {

  const topicStats = {};

  questions.forEach((q) => {

    if (!topicStats[q.topic]) {

      topicStats[q.topic] = {
        total: 0,
        solved: 0
      };

    }

    topicStats[q.topic].total++;

    if (solvedQuestions.includes(q.id)) {

      topicStats[q.topic].solved++;

    }

  });

  return Object.entries(topicStats)
    .map(([topic, data]) => ({

      topic,

      percentage:
        Math.round(
          (data.solved / data.total) * 100
        )

    }))
    .sort(
      (a, b) =>
        a.percentage - b.percentage
    );
}