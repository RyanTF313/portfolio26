import styles from './Alert.module.css';

interface AlertProps {
  variant: 'success' | 'error';
  title: string;
  message: string;
  onDismiss?: () => void;
}

export function Alert({ variant, title, message, onDismiss }: AlertProps) {
  return (
    <div
      className={`${styles.alert} ${styles[variant]}`}
      role="alert"
      aria-live="polite"
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          className={styles.dismiss}
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
}

