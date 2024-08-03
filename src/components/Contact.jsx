import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.send(
      'service_95w517i',
      'template_pus6sz9',
      {
        from_name: form.name,
        to_name: 'Agrim',
        from_email: form.email,
        to_email: 'agrimtawani139@gmail.com',
        message: form.message,
      },
      'uvl839rHFX7B8K8Dp'
    )
    .then(() => {
      setForm({
        name: "",
        email: "",
        message: "",
    });
      alert("Thank you. I will get back to you as soon as possible.");
  })
  }

  const [text] = useTypewriter({
    words: ['Hey there, Like my work? Send me an Email.'],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
});

  return (
    <div className="p-10 sm:flex justify-evenly gap-2 my-3 ">
      
    <div className="h-auto bg-white bg-opacity-15 backdrop-blur-extra-sm w-auto p-5 rounded-2xl text-black sm:w-[40%] sm:h-[30%]">
      <form ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
      <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email"
              className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className="flex justify-center ">

          <button
            type="submit"
            className='py-3 px-8 rounded-xl hover:text-black hover:bg-gray-200 transition-colors hover:shadow-2xl border-[2px] w-fit text-white font-bold shadow-md shadow-primary'
          >
            Send
          </button>
          </div>
      </form>
    </div>
    <div className="sm:w-[20%] pl-5 mt-[50px] scale-125 sm:mt-[150px] sm:h-fit sm:scale-150">
        <h1 className="text-white ml-3 px-5 font-Inconsolata font-extrabold sm:text-3xl text-xl sm:scale-150">
          {text}
          <span className="text-red-600">
            <Cursor />
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Contact