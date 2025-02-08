import axios from 'axios';

const VOICEFLOW_API_URL = 'https://general-runtime.voiceflow.com/state/669c9a4ac1cb7a82eeb19714'; // replace with your Voiceflow API endpoint
const VOICEFLOW_API_VERSION = 'v1'; // adjust if needed
const VOICEFLOW_API_KEY = 'VF.DM.669f2e4722f361b242a2cbc6.tjHuD3nPMrq01vrP'; // replace with your Voiceflow API key

export const sendMessageToVoiceflow = async (userInput, userId) => {
  console.log(`Sending message to Voiceflow API. User Input: ${userInput}, User ID: ${userId}`);
  try {
    const response = await axios.post(
      `${VOICEFLOW_API_URL}/interact/${userId}/${VOICEFLOW_API_VERSION}`,
      {
        action: {
          type: 'text',
          payload: userInput,
        },
      },
      {
        headers: {
          Authorization: VOICEFLOW_API_KEY,
        },
      }
    );
    console.log('Voiceflow API response:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return null;
  }
};