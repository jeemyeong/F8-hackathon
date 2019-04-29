import { Chat } from '../@aiteq/messenger-bot';
import { surveyRepository } from "../repository/surveyRepository";
import logger from "../@aiteq/messenger-bot/logger";
import { surveyPublisher } from "../event-publisher/surveyPublisher";

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
    logger.debug(question);
    logger.debug(question.param);
    const answer = await chat[question.type](question.param[language]);

    if (!!answer && !!answer.data) {
      surveyPublisher.saveAnswerFromUser({profile, question, answer, surveyId, profileId});
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
