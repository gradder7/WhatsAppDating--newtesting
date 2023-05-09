/* eslint-disable no-console */
import axios from 'axios';
import process from 'process';

import { saveToClientDocsDB, saveToConversationsDB } from './MessageSavers';

async function makeRequestToWhatsapp(data: any) {
  const URL = `https://graph.facebook.com/v15.0/${process.env.PHONE_ID}/messages?access_token=${process.env.FACEBOOK_ADMIN_TOKEN}`;
  const ret = await axios({ method: 'POST', url: URL, data }).catch((e) => {
    // eslint-disable-next-line no-console
    console.log('WHATSAPP SERVICE FAILED', e.response);
  });
  // eslint-disable-next-line no-console
  console.log(ret?.status === 200 ? 'success' : 'failure');
  // eslint-disable-next-line no-console
  // console.log('response', JSON.stringify(ret, null, 2));
  return ret;
}

export interface ICreateMessagePayload {
  phoneNumber: any;
  reaction?: boolean;
  messageID?: string;
  reactionEmoji?: string;
  text?: boolean;
  msgBody?: string;
  msgHeader?: string;
  msgFooter?: string;
  template?: boolean;
  templateName?: string;
  templateLanguageCode?: string;
  image?: boolean;
  imageID?: string;
  imageLink?: string | undefined;
  imageCaption?: string;
  quickReply?: boolean;
  button1?: string | boolean;
  button2?: string | boolean;
  button3?: string | boolean;
  video?: boolean;
  videoLink?: string;
  location?: boolean;
  locationName?: string;
  locationAddress?: string;
  locationLat?: string;
  locationLong?: string;
  pdf?: boolean;
  pdfName?: string;
  pdfLink?: string;
  list?: boolean;
  listButton?: string;
  listTitle1?: string;
  listTitle2?: string;
  listTitle3?: string;
  listTitle4?: string;
  listTitle5?: string;
  variables?: boolean;
  variable1?: string;
  variable2?: string;
  variable3?: string;
}

type Defined<T> = T extends undefined ? false : T;

export type PropsFormatted = {
  [K in keyof ICreateMessagePayload]: Defined<ICreateMessagePayload[K]>;
};

