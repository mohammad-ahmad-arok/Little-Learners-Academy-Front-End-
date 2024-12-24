import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/message'; // Replace with your actual server URL

// Get all messages
export const getAllMessages = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

// Get a message by ID
export const getMessageById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching message with ID ${id}:`, error);
    throw error;
  }
};

// Add a new message
export const addNewMessage = async (messageData: Record<string, any>) => {
  try {
    const response = await axios.post(BASE_URL, messageData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding new message:', error);
    throw error;
  }
};

// Delete a message
export const deleteMessage = async (id: string) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting message with ID ${id}:`, error);
    throw error;
  }
};
