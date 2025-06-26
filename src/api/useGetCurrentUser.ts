import { IUser } from 'types/user';
import useAuthorisedApi from './useAuthorisedApi';
import { useCallback } from 'react';
import { getCurrentUserEndpoint } from './endpoints';

export const useGetCurrentUser = () => {
    const { execute, ...state } = useAuthorisedApi<IUser>();

    const getMe = useCallback(() => {
        const request = new Request(getCurrentUserEndpoint(), { method: 'GET' });
        return execute(request);
    }, [execute]);

    return { getMe, ...state };
};