async function createWAMessagePayload(payload: PropsFormatted) {
  const {
    phoneNumber,
    reaction,
    messageID,
    reactionEmoji,
    text,
    msgBody,
    msgHeader,
    msgFooter,
    template,
    templateName,
    templateLanguageCode,
    image,
    imageID,
    imageLink,
    imageCaption,
    quickReply,
    button1,
    button2,
    button3,
    video,
    videoLink,
    location,
    locationName,
    locationAddress,
    locationLat,
    locationLong,
    pdf,
    pdfName,
    pdfLink,
    list,
    listButton,
    listTitle1,
    listTitle2,
    listTitle3,
    listTitle4,
    listTitle5,
    variables,
    variable1,
    variable2,
    variable3,
  } = payload;

  const data = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: phoneNumber,
    ...(reaction && {
      type: 'reaction',
      reaction: {
        message_id: messageID,
        emoji: reactionEmoji,
      },
    }),
    ...(text && {
      type: 'text',
      text: {
        preview_url: false,
        body: msgBody,
      },
    }),
    ...(image && {
      type: 'image',
      image: {
        ...(imageLink ? { link: imageLink } : {}),
        ...(imageID ? { id: imageID } : {}),
        ...(imageCaption ? { caption: imageCaption } : {}),
      },
    }),
    ...(pdf && {
      type: 'document',
      document: {
        link: pdfLink,
        filename: pdfName,
      },
    }),
    ...(location && {
      type: 'location',
      location: {
        name: locationName,
        address: locationAddress,
        latitude: locationLat,
        longitude: locationLong,
      },
    }),
    ...(template && {
      type: 'template',
      template: {
        name: templateName,
        language: {
          code: templateLanguageCode,
        },
        components: [
          {
            type: 'header',
            parameters: [
              ...(image
                ? [
                    {
                      type: 'image',
                      image: {
                        link: imageLink,
                      },
                    },
                  ]
                : []),
              ...(video
                ? [
                    {
                      type: 'video',
                      video: {
                        link: videoLink,
                      },
                    },
                  ]
                : []),
            ],
          },
          ...(variables
            ? [
                {
                  type: 'body',
                  parameters: [
                    ...(variable1 ? [{ type: 'text', text: variable1 }] : []),
                    ...(variable2 ? [{ type: 'text', text: variable2 }] : []),
                    ...(variable3 ? [{ type: 'text', text: variable3 }] : []),
                  ],
                },
              ]
            : []),
          ...(quickReply && button1
            ? [
                {
                  type: 'button',
                  sub_type: 'quick_reply',
                  index: '0',
                  parameters: [
                    {
                      type: 'payload',
                      payload: 'PAYLOAD',
                    },
                  ],
                },
              ]
            : []),
          ...(quickReply && button2
            ? [
                {
                  type: 'button',
                  sub_type: 'quick_reply',
                  index: '1',
                  parameters: [
                    {
                      type: 'payload',
                      payload: 'PAYLOAD',
                    },
                  ],
                },
              ]
            : []),
          ...(quickReply && button3
            ? [
                {
                  type: 'button',
                  sub_type: 'quick_reply',
                  index: '2',
                  parameters: [
                    {
                      type: 'payload',
                      payload: 'PAYLOAD',
                    },
                  ],
                },
              ]
            : []),
        ],
      },
    }),
    ...(quickReply &&
      !template && {
        type: 'interactive',
        interactive: {
          type: 'button',
          ...(msgHeader
            ? {
                header: {
                  type: 'text',
                  text: msgHeader,
                },
              }
            : {}),
          body: {
            text: msgBody,
          },
          ...(msgFooter
            ? {
                footer: {
                  text: msgFooter,
                },
              }
            : {}),
          action: {
            buttons: [
              ...(button1
                ? [
                    {
                      type: 'reply',
                      reply: {
                        id: 'button1',
                        title: button1,
                      },
                    },
                  ]
                : []),
              ...(button2
                ? [
                    {
                      type: 'reply',
                      reply: {
                        id: 'button2',
                        title: button2,
                      },
                    },
                  ]
                : []),
              ...(button3
                ? [
                    {
                      type: 'reply',
                      reply: {
                        id: 'button3',
                        title: button3,
                      },
                    },
                  ]
                : []),
            ],
          },
        },
      }),
    ...(list && {
      type: 'interactive',
      interactive: {
        type: 'list',
        ...(msgHeader
          ? {
              header: {
                type: 'text',
                text: msgHeader,
              },
            }
          : {}),
        body: {
          text: msgBody,
        },
        ...(msgFooter
          ? {
              footer: {
                text: msgFooter,
              },
            }
          : {}),
        action: {
          button: listButton,
          sections: [
            {
              rows: [
                ...(listTitle1
                  ? [{ id: 'SECTION_1_ROW_1_ID', title: listTitle1 }]
                  : []),
                ...(listTitle2
                  ? [{ id: 'SECTION_1_ROW_2_ID', title: listTitle2 }]
                  : []),
                ...(listTitle3
                  ? [{ id: 'SECTION_1_ROW_3_ID', title: listTitle3 }]
                  : []),
                ...(listTitle4
                  ? [{ id: 'SECTION_1_ROW_4_ID', title: listTitle4 }]
                  : []),
                ...(listTitle5
                  ? [{ id: 'SECTION_1_ROW_5_ID', title: listTitle5 }]
                  : []),
              ],
            },
          ],
        },
      },
    }),
    ...(!template &&
      !pdf &&
      !location &&
      !list && {
        components: [
          {
            type: 'header',
            parameters: [
              ...(image
                ? [
                    {
                      type: 'image',
                      image: {
                        ...(imageLink ? { link: imageLink } : {}),
                        ...(imageID ? { id: imageID } : {}),
                        ...(imageCaption ? { caption: imageCaption } : {}),
                      },
                    },
                  ]
                : []),
              ...(video
                ? [
                    {
                      type: 'video',
                      video: {
                        link: videoLink,
                      },
                    },
                  ]
                : []),
            ],
          },
        ],
      }),
  };
  return data;
}

export async function sendMessageToWhatsapp(
  payload: any,
  fromUserID?: string,
  fromUserMsgID?: string
) {
  const data = await createWAMessagePayload(payload);
  const res = await makeRequestToWhatsapp(data);
  if (res?.data?.messages?.length) {
    if (fromUserID !== 'tweet') {
      if (!fromUserMsgID || !fromUserID) {
        await saveToClientDocsDB(data, res);
      } else if (fromUserID && fromUserMsgID) {
        await saveToConversationsDB(data, res, fromUserID, fromUserMsgID);
      }
    }
    // eslint-disable-next-line no-console
    console.log(
      `${data.type} outgoing ${res.status === 200 ? 'success' : 'fail'}`
    );
    return res && res.status === 200;
  }
  return false;
}
