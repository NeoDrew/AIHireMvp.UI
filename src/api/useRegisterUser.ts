import { loginUserEndpoint } from './endpoints';
import useAuthorisedApi from './useAuthorisedApi';
import { IEmailIDPair, IRegisterUserRequest } from 'types/requests';

export const useRegisterUser = () => {
    const { execute, ...state } = useAuthorisedApi<IEmailIDPair>();

    const register = (creds: IRegisterUserRequest) => {
        const request = new Request(loginUserEndpoint(), {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(creds),
            headers: { 'Content-Type': 'application/json' },
        });

        return execute(request);
    };

    return { register, ...state };
};
