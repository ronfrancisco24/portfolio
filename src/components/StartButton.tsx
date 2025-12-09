
interface StartButtonProps {
    label?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export default function StartButton({
  label = 'Start',
  onClick,
  className = '',
  disabled = false,
}: StartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {label}
    </button>
  );
}


