// Sytem
export const SYSTEM_NAME = 'Fate';

// User Types
export const NEW_USER = 'newUser';
export const MATCHED_USER = 'matchedUser';
export const UNMATCHED_USER = 'unmatchedUser';
export const AI_MATCHED_USER = 'aiMatchedUser';

// User Fields
export const AGE = 'age';
export const AGE_LIST_BUTTON = 'Age Range';
export const AGE_LIST_TITLE_1 = '18-22';
export const AGE_LIST_TITLE_2 = '23-27';
export const AGE_LIST_TITLE_3 = '28-32';
export const AGE_LIST_TITLE_4 = '33-37';
export const AGE_LIST_TITLE_5 = '38+';
export const USERNAME = 'username';
export const GENDER = 'gender';
export const LOCATION = 'location';
export const LOCATION_BUTTON = 'Cities';
export const BIO = 'bio';
export const SUBSCRIPTION_STATUS = 'subscriptionStatus';
export const MANUAL_CHECK = 'manualCheck';
export const SUBSCRIBE_BUTTON = 'Subscribe';
export const UNSUBSCRIBE = 'Unsubscribe';
export const LOOKING_FOR_MATCH_SINCE = 'lookingForMatchSince';
export const CURRENT_MATCH_CLIENT_ID = 'currentMatchClientId';
export const PAST_MATCHES = 'pastMatches';
export const EXPIRATION = 'expiration'; // Conversation Expiry
export const AI_USERNAME = 'aiUsername';

// System Input Messages

export const USER_WELCOME_MESSAGES = ['Hi', 'Hello', 'Help'].map((a) =>
  a.toLowerCase()
);

export const USER_HELP_MESSAGES = ['Help', 'Stop', 'Report', 'Block'].map((a) =>
  a.toLowerCase()
);

export const LOADING_MESSAGE = 'looking for matches 🧐 ...';

export const ERROR_MESSAGE = `error, ⚠️
Restart the bot by clicking the button below`;

export const SAFETY_MESSAGE = `${SYSTEM_NAME} requests your patience 🙇🏻
We are working hard to find you a match.`;

export const DEFAULT_FOOTER = `${SYSTEM_NAME}`;
export const DEFAULT_SAFETY_BUTTON = 'Wait for it ...';
export const DEFAULT_DEMO_BUTTON = 'Demo 🎬';

// System Prompts
export const WELCOME_MESSAGE_BUTTON_FAQ = `Learn More`;
export const SYSTEM_PROMPTS_RESTART = 'Restart';
export const SYSTEM_PROMPTS_RESTART_BUTTON = 'Restart';
export const SYSTEM_PROMPTS_NAME = 'name';
export const SYSTEM_PROMPTS_GENDER_MALE = 'Male 🧍‍♂️';
export const SYSTEM_PROMPTS_GENDER_FEMALE = 'Female 💃';
export const SYSTEM_PROMPTS_MATCH_BUTTON = 'Match Me!';
export const SYSTEM_PROMPTS_EDIT_PROFILE = 'Edit Profile ✏️';
export const SYSTEM_PROMPTS_EDIT_PROFILE_2 = 'Edit Profile';
export const SYSTEM_PROMPTS_CHAT_BUTTON = 'Chat 🗣️';
export const SYSTEM_PROMPTS_END_CHAT_BUTTON = 'End Chat 🛑';
export const SYSTEM_PROMPTS_END_CHAT_USER_PROMPT = 'end chat';
export const SYSTEM_PROMPTS_END_MATCH_USER_PROMPT = 'end match';

// System to New User Messages

export const NEW_USER_WELCOME_MESSAGE = `👋 Hi there! I'm ${SYSTEM_NAME}!
Looking to meet new people? Let's get started!`;

export const NEW_USER_WELCOME_MESSAGE_BUTTON_START = `Find Match`;

export const NEW_USER_AGE_MESSAGE = `${SYSTEM_NAME} needs some info.
Please select your age range:`;
export const NEW_USER_AGE_ERROR_MESSAGE = `Please select a *valid* age range by clicking the *${AGE_LIST_BUTTON}* button below.`;
export const NEW_USER_USERNAME_MESSAGE = `Enter a cool username.`;
export const NEW_USER_LOCATION_MESSAGE = `Now select your current location:`;
export const NEW_USER_LOCATION_ERROR_MESSAGE = `Please select a *valid* location by clicking the *${LOCATION_BUTTON}* button below.`;
export const NEW_USER_GENDER_MESSAGE = `Select your gender now:`;
export const NEW_USER_GENDER_ERROR_MESSAGE = `Please click gender from the below options:`;
export const NEW_USER_BIO_MESSAGE = `Please enter a short bio about yourself.
e.g. I'm a student at IIT Delhi, I love playing badminton and I'm looking for someone to talk to.`;

// System to Existing User Messages
export const UNMATCH_MESSAGE = `Oops! Looks like they've unmatched with you.
Keep your spirits up and let's keep going! If you need a break, just send *"Unsubscribe"* to stop receiving messages from ${SYSTEM_NAME}. 😊`;

export const WILL_BE_MATCHED_MESSAGE = `We will notify you once we find a match for you!
This may take a few mins-hours, so please be patient.`;

