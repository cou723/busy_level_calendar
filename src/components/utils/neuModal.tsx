import React from 'react';

// import { Modal } from '@mui/base/Modal';
import { css } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: backgroundColor,
  p: 4,
  ...generateNeuStyle({
    radius: 2,
    intensity: 3,
    size: 2,
  }),
};

import Neu from '@/components/utils/neu';
import { backgroundColor } from '@/global';
import { generateNeuStyle } from '@/libs/generateNeuStyle';

export type Props = {
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
