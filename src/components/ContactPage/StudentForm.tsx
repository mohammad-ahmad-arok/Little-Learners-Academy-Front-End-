import React, { useState, useEffect } from 'react';
import { getAllMessages, getMessageById, addNewMessage, deleteMessage } from './apiService';
import './StudentForm.css';
import facebookIcon from '../../Assets/facebook-icon.png';
import twitterIcon from '../../Assets/twitter-icon.png';
import linkedinIcon from '../../Assets/linkedin-icon.png';

type Message = {
  id: string;
  parentName: string;
  email: string;
  phoneNumber: string;
  studentName: string;
  studentAge: string;
  program: string;
  message: string;
};

const StudentForm: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phoneNumber: '',
    studentName: '',
    studentAge: '',
    program: '',
    message: '',
  });
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const allMessages = await getAllMessages();
        setMessages(allMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newMessage = await addNewMessage(formData);
      setMessages([...messages, newMessage]);
      setFormData({
        parentName: '',
        email: '',
        phoneNumber: '',
        studentName: '',
        studentAge: '',
        program: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleDeleteMessage = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    setLoading(true);
    try {
      await deleteMessage(id);
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Failed to delete the message.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewMessage = async (id: string) => {
    setLoading(true);
    try {
      const message = await getMessageById(id);
      setSelectedMessage(message);
    } catch (error) {
      console.error('Error fetching message by ID:', error);
      alert('Failed to fetch the message details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="student-form-wrapper">
      <div className="student-form-header">
        <button>Contact Form</button>
        <h1>Student Information</h1>
        <p>
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form
          below. Kindly provide the following details to help us better
          understand your needs.
        </p>
      </div>

      <div className="student-form-container">
        {/* Social Icons */}
        <div className="social-icons">
          <div className="social-icon">
            <img src={facebookIcon} alt="Facebook" />
          </div>
          <div className="social-icon">
            <img src={twitterIcon} alt="Twitter" />
          </div>
          <div className="social-icon">
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
        </div>

        {/* Student Form */}
        <div className="student-form">
          <form className="student-form-form" onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="form-group">
              <label htmlFor="parentName">Parent Name</label>
              <input
                id="parentName"
                type="text"
                placeholder="Enter Parent Name"
                value={formData.parentName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input
                id="studentName"
                type="text"
                placeholder="Enter Student Name"
                value={formData.studentName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentAge">Student Age</label>
              <input
                id="studentAge"
                type="text"
                placeholder="Enter Student Age"
                value={formData.studentAge}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="program">Program of Interest</label>
              <select id="program" value={formData.program} onChange={handleInputChange}>
                <option value="">Select Program</option>
                <option value="Program 1">Program 1</option>
                <option value="Program 2">Program 2</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Enter your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

  {/* Messages Section (Optional UI) */} 
         <div className="messages-section">
       
          <ul>
            {messages.map((msg) => (
              <li key={msg.id}>
                <strong>{msg.parentName}</strong> ({msg.email})
                <button onClick={() => handleViewMessage(msg.id)}>View</button>
                <button onClick={() => handleDeleteMessage(msg.id)}>Delete</button>
              </li>
            ))}
          </ul>
          {selectedMessage && (
            <div className="message-details">
              <h3>Message Details</h3>
              <p><strong>Name:</strong> {selectedMessage.parentName}</p>
              <p><strong>Email:</strong> {selectedMessage.email}</p>
              <p><strong>Message:</strong> {selectedMessage.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
