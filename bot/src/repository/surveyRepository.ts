import * as AWS from 'aws-sdk';
import * as uuid from 'node-uuid';
import logger from "../@aiteq/messenger-bot/logger";
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2019-04-29'});

const sampleSurvey = {
  id: 1,
  defaultLanguage: "English",
  questions: [
    {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "What language do you prefer?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Pidgin",
          "payload": JSON.stringify({data: {language: "Pidgin", "answer": "Pidgin"}})
        }, {
          "content_type": "text",
          "title": "English",
          "payload": JSON.stringify({data: {language: "English", "answer": "English"}})
        }]
      },
      "Pidgin": {
        "text": "What language do you prefer?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Pidgin",
          "payload": JSON.stringify({data: {language: "Pidgin", "answer": "Pidgin"}})
        }, {
          "content_type": "text",
          "title": "English",
          "payload": JSON.stringify({data: {language: "English", "answer": "English"}})
        }]
      }
    }
  }, {
    "type": "say",
    "param": {
      "English": "I am so glad you are here!",
      "Pidgin": "I happy sey you dey here"
    }
  }, {
    "type": "say",
    "param": {
      "English": "I have just a few questions for you",
      "Pidgin": "e get small question when I wan ask you"
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Your answers will help us better understand how people think about Malaria in Nigeria.",
        "quick_replies": [{
          "content_type": "text",
          "title": "Let Go!",
          "payload": JSON.stringify({data: {"answer": "Let Go!"}})
        }]
      },
      "Pidgin": {
        "text": "your answer go helep us sabi wetin people tink about malaria for naija",
        "quick_replies": [{
          "content_type": "text",
          "title": "oya , make we start",
          "payload": JSON.stringify({data: {"answer": "Let Go!"}})
        }]
      }

    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Have you heard of malaria?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO", "skip": 1}})
        }]
      },
      "Pidgin": {
        "text": "Shey you sabi wetin be malaria?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO", "skip": 1}})
        }]
      }
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Do you know how you get Malaria?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Mosquitos",
          "payload": JSON.stringify({data: {"answer": "Mosquitos"}})
        }, {
          "content_type": "text",
          "title": "From sick people",
          "payload": JSON.stringify({data: {"answer": "From sick people"}})
        }, {
          "content_type": "text",
          "title": "Dirty hands",
          "payload": JSON.stringify({data: {"answer": "Dirty hands"}})
        }, {
          "content_type": "text",
          "title": "Other",
          "payload": JSON.stringify({data: {"answer": "Other"}})
        }]
      },
      "Pidgin": {
        "text": "You sabi as people dey take catch Malaria?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Mosquitos",
          "payload": JSON.stringify({data: {"answer": "Mosquitos"}})
        }, {
          "content_type": "text",
          "title": "From sick people",
          "payload": JSON.stringify({data: {"answer": "From sick people"}})
        }, {
          "content_type": "text",
          "title": "Dirty hands",
          "payload": JSON.stringify({data: {"answer": "Dirty hands"}})
        }, {
          "content_type": "text",
          "title": "Other",
          "payload": JSON.stringify({data: {"answer": "Other"}})
        }]
      }
    }
    }, {
      "type": "askWithMessage",
      "param": {
        "English": {
          "text": "When was the last time you used a mosquito net at night?",
          "quick_replies": [{
            "content_type": "text",
            "title": "Less than a week",
            "payload": JSON.stringify({data: {"answer": "Less than a week"}})
          }, {
            "content_type": "text",
            "title": "Less than a month",
            "payload": JSON.stringify({data: {"answer": "Less than a month"}})
          }, {
            "content_type": "text",
            "title": "More than a month",
            "payload": JSON.stringify({data: {"answer": "More than a month"}})
          }, {
            "content_type": "text",
            "title": "I never use mosquito nets",
            "payload": JSON.stringify({data: {"answer": "I never use mosquito nets"}})
          }]
        },
        "Pidgin": {
          "text": "When be the last time wey you carry mosquito net sleep",
          "quick_replies": [{
            "content_type": "text",
            "title": "Less than a week",
            "payload": JSON.stringify({data: {"answer": "Less than a week"}})
          }, {
            "content_type": "text",
            "title": "Less than a month",
            "payload": JSON.stringify({data: {"answer": "Less than a month"}})
          }, {
            "content_type": "text",
            "title": "More than a month",
            "payload": JSON.stringify({data: {"answer": "More than a month"}})
          }, {
            "content_type": "text",
            "title": "I never use mosquito nets",
            "payload": JSON.stringify({data: {"answer": "I never use mosquito nets"}})
          }]
        }
      }
    }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "In the past months, have you used mosquito repellent?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      },
      "Pidgin": {
        "text": "You don use mosquito cream for the past few months?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      }
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "In the past months, have you taken any other actions to protect yourself from mosquitoes?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      },
      "Pidgin": {
        "text": "Since the last few months, you don do anything to take pursue mosquito comot for your domot?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      }
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "How likely are you to urge your friends to protect themselves from mosquitoes?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Very Likely",
          "payload": JSON.stringify({data: {"answer": "Very Likely"}})
        }, {
          "content_type": "text",
          "title": "Somewhat Likely",
          "payload": JSON.stringify({data: {"answer": "Somewhat Likely"}})
        }, {
          "content_type": "text",
          "title": "Not likely",
          "payload": JSON.stringify({data: {"answer": "Not likely"}})
        }]
      },
      "Pidgin": {
        "text": "You go fit tell your padi  make them protect themselves from mosquitos?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Very Likely",
          "payload": JSON.stringify({data: {"answer": "Very Likely"}})
        }, {
          "content_type": "text",
          "title": "Somewhat Likely",
          "payload": JSON.stringify({data: {"answer": "Somewhat Likely"}})
        }, {
          "content_type": "text",
          "title": "Not likely",
          "payload": JSON.stringify({data: {"answer": "Not likely"}})
        }]
      }
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Do you mind sharing your location with us?",
        "quick_replies": [{
          "content_type": "location",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      },
      "Pidgin": {
        "text": "You fit tell us where you dey?",
        "quick_replies": [{
          "content_type": "location",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      }
    }
  }, {
      "type": "askWithMessage",
      "param": {
        "English": {
          "text": "What age range are you in?",
          "quick_replies": [{
            "content_type": "text",
            "title": "15-17",
            "payload": JSON.stringify({data: {"answer": "15-17"}})
          }, {
            "content_type": "text",
            "title": "18-24",
            "payload": JSON.stringify({data: {"answer": "18-24"}})
          }, {
            "content_type": "text",
            "title": "25-34",
            "payload": JSON.stringify({data: {"answer": "25-34"}})
          }, {
            "content_type": "text",
            "title": "35+",
            "payload": JSON.stringify({data: {"answer": "35+"}})
          }]
        },
        "Pidgin": {
          "text": "Which age you for dey?",
          "quick_replies": [{
            "content_type": "text",
            "title": "15-17",
            "payload": JSON.stringify({data: {"answer": "15-17"}})
          }, {
            "content_type": "text",
            "title": "18-24",
            "payload": JSON.stringify({data: {"answer": "18-24"}})
          }, {
            "content_type": "text",
            "title": "25-34",
            "payload": JSON.stringify({data: {"answer": "25-34"}})
          }, {
            "content_type": "text",
            "title": "35+",
            "payload": JSON.stringify({data: {"answer": "35+"}})
          }]
        }
      }
    }]
};

