import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

export const Contact = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("The email is required"),
    name: yup
      .string("Enter your name")
      .min(8, "name should be of minimum 8 characters length")
      .required("the name is required"),
    message: yup
      .string("Enter your message")
      .min(8, "Please enter a message of at least 8 characters")
      .required("The message is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b09q964",
        "template_op8ycwe",
        form.current,
        "user_xGpbGhfgYimOY1FILIx0a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center gap-y-5 items-center w-full md:w-10/12 max-w-4xl mb-36">
      <h2 className={` text-5xl sm:text-6xl`}>Contact Me</h2>
      <form
        noValidate
        autocomplete="off"
        ref={form}
        onSubmit={formik.handleSubmit}
        className=" w-full bg-white text-black my-8 px-2 py-6 rounded-md flex flex-col gap-y-3"
      >
        <div className="sm:flex gap-x-8 mx-6">
          <div className="basis-1/2">
            <TextField
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              required
              autoComplete="off"
              placeholder="Enter Your Name"
              label="Name"
              name="name"
              margin="normal"
              style={{ width: "100%" }}
            />
          </div>

          <div className="basis-1/2">
            <TextField
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              required
              autoComplete="off"
              type="email"
              id="email"
              placeholder="Enter Your Email"
              label="Email"
              name="email"
              margin="normal"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className=" mx-6 ">
          <TextField
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            required
            autoComplete="off"
            placeholder="Message"
            name="message"
            label="Message"
            margin="normal"
            style={{ width: "100%" }}
            multiline
          />
        </div>
        <br />
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className=" hover:bg-green-100  font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};
