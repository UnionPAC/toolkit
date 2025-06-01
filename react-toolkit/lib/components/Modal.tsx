import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  closeOnEsc?: boolean;
  closeOnBackdrop?: boolean;
  wrapperClass?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  closeOnEsc = true,
  closeOnBackdrop = true,
  wrapperClass = '',
  onClose,
  children
}) => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && closeOnEsc) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, closeOnEsc]);

  if (!open) return null;

  return createPortal(
    <div 
      className={wrapperClass} 
      onClick={(e) => {
        if (closeOnBackdrop && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {children}
    </div>,
    document.body
  );
};
