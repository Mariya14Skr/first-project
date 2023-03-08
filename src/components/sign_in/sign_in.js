import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import'./style.css';


const SignIn = ()  => {
  const validationsSchema = yup.object().shape({
    email: yup.string()
        .email('Неверный email')
        .required('Заполните это поле!'),
    password: yup.string()
        .required('Поля с паролями не заполнены!'),
});
  

  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className='form-wrap2'>

      <div className='header-form2'>
        <h1>Вход в аккаунт</h1>
      </div>
      <form onSubmit={handleSubmit}>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur={true}
      onSubmit={handleSubmit}
      validationSchema={validationsSchema}
    > 
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty
       }) => (
        <><div className='input-container2'>
            <input
              id='email'
              name='email'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={errors.email && touched.email ? 
                "input-error" : null}
              required />
            <label htmlFor={`email`}>Email</label>
            {touched.email && errors.email && <div className='error'>{errors.email}</div>}
          </div><div className='input-container2'>
              <input
                id='password'
                name='password'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required />
              <label htmlFor={`password`}>Пароль</label>
              {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
            </div>
            <button
              className='btn2'
              disabled={!isValid && !dirty}
              type='submit'
              onClick={handleSubmit}
            >
              Вход
            </button></>
        )}
        </Formik>
      </form>
      <div className='already-registered2'>
        Нет аккаунта? <Link to="/sign-up" >Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default SignIn;