import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b09q964', 'template_op8ycwe', form.current, 'user_xGpbGhfgYimOY1FILIx0a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='flex flex-col justify-center gap-y-5 items-center w-full'>
        <h2  className={styles.title}>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className=' w-4/5 bg-white text-black p-2 rounded-md'>
            <div className='sm:flex gap-x-8 mx-6'>
                <div className='basis-1/2'>
                    <TextField
                    placeholder="Enter Your Name"
                    label="Name"
                    name="name"
                    margin="normal"
                    style={{width:'100%'}}
                    />
                </div>
           
                <div className='basis-1/2'>
                    <TextField
                    placeholder="Enter Your Email"
                    label="Email"
                    name="email"
                    margin="normal"
                    style={{width:'100%'}}
                    />
                </div>
                
            </div>
            <div className=' mx-6 '>
                <TextField
                placeholder="Message"
                name="message"
                label="message"
                margin="normal"
                style={{width:'100%'}}
                multiline
                />
            </div>
           
            <br />
            <div className='w-full flex justify-center'>
                     <button
                         onClick={sendEmail}
                        className=" hover:bg-green-100  font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        >
                            Send Email
                        </button>
            </div>
           
        </form>
    </div>
    );
  
 
};