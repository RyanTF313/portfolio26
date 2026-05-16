import styles from './Spinner.module.css';

interface SpinnerProps {
  size?: 'sm' | 'md';
}

export function Spinner({ size = 'md' }: SpinnerProps) {
  return (
    <span
      className={`${styles.spinner} ${size === 'sm' ? styles.sm : ''}`}
      role="status"
      aria-label="Loading"
    />
  );
}
