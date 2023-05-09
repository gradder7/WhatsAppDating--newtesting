import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';

export async function sendTweetToWhatsApp(message: string) {
  const payload: PropsFormatted = {
    phoneNumber: process.env.TEST_PHONE_NUMBER,
    text: true,
    msgBody: message,
  };
  await sendMessageToWhatsapp(payload, 'tweet');
}

export async function sendTweetPhotoToWhatsApp(
  message: string,
  mediaUrl: string
) {
  const payload: PropsFormatted = {
    phoneNumber: process.env.TEST_PHONE_NUMBER,
    image: true,
    imageLink: mediaUrl,
    imageCaption: message,
  };
  await sendMessageToWhatsapp(payload, 'tweet');
}
