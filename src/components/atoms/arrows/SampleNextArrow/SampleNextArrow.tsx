import cn from 'classnames';

interface ArrowProps {
  onClick?: () => void;
  isDisabled: boolean;
}

export function SampleNextArrow(props: ArrowProps) {
  const { onClick, isDisabled } = props;
  const classes = cn('arrow arrow-right', { disabled: isDisabled });

  return (
    <div onClick={isDisabled ? undefined : onClick} className={classes} />
  );
}
