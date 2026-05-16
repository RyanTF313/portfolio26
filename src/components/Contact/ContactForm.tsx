import { useCallback, useState } from 'react';
import { Alert } from '../ui/Alert';
import { Spinner } from '../ui/Spinner';
import { submitContactForm } from '../../api/submitContactForm';
import {
  enquiryOptions,
  initialFormValues,
  validateField,
  validateForm,
  type FormErrors,
  type FormField,
  type FormValues,
} from '../../utils/validation';
import styles from './ContactForm.module.css';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>(
    {}
  );
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submittedFirstName, setSubmittedFirstName] = useState('');
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  const showError = (field: FormField) =>
    Boolean((touched[field] || hasAttemptedSubmit) && errors[field]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const field = name as FormField;
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);

    if (touched[field] || hasAttemptedSubmit) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const field = name as FormField;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const allTouched: Partial<Record<FormField, boolean>> = {
        firstName: true,
        email: true,
        enquiryType: true,
        message: true,
      };
      setHasAttemptedSubmit(true);
      setTouched(allTouched);

      const validationErrors = validateForm(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) return;

      setStatus('loading');

      const success = await submitContactForm(values);

      if (success) {
        setSubmittedFirstName(values.firstName.trim());
        setValues(initialFormValues);
        setErrors({});
        setTouched({});
        setHasAttemptedSubmit(false);
        setStatus('success');
      } else {
        setStatus('error');
      }
    },
    [values]
  );

  const dismissAlert = () => setStatus('idle');

  return (
    <div className={styles.formWrapper}>
      {status === 'success' && (
        <Alert
          variant="success"
          title="All good!"
          message={`Thanks for your submission ${submittedFirstName}, we will get back to you shortly!`}
          onDismiss={dismissAlert}
        />
      )}
      {status === 'error' && (
        <Alert
          variant="error"
          title="Oops"
          message="Something went wrong, please try again later"
          onDismiss={dismissAlert}
        />
      )}

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Contact form"
      >
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            className={`${styles.input} ${showError('firstName') ? styles.inputError : ''}`}
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={showError('firstName')}
            aria-describedby={
              showError('firstName') ? 'firstName-error' : undefined
            }
          />
          {showError('firstName') && (
            <p id="firstName-error" className={styles.error} role="alert">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={`${styles.input} ${showError('email') ? styles.inputError : ''}`}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={showError('email')}
            aria-describedby={showError('email') ? 'email-error' : undefined}
          />
          {showError('email') && (
            <p id="email-error" className={styles.error} role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="enquiryType" className={styles.label}>
            Type of Enquiry
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            className={`${styles.input} ${styles.select} ${showError('enquiryType') ? styles.inputError : ''}`}
            value={values.enquiryType}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={showError('enquiryType')}
            aria-describedby={
              showError('enquiryType') ? 'enquiryType-error' : undefined
            }
          >
            {enquiryOptions.map((option) => (
              <option key={option.value || 'placeholder'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {showError('enquiryType') && (
            <p id="enquiryType-error" className={styles.error} role="alert">
              {errors.enquiryType}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${styles.input} ${styles.textarea} ${showError('message') ? styles.inputError : ''}`}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={showError('message')}
            aria-describedby={
              showError('message') ? 'message-error' : undefined
            }
          />
          {showError('message') && (
            <p id="message-error" className={styles.error} role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className={styles.submit}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Spinner size="sm" />
              <span>Sending…</span>
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
