import { Chat } from '../@aiteq/messenger-bot';
import { surveyRepository } from "../repository/surveyRepository";

export const surveyHandler = async (chat: Chat) => {
  const profile = await chat.getUserProfile()

  const {
    id: surveyId,
    questions,
    defaultLanguage
  } = await surveyRepository.getSurvey();
  let language = defaultLanguage;

  for await (const q of questions) {
    console.log(q);
    console.log(q.param);
    console.log(q.param[language])
    const ans = await chat[q.type](q.param[language]);

    if (!!ans && !!ans.data && ans.data.language) {
      language = ans.data.language;
    }
    if (!!ans && !!ans.data && ans.data.break) {
      chat.say("Thank you for participating our survey");
      break;
    }
  }
};
