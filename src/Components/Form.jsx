import { useState } from 'react';
import { useContextGlobal } from './utils/global.context';
import styles from "../Styles/form.module.css"

const Form = () => {
  const { state } = useContextGlobal()
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [errors, setErrors] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { fullName, email } = formData;

    if (fullName.length <= 5) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage(`Thanks ${formData.fullName}, we will contact you as soon as possible via email`);
      setErrors(false);
      console.log('Submitted form:', formData);
    } else {
      setErrors(true);
      setSuccessMessage('');
    }
  };

  return (
    <div className={state.theme ? styles.formDark : styles.formLight}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Complete Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>

      {errors && <p className={styles.errorMessage}>Please verify your information again</p>}

      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
    </div>
  );
};

export default Form;
