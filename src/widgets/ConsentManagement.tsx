import React, { FC, useState } from 'react';
import { Agreeance, Navigation, RejectedMessage } from '../components';
import './consent-management.scss';
import { AgreeanceAction } from '../types';

const ConsentManagement: FC = () => {
  const [agreeanceResult, setAgreeanceResult] = useState<AgreeanceAction>(AgreeanceAction.None);

  return (
    <>
      <Agreeance onChange={(action: AgreeanceAction): void => setAgreeanceResult(action)} />
      {agreeanceResult !== AgreeanceAction.None && (
        <div className={`
          consent-management-container
          agreeance-${agreeanceResult === AgreeanceAction.Reject ? 'rejected' : 'accepted'}`}
        >
          <Navigation />
          {agreeanceResult === AgreeanceAction.Reject && (<RejectedMessage />)}
        </div>
      )}
    </>
  );
};

export default ConsentManagement;
