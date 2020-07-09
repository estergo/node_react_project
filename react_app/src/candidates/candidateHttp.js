import Api from '../general/api';

const candidateUrl = '/candidates';
const CandidateHttp = {

    all: () => {
        return Api.get(candidateUrl);
    }
}

export default CandidateHttp;