const sampleSurveyPromise: Promise<any> = new Promise(resolve => {
  setTimeout(() => resolve(sampleSurvey), 10)
});

export const surveyRepository = {
  getSurvey: () => {
    return sampleSurveyPromise
  },
  initSurveyFromUser: () => {

  },
  saveAnswerFromUser: ({profile, question, answer, surveyId, profileId}) => {

    const params = {
      TableName: 'answers',
      Item: {
        id: uuid.v1(), profile, question, answer, surveyId, profileId
      }
    };


    docClient.put(params, function(err, data) {
      if (err) {
        logger.error("[AWS_DOC_CLIENT] Error: ", err);
      } else {
        logger.info("[AWS_DOC_CLIENT] Success: ", data);
      }
    });
  },

  getAnswersFromUser: ({profileId}) => {
    const params = {
      ExpressionAttributeValues: {
        ':p': profileId
      },
      KeyConditionExpression: 'profileId = :p',
      TableName: 'answers'
    };
    return new Promise((resolve, reject) => {
      docClient.query(params, function(err, data) {
        if (err) {
          logger.error("[AWS_DOC_CLIENT] Error: ", err);
          reject(err)
        } else {
          logger.info("[AWS_DOC_CLIENT] Success: ", data);
          resolve(data)
        }
      });
    })
  },
  saveAnswersFromUser: () => {

  }
};