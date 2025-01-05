import React, { useState } from "react";
import "./StudentForm.modules.css";
import facebookIcon from "../../Assets/facebook-icon.png";
import twitterIcon from "../../Assets/twitter-icon.png";
import linkedinIcon from "../../Assets/linkedin-icon.png";
import axios from "axios";
import SectionHeader from "../SectionHeader/SectionHeader";

const StudentForm: React.FC = () => {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    ParentName: "",
    EmailAddress: "",
    PhoneNumber: "",
    StudentName: "",
    StudentAge: "",
    ProgramOfIntrest: "",
    Message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://little-learners-academy-back-end-j3iu.onrender.com/api/message",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        setstep(2);
      }
      return response.data;
    } catch (error) {
      console.error("Error adding new message:", error);
      throw error;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="student-form-wrapper">
      <SectionHeader
        title="Student Information"
        supTitle="Contact Form"
        para=" If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs."
      />
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
        {step === 1 && (
          <div className="student-form">
            <form className="student-form-form" onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="form-group">
                <label htmlFor="parentName">Parent Name</label>
                <input
                  id="ParentName"
                  type="text"
                  placeholder="Enter Parent Name"
                  value={formData.ParentName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="EmailAddress"
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.EmailAddress}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="PhoneNumber"
                  type="text"
                  placeholder="Enter Phone Number"
                  value={formData.PhoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentName">Student Name</label>
                <input
                  id="StudentName"
                  type="text"
                  placeholder="Enter Student Name"
                  value={formData.StudentName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentAge">Student Age</label>
                <input
                  id="StudentAge"
                  type="text"
                  placeholder="Enter Student Age"
                  value={formData.StudentAge}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="program">Program of Interest</label>
                <select
                  id="ProgramOfIntrest"
                  value={formData.ProgramOfIntrest}
                  onChange={handleInputChange}
                >
                  <option value="">Select Program</option>
                  <option value="Program 1">Program 1</option>
                  <option value="Program 2">Program 2</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="Message"
                  placeholder="Enter your Message"
                  rows={4}
                  value={formData.Message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <SectionHeader title="thank you" para="We will contact you later" />
        )}
      </div>
    </div>
  );
};

export default StudentForm;
