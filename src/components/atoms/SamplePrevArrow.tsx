import classNames from "classnames";
import { ArrowProps } from "../../shared/types/ArrowProps";

export function SamplePrevArrow(props: ArrowProps) {
  const { onClick, isDisabled } = props;
  const classes = classNames('arrow arrow-left', { disabled: isDisabled });

  return (
    <div onClick={isDisabled ? undefined : onClick} className={classes} />
  );
};
