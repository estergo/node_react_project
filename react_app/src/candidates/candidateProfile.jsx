import React from 'react';
import { useParams } from 'react-router-dom';

import CandidateTitle from './candidateTitle';
import './candidates.scss';

function CandidateProfile() {
  const candidate = JSON.parse(decodeURIComponent(useParams().candidate));
  return (
    <div className="container">
      <CandidateTitle candidate={candidate}>
        <div className="other-details">
          <span>Email: {candidate.email}</span>
          <br />
          <span>Gender: {candidate.gender}</span>
        </div>
      </CandidateTitle>
      <p className='job-description'>{candidate.job_description}</p>
    </div>
  );
}

export default CandidateProfile;