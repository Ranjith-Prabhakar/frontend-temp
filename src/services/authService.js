import axios from '../api/axiosInstance';

export const refreshAccessToken = async () => {
  try {
    const response = await axios.post('/refresh', null, {
      withCredentials: true, // required if your refresh token is stored in cookies
    });

    // Assuming the response contains the new access token
    const { accessToken, user } = response.data;

    return { accessToken, user };
  } catch (error) {
    console.error('Failed to refresh token:', error);
    throw error;
  }
};
