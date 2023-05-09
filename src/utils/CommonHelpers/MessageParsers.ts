import { nameByRace } from 'fantasy-name-generator';

import * as ReplyConstants from './ReplyConstants';

export function extractText(messageObject: any) {
  let text = '';
  const { message } = messageObject;
  if (message) {
    if (message.text && message.text.body) {
      text = message.text.body;
    } else if (message.interactive && message.interactive.button_reply) {
      text = message.interactive.button_reply.title;
    } else if (message.interactive && message.interactive.list_reply) {
      text = message.interactive.list_reply.title;
    }
  }
  return text;
}

export function formatToUserMsg(message: string, username: string): string {
  const formattedMessage = `~~~~~~~~~~~~~~~~~~~~~~~
${username}: ${message}
~~~~~~~~~~~~~~~~~~~~~~~`;
  return formattedMessage;
}

export function normalizeWAmsgID(wamid: any): string {
  let padding = '';
  if (!wamid.endsWith('==')) {
    padding += wamid.endsWith('=') ? '=' : '==';
  }
  return wamid + padding;
}

export function getFirstWord(input: any): string {
  const wordsInMessage = input.split(' ', 2);
  return wordsInMessage[0].toLowerCase().trim();
}

export function removeFirstWord(input: string): string {
  const firstSpaceIndex = input.indexOf(' ');
  if (firstSpaceIndex === -1) {
    return '';
  }
  return input.substring(firstSpaceIndex + 1);
}

export function generateUsername() {
  // prettier-ignore
  const adjectives = [
    'happy', 'sleepy', 'peppy', 'kwaii', 'funny', 'cute', 'silly',];
  // prettier-ignore
  const nouns = [
    'cat', 'dog', 'bird', 'lion', 'tiger', 'koala', 'horse', 'kitten', 'pup',];
  // prettier-ignore
  const emoji = [
    '😂' ,'❤️' ,'🤣' ,'👍','🙏' ,'😘' ,'🥰' ,'😍' ,'😊' ,'🎉' ,'😁' ,'💕' ,'🥺' ,'😅' ,'🔥' ,'☺️' ,'🤦' ,'♥️' ,'🤷' ,'🙄' ,'😆' ,'🤗' ,'😉' ,'🎂' ,'🤔' ,'👏' ,'🙂' ,'😳' ,'🥳' ,'😎' ,'👌' ,'💜' ,'😔' ,'💪' ,'✨' ,'💖' ,'👀' ,'😋' ,'😏' ,'👉','💯' ,'🌹' ,'💞' ,'🎈' ,'😃' ,'💐' ,'😜' ,'🙈' ,'🤞' ,'😄' ,'🤤' ,'🙌' ,'🤪' ,'❣️' ,'😀' ,'💀' ,'👇','😌' ,'🤩' ,'🙃' ,'😬' ,'😱' ,'😴' ,'🤭' ,'🌞' ,'😒' ,'😇' ,'🌸' ,'😈' ,'🎶' ,'✌️' ,'🎊' ,'☀️' ,'💰','👑' ,'🎁' ,'💥' ,'🙋' ,'☹️' ,'😑' ,'🥴' ,'👈' ,
  ]
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${randomAdjective}_${randomNoun}_${randomNumber}_${randomEmoji}`;
}

export function generateFantasyName(gender: any) {
  // prettier-ignore
  const race: string[] = ["angel", "drow", "elf", "fairy", "halfling", "highelf", "highfairy",];
  const randomPick = Math.floor(Math.random() * race.length);
  let randomeName = '';

  // Loop until a valid race is picked
  const randomRace = race[randomPick]; // Randomly pick a race from the array

  const normalizedGender =
    gender === ReplyConstants.SYSTEM_PROMPTS_GENDER_MALE ? 'male' : 'female';
  // Call nameByRace only if a valid race is picked
  if (randomRace && gender) {
    randomeName = <string>nameByRace(randomRace, {
      gender: normalizedGender,
      allowMultipleNames: true,
    }); // Pass the randomly picked race to nameByRace function
  }

  return `${randomeName}`;
}
