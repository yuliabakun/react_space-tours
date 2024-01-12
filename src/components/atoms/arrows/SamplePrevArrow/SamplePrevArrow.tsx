import classNames from "classnames";


interface ArrowProps {
  onClick?: () => void;
  isDisabled: boolean;
}

export function SamplePrevArrow(props: ArrowProps) {
  const { onClick, isDisabled } = props;
  const classes = classNames('arrow arrow-left', { disabled: isDisabled });

  return (
    <div onClick={isDisabled ? undefined : onClick} className={classes} />
  );
}