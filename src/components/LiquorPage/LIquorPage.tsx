import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import GlobalContext from '../../stateManagement/globalContext';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';

const LiquorPage = () => {
  const {
    state: { liquorState },
  } = useContext(GlobalContext);

  const { liquorType } = useParams();

  const isValidLiquorType = (liquorType: string | undefined): liquorType is LiquorType => {
    return !!liquorType && liquorType in TranslatedLiquorTypeEnums;
  };

  return (
    <div>
      {isValidLiquorType(liquorType) ? (
        <div>
          <h1>{TranslatedLiquorTypeEnums[liquorType]}</h1>
          {liquorState[liquorType].map(r => (
            <p key={r.id}>{r.name}</p>
          ))}
        </div>
      ) : (
        <Navigate to='..' relative='path' />
      )}
    </div>
  );
};

export default LiquorPage;
