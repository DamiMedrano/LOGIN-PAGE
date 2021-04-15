import React from 'react';
import useForm from './useForm';
import '../../index.css';
import Validate from './Validate';

const FormSignup = ({ submitForm }) => {
   const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      Validate
   );

   return (
      <div>
         <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>Login</h1>
            <div className='form-inputs'>
               <label htmlFor='email' className='form-label'>
                  Email
               </label>
               <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  value={values.email}
                  onChange={handleChange}
               />
               {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
               <label htmlFor='password' className='form-label'>
                  Password
               </label>
               <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  value={values.password}
                  onChange={handleChange}
               />
               {errors.password && <p>{errors.password}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
               Sign in
            </button>
         </form>
      </div>
   );
};
export default FormSignup;
