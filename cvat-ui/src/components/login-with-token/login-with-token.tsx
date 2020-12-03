// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React, { useEffect } from 'react';
import { Redirect, useParams, useLocation } from 'react-router';
import { useCookies } from 'react-cookie';

export default function LoginWithTokenComponent(): JSX.Element {
    const { sessionId, token } = useParams<{ sessionId: string; token: string }>();
    const [cookies, setCookie] = useCookies(['sessionid', 'csrftoken']);
    const location = useLocation();
    const redirectParam = new URLSearchParams(location.search).get('redirect');

    const expires1y = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    const expires2w = new Date(new Date().setDate(new Date().getDate() + 13));

    setCookie('sessionid', sessionId, { path: '/', expires: expires2w });
    setCookie('csrftoken', token, { path: '/', expires: expires1y });

    useEffect(
        () => () => {
            window.location.reload();
        },
        [cookies.sessionid, cookies.csrftoken],
    );

    if (cookies.sessionid && cookies.csrftoken) {
        return <Redirect to={redirectParam || '/tasks'} />;
    }
    return <></>;
}
