import type { FormValues } from '../utils/validation';

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ??
  'https://formspree.io/f/mvzypgbv';

const enquiryLabels: Record<string, string> = {
  general: 'General Enquiry',
  freelance: 'Freelance Project',
  collaboration: 'Collaboration',
  other: 'Other',
};

export async function submitContactForm(values: FormValues): Promise<boolean> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      firstName: values.firstName.trim(),
      email: values.email.trim(),
      enquiryType: enquiryLabels[values.enquiryType] ?? values.enquiryType,
      message: values.message.trim(),
      _subject: `Portfolio enquiry from ${values.firstName.trim()}`,
    }),
  });

  return response.ok;
}
