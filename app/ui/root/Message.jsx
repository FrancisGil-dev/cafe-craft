import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Message = () => {
  // Form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Loading state
  const [loading, setLoading] = useState(false);

  // Handle change for any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Error handling
  const handleError = (error) => {
    Swal.fire({
      title: error,
      icon: 'question',
      timer: 1200,
      allowOutsideClick: false,
      showConfirmButton: false,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  // Success handling
  const handleSuccess = () => {
    Swal.fire({
      title: "Message Sent Successfully!",
      icon: 'success',
      allowOutsideClick: false,
      showConfirmButton: false,
      showCancelButton: false,
      timer: 1200,
    });
    setTimeout(() => {
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  // Handle message
  const onMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) return handleError("Complete All fields");

    try {
      const res = await axios.post("api/message", form);
      if (res.status === 200) return handleSuccess();
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 400) return handleError("Please complete all fields");
        if (error.response.status === 405) return handleError("Change request method");
        if (error.response.status === 500) return handleError("Internal Server Error");
      } else if (error.request) return handleError("Check your Network Connection");
      else return handleError("An error occurred. Please try again.");
    }
  };

  return (
    <form className='flex flex-col gap-4 max-sm:w-auto' onSubmit={onMessage} method='POST'>
      <input
        type="text"
        className='bg-transparent outline-none border-2 border-gray-500 p-3 rounded-2xl w-full max-md:p-2 max-sm:w-[360px]'
        placeholder='Your name'
        value={form.name}
        onChange={handleChange}
        name="name"
        readOnly={loading}
        autoComplete='off'
      />
      <input
        type="email"
        className='bg-transparent outline-none border-2 border-gray-500 p-3 rounded-2xl w-full max-md:p-2 max-sm:w-[360px]'
        placeholder='Your email'
        value={form.email}
        onChange={handleChange}
        name="email"
        readOnly={loading}
        autoComplete='off'
      />
      <textarea
        className='bg-transparent outline-none border-2 border-gray-500 p-3 rounded-2xl h-[200px] resize-none w-full max-md:p-2 max-sm:w-[360px]'
        placeholder='Your message'
        value={form.message}
        onChange={handleChange}
        name="message"
        readOnly={loading}
        autoComplete='off'
      ></textarea>
      <button
        className='bg-[#967259] font-bold p-3 text-white rounded-2xl focus:outline-none focus:shadow-outline w-full max-md:p-2 max-sm:w-[360px]'
        disabled={loading}
      >
        {loading ? (
          <div
            role="status"
            className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          ></div>
        ) : "Submit"}
      </button>
    </form>
  );
}

export default Message;
