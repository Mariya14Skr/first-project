import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import'./style.css';


const SignUp = ()  => {
  const validationsSchema = yup.object().shape({
    name: yup.string()
        .typeError('Должно быть строкой')
        .min(2, 'Слишком короткое имя!')
        .max(50, 'Имя не может быть таким длинным!')
        .required('Заполните это поле!'),
    surname: yup.string()
        .typeError('Должно быть строкой')
        .required('Заполните это поле!'),
    email: yup.string()
        .email('Неверный email')
        .required('Заполните это поле!'),
    password: yup.string()
        .typeError('Должно быть строкой')
        .required('Поля с паролями не заполнены!'),
    confirmPassword: yup.string()
        .test('passwords-match', 'Пароли не совпадают', function(value){
          return this.parent.password === value
        })
        .required('Поля с паролями не заполнены!'),
});

  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className='form-wrap'>
      <div className='header-form'>
        <h1>Регистрация аккаунта</h1>
      </div>
      <form onSubmit={handleSubmit}>
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        <><div className='input-container'>
            <input
              id='name'
              name='name'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={errors.name && touched.name ? 
                "input-error" : null}
              required />
            <label htmlFor={`name`}>Имя</label>
            {touched.name && errors.name && <div className='error'>{errors.name}</div>}
          </div><div className='input-container'>
            <input
              id='surname'
              name='surname'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
              className={errors.surname && touched.surname ? 
                "input-error" : null}
              required />
            <label htmlFor={`surname`}>Фамилия</label>
            {touched.surname && errors.surname && <div className='error'>{errors.surname}</div>}
          </div>
          <div className='input-container'>
            <input
              id='email2'
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
          </div><div className='input-container'>
              <input
                id='password2'
                name='password'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required />
              <label htmlFor={`password`}>Пароль</label>
              {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
            </div><div className='input-container'>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                required />
              <label htmlFor={`confirmPassword`}>Подтверждение пароля</label>
              {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
            </div>
            <button
              className='btn'
              disabled={!isValid && !dirty}
              type='submit'
              onClick={handleSubmit}
            >
              Зарегистрироваться
            </button></>
        )}
        </Formik>
      </form>
      <div className='already-registered'>
      Уже есть аккаунт?  <Link to="/sign-in" >Войти</Link>
    </div>
    </div>
  );
};

export default SignUp;
