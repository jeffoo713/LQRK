import React, { useMemo } from 'react';
import { COLORS } from '../../assets/styles';
import { useParams } from 'react-router-dom';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';

type AddLiquorPopUpType = {
  display: boolean;
  setDisplayAddLiquor: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddLiquorPopUp: React.FC<AddLiquorPopUpType> = ({
  display,
  setDisplayAddLiquor,
}: AddLiquorPopUpType) => {
  const { liquorType } = useParams();

  const liquorTypeSingular = useMemo(() => {
    const liquorTypeName = TranslatedLiquorTypeEnums[liquorType! as LiquorType];
    return liquorTypeName.substring(0, liquorTypeName.length - 1);
  }, [liquorType]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '550px',
        height: '100vh',
        backgroundColor: `${COLORS.WHITE}`,
        borderRight: '1px solid black',
        transform: `${display ? 'translateX(0)' : 'translateX(-100%)'}`,
        transition: '0.5s',
        overflow: 'hidden',
      }}
    >
      <h3>{`Add ${liquorTypeSingular}`}</h3>
      <span onClick={() => setDisplayAddLiquor(false)}>X</span>
    </div>
  );
};

export default AddLiquorPopUp;
