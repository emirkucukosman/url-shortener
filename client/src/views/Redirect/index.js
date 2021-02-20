import React, { useCallback, useEffect } from 'react'
import useIsMountedRef from '../../hooks/useIsMountedRef'
import api from '../../utils/api'
import { useLocation } from 'react-router-dom'

const RedirectView = () => {
    const routerLocation = useLocation();
    const isMountedRef = useIsMountedRef();

    const fetchBaseURL = useCallback(() => {
        const shortURL = routerLocation.pathname.split('/')[2];
        api.get(`/url/r/${shortURL}`)
            .then((res) => {
                if (isMountedRef.current) {
                    return window.location.href = `http://${res.data.baseURL}`
                }
            })
            .catch((err) => console.error(err))
    }, [isMountedRef])

    useEffect(() => {
        fetchBaseURL();
    }, [fetchBaseURL])

    return (
        <div style={{ color: "#fff" }}>
            Loading...
        </div>
    )
}

export default RedirectView
