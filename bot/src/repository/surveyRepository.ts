
const sampleSurvey = {
  id: 1,
  defaultLanguage: "English",
  questions: [{
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "What language do you prefer?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Pidgin",
          "payload": JSON.stringify({data: {break: false, language: "Pidgin"}})
        }, {
          "content_type": "text",
          "title": "English",
          "payload": JSON.stringify({data: {break: false, language: "English"}})
        }]
      },
      "Pidgin": {
        "text": "What language do you prefer?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Pidgin",
          "payload": JSON.stringify({data: {break: false, language: "Pidgin"}})
        }, {
          "content_type": "text",
          "title": "English",
          "payload": JSON.stringify({data: {break: false, language: "English"}})
        }]
      }
    }
  }, {
    "type": "say",
    "param": {
      "English": "I am so glad you are here!",
      "Pidgin": "I dey happy sey you dey here"
    }
  }, {
    "type": "say",
    "param": {
      "English": "I have just a few questions for you",
      "Pidgin": "I bin wan ask you small questions"
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Your answers will help us better understand how people think about Malaria in Nigeria.",
        "quick_replies": [{
          "content_type": "text",
          "title": "Let Go!",
          "payload": JSON.stringify({data: {break: false}})
        }]
      },
      "Pidgin": {
        "text": "Your answer go helep us sabi how pepu dey tink about malaria",
        "quick_replies": [{
          "content_type": "text",
          "title": "Let Go!",
          "payload": JSON.stringify({data: {break: false}})
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
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: true}})
        }]
      },
      "Pidgin": {
        "text": "Shey you sabi wetin malaria be?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: true}})
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
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "From sick people",
          "payload": JSON.stringify({data: {break: true}})
        }, {
          "content_type": "text",
          "title": "Dirty hands",
          "payload": JSON.stringify({data: {break: true}})
        }, {
          "content_type": "text",
          "title": "Other",
          "payload": JSON.stringify({data: {break: true}})
        }]
      },
      "Pidgin": {
        "text": "Do you know how you get Malaria?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Mosquitos",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "From sick people",
          "payload": JSON.stringify({data: {break: true}})
        }, {
          "content_type": "text",
          "title": "Dirty hands",
          "payload": JSON.stringify({data: {break: true}})
        }, {
          "content_type": "text",
          "title": "Other",
          "payload": JSON.stringify({data: {break: true}})
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
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: false}})
        }]
      },
      "Pidgin": {
        "text": "In the past months, have you used mosquito repellent?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: false}})
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
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: false}})
        }]
      },
      "Pidgin": {
        "text": "In the past months, have you taken any other actions to protect yourself from mosquitoes?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: false}})
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
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "Somewhat Likely",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "Not likely",
          "payload": JSON.stringify({data: {break: false}})
        }]
      },
      "Pidgin": {
        "text": "How likely are you to urge your friends to protect themselves from mosquitoes?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Very Likely",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "Somewhat Likely",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "Not likely",
          "payload": JSON.stringify({data: {break: false}})
        }]
      }
    }
  }, {
    "type": "say",
    "param": {
      "English": "Now, we want to see who people in different parts of Nigeria are responding to malaria",
      "Pidgin": ""
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Do you mind sharing your location with us?",
        "quick_replies": [{
          "content_type": "location",
          "title": "YES",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: false}})
        }]
      },
      "Pidgin": {
        "text": "Do you mind sharing your location with us?",
        "quick_replies": [{
          "content_type": "location",
          "title": "YES",
          "payload": JSON.stringify({data: {break: false}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: false}})
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
  saveAnswerFromUser: () => {

  },
  saveAnswersFromUser: () => {

  }
};