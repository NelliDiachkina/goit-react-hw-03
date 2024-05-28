import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required!'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number! Please enter the number in the format XXX-XXX-XX-XX'
    )
    .required('Required!'),
});

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={css.input} name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
