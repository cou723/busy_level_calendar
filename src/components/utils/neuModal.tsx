import React from 'react';

import { css } from '@emotion/react';
import Modal from '@mui/material/Modal';

import Neu from '@/components/utils/neu';
import { backgroundColor } from '@/global';

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const NeuModal: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Modal {...props} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Neu
        css={css({
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor,
          padding: '2rem',
        })}
        surface="convex"
      >
        {children}
      </Neu>
    </Modal>
  );
};

export default NeuModal;
