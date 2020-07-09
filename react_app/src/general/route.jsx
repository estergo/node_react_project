import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Login = lazy(() => import('../auth/login'));
const Register = lazy(() => import('../auth/register'));
const CandidatesList = lazy(() => import('../candidates/candidatesList'));
const CandidateProfile = lazy(() => import('../candidates/candidateProfile'));

function Routing() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/candidates/:candidate" component={CandidateProfile} />
                <Route path="/candidates" component={CandidatesList} />
                <Route path="/" component={Login} />
            </Switch>
        </Suspense>
    );
}

export default Routing;
