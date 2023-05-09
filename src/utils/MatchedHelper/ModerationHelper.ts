const USER_DISTRESS_WORDS = [
  'help',
  'stop',
  'report',
  'block',
  'unsafe',
  'hurt',
  'pain',
  'scared',
  'distressed',
  'triggered',
  'worried',
  'anxious',
  'uncomfortable',
  'nervous',
  'frustrated',
  'confused',
  'overwhelmed',
  'annoyed',
  'angry',
  'panicked',
  'fuck',
  'trash',
  'stp',
  'sex',
  'Rs',
].map((a) => a.toLowerCase());

export function checkHelpWords(lowercaseMessage: string): boolean {
  // Convert the input string to lowercase and split it into an array of words
  const inputWords = lowercaseMessage.split(' ');

  // Use some() array method to check if any help word is present in the input words
  return USER_DISTRESS_WORDS.some((helpWord) => inputWords.includes(helpWord));
}
