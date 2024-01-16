import cn from 'classnames';
import { ArrowProps } from '../../shared/types/ArrowProps';

export function SampleNextArrow(props: ArrowProps) {
  const { onClick, isDisabled } = props;
  const classes = cn('arrow arrow-right', { disabled: isDisabled });

  return (
    <div onClick={isDisabled ? undefined : onClick} className={classes} />
  );
};
