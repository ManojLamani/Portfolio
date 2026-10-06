import { forwardRef } from 'react';

// Card whose border glow tracks the pointer. Styling lives in .spotlight (index.css).
const Spotlight = forwardRef(function Spotlight({ as: Tag = 'div', className = '', children, ...rest }, ref) {
  const onPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag ref={ref} onPointerMove={onPointerMove} className={`card spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  );
});

export default Spotlight;
