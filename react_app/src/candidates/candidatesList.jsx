import React, { Fragment, useEffect, useState } from 'react';

import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import './candidates.scss'
import CandidateHttp from './candidateHttp';
import CandidateTitle from './candidateTitle';

function CandidatesList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    CandidateHttp.all().then(data => {
      setData(data.candidates);
    }).catch(err => {
      if (err.response.status === 401) {
        props.history.push('/login');
      }
    });
  }, []);

  return (
    <List className="container">
      {data.map((candidate, i) => {
        return <Fragment key={i}>
          <CandidateTitle candidate={candidate}>
            <Button href={`/candidates/${encodeURIComponent(JSON.stringify(candidate))}`} color="primary"
              endIcon={<ArrowForwardIosRoundedIcon />}
            >Full Details
            </Button>
          </CandidateTitle>
          { i < data.length-1 && <Divider variant="inset" component="li" /> }
        </Fragment>
      })}

    </List>
  );
}

export default CandidatesList;