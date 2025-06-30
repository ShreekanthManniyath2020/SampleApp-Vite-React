// src/components/DataEntryForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: #ffffff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 1rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #0070f3;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 1rem;
`;

const Success = styled.div`
  color: green;
  font-size: 16px;
  margin-top: 1rem;
  text-align: center;
`;

// Component
const DataEntryForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, age } = formData;

    if (!name || !email || !age) {
      setError('Please fill in all fields.');
      return;
    }

    // Simple email regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Enter a valid email address.');
      return;
    }

    setSubmitted(true);
    console.log('Submitted Data:', formData);

    // Reset form
    setFormData({ name: '', email: '', age: '' });
  };

  return (
    <FormContainer>
      <Title>Data Entry Form</Title>
      <StyledForm onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} />

        <Label>Email</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} />

        <Label>Age</Label>
        <Input type="number" name="age" value={formData.age} onChange={handleChange} />

        {error && <Error>{error}</Error>}
        <Button type="submit">Submit</Button>
        {submitted && <Success>Form submitted successfully!</Success>}
      </StyledForm>
    </FormContainer>
  );
  };

  export default DataEntryForm;