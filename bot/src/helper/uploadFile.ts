import Axios from 'axios';

const URL = "https://graph.facebook.com/v2.6/me/message_attachments?access_token=EAADsDHnWhZAoBAJcrGELAyj8fA74WRH4rni61mnJhk5a0H9LTBfZAO8B24OfuyYGq5dXexwjZAUsZBBHer5v3Xfxjj6OQjD5tNbzsUvuVEH27F7LBlfNRNFd4drODxACCDdBtZB8MxbD5WJUQCMaw3Av2kAkAZBGRqchUh18b0xwZDZD"
export const uploadFile = async (url: string): Promise<{attachment_id: string}> => {
  const res = await Axios.post<{attachment_id: string}>(URL, {
    "message":{
      "attachment":{
        "type":"image",
        "payload":{
          "is_reusable": true,
          "url":url
        }
      }
    }
  });
  return res.data
}
