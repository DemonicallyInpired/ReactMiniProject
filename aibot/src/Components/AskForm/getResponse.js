import data from "../../data/mock.json";
import { v4 } from "uuid";
export default function getResponse(HumanQues) {
  const currData = data.find(({ question }) => {
    return question.toLowerCase() === HumanQues.toLowerCase();
  });
  const timeStamp = new Intl.DateTimeFormat("en-In", {
    hour: "2-digit",
    minute: "2-digit",
  })
    .format(new Date())
    .toUpperCase();
  return [
    { type: "human", question: HumanQues, timeStamp, id: v4() },
    {
      type: "AI",
      response: currData
        ? currData.response
        : "Sorry, Did not understand your query!",
      timeStamp,
      id: v4(),
    },
  ];
}
