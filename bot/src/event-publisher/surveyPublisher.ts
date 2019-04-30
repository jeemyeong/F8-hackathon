import * as AWS from "aws-sdk";
import * as uuid from 'node-uuid';
import logger from "../@aiteq/messenger-bot/logger";
import { format } from "date-fns";
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

export const surveyPublisher = {
  publishAnswer: ({
    question,
    answer,
    surveyId,
    questionIdx,
    profileId,
    language
  }) => {

    const params = {
      MessageBody: JSON.stringify({
        id: uuid.v1(),
        language,
        question,
        answer,
        surveyId,
        questionIdx,
        profileId,
        datetime: format(new Date(), "YYYY-MM-DD HH:mm:ss Z")
      }),
      QueueUrl: process.env.SQS_URL,
      DelaySeconds: 0
    };

    return new Promise((resolve, reject) => {
      sqs.sendMessage(params, function(err, data) {
        if (err) {
          logger.error("[SQS] Error: ", err);
          reject(err)
        } else {
          logger.info("[SQS] Success: ", data);
          resolve(data)
        }
      });
    })
  }
};