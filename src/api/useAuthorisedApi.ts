import { useCallback, useReducer } from 'react';
import {
  EUseAPIReducerActionType,
  IFetchState,
  TUseAPIReducerAction,
} from 'types';

export function useAuthorisedApi<T>() {
  const initialState: IFetchState<T> = {
    isLoading: false,
    data: null,
    error: null,
  };

  function reducer(
    state: IFetchState<T>,
    action: TUseAPIReducerAction<T>,
  ): IFetchState<T> {
    switch (action.type) {
      case EUseAPIReducerActionType.REQUEST:
        return { ...initialState, isLoading: true };
      case EUseAPIReducerActionType.SUCCESS:
        return { ...initialState, data: action.results };
      case EUseAPIReducerActionType.FAILURE:
        return { ...initialState, error: action.error };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const execute = useCallback(async (request: Request): Promise<IFetchState<T>> => {
    dispatch({ type: EUseAPIReducerActionType.REQUEST });

    try {
      const headers = new Headers(request.headers);

      const reqInit: RequestInit = {
        method: request.method,
        headers,
        mode: request.mode,
        cache: request.cache,
        redirect: request.redirect,
        referrer: request.referrer,
        referrerPolicy: request.referrerPolicy,
        integrity: request.integrity,
        keepalive: request.keepalive,
        signal: request.signal,
        credentials: 'include',
      };

      if (request.body !== null) {
        reqInit.body = request.body;
        (reqInit as any).duplex = 'half';
      }

      const authedRequest = new Request(request.url, reqInit);

      const response = await fetch(authedRequest);

      if (!response.ok) {
        let errorMessage: string;
        try {
          errorMessage = await response.text();
        } catch (e) {
          errorMessage = `HTTP ${response.status}` + e;
        }
        throw new Error(errorMessage);
      }

      const data: T = await response.json();
      dispatch({ type: EUseAPIReducerActionType.SUCCESS, results: data });
      return { ...initialState, data };
    } catch (error) {
      dispatch({ type: EUseAPIReducerActionType.FAILURE, error });
      return { ...initialState, error };
    }
  }, []);



  return {
    ...state,
    execute,
  };
}

export default useAuthorisedApi;