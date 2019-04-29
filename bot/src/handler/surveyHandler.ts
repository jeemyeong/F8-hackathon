import { Chat } from '../@aiteq/messenger-bot';
import { surveyRepository } from "../repository/surveyRepository";

export const surveyHandler = async (chat: Chat) => {
  const profileId = chat.getPartnerId();
  const profile = await chat.getUserProfile();

  const {
    id: surveyId,
    questions,
    defaultLanguage
  } = await surveyRepository.getSurvey();
  let language = defaultLanguage;

  for await (const question of questions) {
    console.log(question);
    console.log(question.param);
    console.log(question.param[language]);
    const answer = await chat[question.type](question.param[language]);

    if (!!answer && !!answer.data) {
      surveyRepository.saveAnswerFromUser({profile, question, answer, surveyId, profileId});
    }

    if (!!answer && !!answer.data && answer.data.language) {
      language = answer.data.language;
    }
    if (!!answer && !!answer.data && answer.data.break) {
      chat.say("Thank you for participating our survey");
      break;
    }
  }
};
