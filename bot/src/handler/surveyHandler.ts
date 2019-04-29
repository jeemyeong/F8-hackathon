import { Chat } from '../@aiteq/messenger-bot';
import { surveyRepository } from "../repository/surveyRepository";
import logger from "../@aiteq/messenger-bot/logger";
import { surveyPublisher } from "../event-publisher/surveyPublisher";

export const surveyHandler = async (chat: Chat) => {
  const profileId = chat.getPartnerId();
  const {
    first_name,
    last_name,
    profile_pic,
    locale,
    gender,
    timezone
  } = await chat.getUserProfile();

  const {
    id: surveyId,
    questions,
    defaultLanguage
  } = await surveyRepository.getSurvey();
  let language = defaultLanguage;
  let skip = 0;

  for (const [questionIdx, question] of questions.entries()) {
    if (skip > 0) {
      skip -= 1;
      continue;
    }
    logger.debug(question);
    logger.debug(question.param);
    const answer = await chat[question.type](question.param[language]);

    logger.debug({answer})
    if (!!answer && !!answer.data) {
      surveyPublisher.publishAnswer({
        first_name,
        last_name,
        profile_pic,
        gender,
        timezone,
        question: question.param[language].text || question.param[language],
        answer: answer.data.answer,
        surveyId,
        questionIdx,
        profileId,
        language,
      });
    } else if (!!answer && !!answer.coordinates) {
      surveyPublisher.publishAnswer({
        first_name,
        last_name,
        profile_pic,
        gender,
        timezone,
        question: question.param[language].text || question.param[language],
        answer: answer.coordinates,
        surveyId,
        questionIdx,
        profileId,
        language,
      });
    }

    if (!!answer && !!answer.data && !!answer.data.skip) {
      skip += answer.data.skip
    }

    if (!!answer && !!answer.data && answer.data.language) {
      language = answer.data.language;
    }
    if (!!answer && !!answer.data && answer.data.break) {
      break;
    }
  }
  chat.say("Thank you for participating our survey");
};
