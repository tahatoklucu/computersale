import React from 'react'
import { useFormik } from 'formik'
import { registerSchema } from '../schemas';
import { Link } from 'react-router-dom';
import '../styles/Register.css';


const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    });
    actions.resetForm();
}

function Register() {
    const {values, errors, isSubmitting, handleChange, handleSubmit} = useFormik({
            initialValues: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                isAccepted: '',
            },
            validationSchema: registerSchema,
            onSubmit
        });
  return (
    <form onSubmit={handleSubmit} className='register-mainForm'>
        <div className='register-div'>
            <label className='register-label'>Username</label>
            <input type='text' value={values.username} onChange={handleChange} id='username' placeholder='Please enter your username' className={errors.username ? ' register-input input-error' : 'register-input'}/>
            {errors.username && <p className='error'>{errors.username}</p>}
        </div>
        <div className='register-div'>
            <label className='register-label'>Email</label>
            <input type='email' value={values.email} onChange={handleChange} id='email' placeholder='Please enter your email' className={errors.email ? ' register-input input-error' : 'register-input'}/>
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='register-div'>
            <label className='register-label'>Password</label>
            <input type='password' value={values.password} onChange={handleChange} id='password' placeholder='Please enter your password' className={errors.password ? 'register-input input-error' : 'register-input'}/>
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className='register-div'>
            <label className='register-label'>Confirm Password</label>
            <input type='password' value={values.confirmPassword} onChange={handleChange} id='confirmPassword' placeholder='Please enter your password again' className={errors.confirmPassword ? ' register-input input-error' : 'register-input'}/>
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>
        <button className='register-button'>Register</button>
        <Link to='/login' className='register-link'>Back to the login page</Link>
    </form>
  )
}

export default Register