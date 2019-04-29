import express from 'express';
import request from 'request';
const router = express.Router();
const PAGE_ACCESS_TOKEN = "YOUR_PAGE_ACCESS_TOKEN";
const VERIFY_TOKEN = "YOUR_VERIFY_TOKEN";

router.get('/webhook', (req, res) => {
  // console.log(req.query['hub.verify_token'])
  if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
    return res.send(req.query['hub.challenge'])
  }
  res.send('wrong token')
});

router.post('/webhook', (req, res) => {
  let body = req.body;
  if (body.object === 'page') {
    body.entry.forEach(function (entry) {
      if (!entry.hasOwnProperty("messaging")) {
        return;
      }
      let webhook_event = entry.messaging[0];
      // console.log(webhook_event);
      let sender_psid = webhook_event.sender.id;
      if (sender_psid === "623027724568415") {
        return;
      }

      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);
      } else if (webhook_event.postback) {
        // handlePostback(sender_psid, webhook_event.postback);
      }
    });
    res.send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404);
  }
});

function handleMessage(sender_psid, received_message) {
  let response;
  if (received_message.text) {
    response = {"text": `You sent the message: "${received_message.text}". Now send me an image!`}
  }
  // callSendAPI(sender_psid, response);
  sendWelcomeMessage(sender_psid)
}

function sendWelcomeMessage(sender_psid) {
  const message = {
    "text": "Here is a quick reply!",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Register an event",
        "payload":"Register event payload",
        "image_url":"https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium_ov.png"
      },
      {
        "content_type":"text",
        "title":"Subscribe events",
        "payload":"subscribe events payload",
        "image_url":"https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium_ov.png"
      },
    ]
  };
  let request_body = {"recipient": {"id": sender_psid}, message}
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": {"access_token": PAGE_ACCESS_TOKEN},
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!', {request_body})
    } else {
      console.error("Unable to send message:" + err);
    }
  });
}

function callSendAPI(sender_psid, response) {
  let request_body = {"recipient": {"id": sender_psid}, "message": response}
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": {"access_token": PAGE_ACCESS_TOKEN},
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!', {request_body})
    } else {
      console.error("Unable to send message:" + err);
    }
  });
}
export default router;