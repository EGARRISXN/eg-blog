'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UserForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const res = await fetch('/api/Users', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      'Content-Type': 'application/json',
    });

    if (res.ok) {
      router.refresh();
      router.push('/');
    } else {
      try {
        const response = await res.json();
        setErrorMessage(response.message);
      } catch (error) {
        console.error('Error parsing JSON response:', error);
        setErrorMessage('An error occurred.');
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method='post'
        className='flex w-1/2 flex-col gap-3'
      >
        <h1>Create New User</h1>
        <label>Full Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={handleChange}
          required={true}
          value={formData.name}
          className='m-2 rounded bg-slate-400'
        />
        <label>Email</label>
        <input
          id='email'
          name='email'
          type='text'
          onChange={handleChange}
          required={true}
          value={formData.email}
          className='m-2 rounded bg-slate-400'
        />
        <label>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={handleChange}
          required={true}
          value={formData.password}
          className='m-2 rounded bg-slate-400'
        />
        <input
          type='submit'
          value='Create User'
          className='bg-blue-300 hover:bg-blue-100'
        />
      </form>
      <p className='text-red-500'>{errorMessage}</p>
    </>
  );
}
