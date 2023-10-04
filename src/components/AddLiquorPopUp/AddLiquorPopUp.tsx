import React from 'react';
import { COLORS } from '../../assets/styles';

type AddLiquorPopUpType = {
  display: boolean;
};

const AddLiquorPopUp: React.FC<AddLiquorPopUpType> = ({ display }: AddLiquorPopUpType) => {
  return (
    <div
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        width: '400px',
        height: '400px',
        backgroundColor: `${COLORS.WHITE}`,
        display: `${display ? 'block' : 'none'}`,
      }}
    >
      Add liquor pop up
    </div>
  );
};

export default AddLiquorPopUp;
