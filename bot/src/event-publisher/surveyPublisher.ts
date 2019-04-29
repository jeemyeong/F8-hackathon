import * as AWS from "aws-sdk";
import * as uuid from 'node-uuid';
import logger from "../@aiteq/messenger-bot/logger";
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

export const surveyPublisher = {
  saveAnswerFromUser: ({profile, question, answer, surveyId, profileId}) => {

    const params = {
      MessageBody: JSON.stringify({id: uuid.v1(), profile, question, answer, surveyId, profileId}),
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