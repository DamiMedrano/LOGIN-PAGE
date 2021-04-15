import React from 'react';
import useFormReset from './useFormReset';
import '../../index.css';
import ValidateReset from './ValidateReset';

const ResetForm = ({ submitForm }) => {
   const { handleChange, handleSubmit, values, errors } = useFormReset(
      submitForm,
      ValidateReset
   );

   return (
      <div>
         <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>Reset Password</h1>
            <div className='form-inputs'>
               <span className='message'>
                  We will send you an email to reset your password
               </span>
               <br />
               <br />
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
            <button className='form-input-btn' type='submit'>
               Sign in
            </button>
         </form>
      </div>
   );
};
export default ResetForm;