export const UNMATCH_TIMEDOUT_MESSAGE = `Oops! You've been unmatched due to inactivity. Try matching again!`;

export const EXISTING_USER_WELCOME_MESSAGE = `👋 Hello! Ready to find your next match? Let's get started!
Click the button below!`;
export const EXISTING_USER_RESTARTED_MESSAGE = `Alright, let's start over!`;

export const UNSUBSCRIBED_MESSAGE = `You have unsubscribed from ${SYSTEM_NAME}!
If you would like to start ${SYSTEM_NAME} again, just send "hi" or click the button below.`;

export const CHURNED_USER_WELCOME_MESSAGE = `👋 Hello! Ready to find your next match using ${SYSTEM_NAME}?
Click the below button to Subscribe & start ${SYSTEM_NAME}`;

export const BAN_APOLOGY_MESSAGE = `Your match has been banned by *${SYSTEM_NAME}*.
We sincerely apologize for the inconvenience caused.
Please click the button below to find a new match.`;

// Common Messages
export const HELP_MESSAGE = `Psst.. You're in control. You can end the chat anytime. Take care.`;

export const FAQ_MESSAGE = `FAQ
1️⃣ What are the commands?
*Unsubscribe* - Stop receiving matches & Stop ${SYSTEM_NAME}
*Restart* - Delete all bio and start over
*End Chat* - End a chat with your match
*Edit Profile* - Edit your profile, but will end your current match

2️⃣ Is my information safe?
Absolutely! Your privacy is our top priority. We never ask for your personal information, and your phone number is kept private.
Your conversations are only accessible within this chat window, and we do NOT use or sell data to marketing agencies.`;

export const FAQ_MESSAGE_OLD = `Frequently Asked Questions
1️⃣ What is ${SYSTEM_NAME}?
${SYSTEM_NAME} is a WhatsApp bot that matches you with random users. You can chat with your match and decide if you want to befriend them!

2️⃣ How do I start using ${SYSTEM_NAME}?
Just send "Hi" to start using ${SYSTEM_NAME}.

3️⃣ Is my information safe?
Absolutely! Your privacy is our top priority. We never ask for your personal information, and your phone number is kept private.
Your conversations are only accessible within this chat window, and we do NOT use or sell data to marketing agencies.

4️⃣ How do I end a chat? What are other commands?
Simply send *"end chat"* to end a chat with your match.
If you wish to start over, just send "restart" to reset all information and begin again.
If you no longer wish to receive matches, just send "unsubscribe" to stop receiving them.`;

// Locations
export const LOCATION_DELHI = 'Delhi';
export const LOCATION_MUMBAI = 'Mumbai';

// Custom Arrays of System Prompts

// Age Ranges
export const SYSTEM_PROMPTS_ARRAY_AGE_RANGES = [
  AGE_LIST_TITLE_1,
  AGE_LIST_TITLE_2,
  AGE_LIST_TITLE_3,
  AGE_LIST_TITLE_4,
  AGE_LIST_TITLE_5,
].map((a) => a.toLowerCase());

// Genders
export const SYSTEM_PROMPTS_ARRAY_GENDERS = [
  SYSTEM_PROMPTS_GENDER_MALE,
  SYSTEM_PROMPTS_GENDER_FEMALE,
].map((a) => a.toLowerCase());

// In-Chat System Prompts

// Locations
export const SYSTEM_PROMPTS_ARRAY_LOCATIONS = [
  LOCATION_DELHI,
  LOCATION_MUMBAI,
].map((a) => a.toLowerCase());

// End Chat
export const SYSTEM_PROMPTS_ARRAY_END_CHAT = [
  SYSTEM_PROMPTS_END_CHAT_BUTTON,
  SYSTEM_PROMPTS_END_CHAT_USER_PROMPT,
  SYSTEM_PROMPTS_END_MATCH_USER_PROMPT,
].map((a) => a.toLowerCase());

// Restart
export const SYSTEM_PROMPTS_ARRAY_RESTART_BOT = [
  SYSTEM_PROMPTS_RESTART,
  SYSTEM_PROMPTS_RESTART_BUTTON,
  SYSTEM_PROMPTS_EDIT_PROFILE,
  SYSTEM_PROMPTS_EDIT_PROFILE_2,
].map((a) => a.toLowerCase());

// Edit Profile
export const SYSTEM_PROMPTS_ARRAY_EDIT_PROFILE = [
  SYSTEM_PROMPTS_EDIT_PROFILE,
  SYSTEM_PROMPTS_EDIT_PROFILE_2,
].map((a) => a.toLowerCase());

// Array of All System Prompts
export const SYSTEM_PROMPTS = [
  SYSTEM_PROMPTS_RESTART,
  SYSTEM_PROMPTS_RESTART_BUTTON,
  SYSTEM_PROMPTS_MATCH_BUTTON,
  SYSTEM_PROMPTS_EDIT_PROFILE,
  SYSTEM_PROMPTS_CHAT_BUTTON,
  SYSTEM_PROMPTS_END_CHAT_BUTTON,
  SYSTEM_PROMPTS_END_CHAT_USER_PROMPT,
].map((a) => a.toLowerCase());
