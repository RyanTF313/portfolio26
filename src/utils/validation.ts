export interface FormValues {
  firstName: string;
  email: string;
  enquiryType: string;
  message: string;
}

export type FormField = keyof FormValues;

export interface FormErrors {
  firstName?: string;
  email?: string;
  enquiryType?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateField(
  name: FormField,
  value: string
): string | undefined {
  switch (name) {
    case 'firstName':
      if (!value.trim()) return 'Required';
      return undefined;
    case 'email':
      if (!value.trim()) return 'Required';
      if (!EMAIL_REGEX.test(value.trim())) return 'Invalid email address';
      return undefined;
    case 'enquiryType':
      if (!value) return 'Required';
      return undefined;
    case 'message':
      if (!value.trim()) return 'Required';
      if (value.trim().length < 25) return 'Must be at least 25 characters';
      return undefined;
    default:
      return undefined;
  }
}

export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(values) as FormField[]).forEach((field) => {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  });
  return errors;
}

export const initialFormValues: FormValues = {
  firstName: '',
  email: '',
  enquiryType: '',
  message: '',
};

export const enquiryOptions = [
  { value: '', label: 'Select an option' },
  { value: 'general', label: 'General Enquiry' },
  { value: 'freelance', label: 'Freelance Project' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'other', label: 'Other' },
] as const;
