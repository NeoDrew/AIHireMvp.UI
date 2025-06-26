import { loginUserEndpoint } from './endpoints';
import useAuthorisedApi from './useAuthorisedApi';
import { IEmailIDPair, IEmailPasswordPair } from 'types/requests';

export const useLoginUser = () => {
    const { execute, ...state } = useAuthorisedApi<IEmailIDPair>();

    const login = (creds: IEmailPasswordPair) => {
        const request = new Request(loginUserEndpoint(), {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(creds),
            headers: { 'Content-Type': 'application/json' },
        });

        return execute(request);
    };

    return { login, ...state };
};
