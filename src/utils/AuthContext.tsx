import { createContext, useEffect, useState, useCallback } from 'react';
import { IUser } from 'types/user';
import { IEmailPasswordPair } from 'types/requests';
import { useGetCurrentUser } from 'api/useGetCurrentUser';
import { useLoginUser } from 'api/useLoginUser';

interface AuthContextType {
    user: IUser | null;
    loading: boolean;
    login: (creds: IEmailPasswordPair) => Promise<void>;
    logout: () => void;
    refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    // Use refactored hooks
    const { login: loginRequest } = useLoginUser();
    const { getMe: getCurrentUser } = useGetCurrentUser();

    useEffect(() => {
        let cancelled = false;

        const fetchUser = async () => {
            setLoading(true);
            try {
                const { data } = await getCurrentUser();
                if (!cancelled && data) setUser(data);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchUser();

        return () => {
            cancelled = true;
        };
    }, [getCurrentUser]);


    const login = useCallback(async (creds: IEmailPasswordPair) => {
        setLoading(true);
        try {
            const { data, error } = await loginRequest(creds);
            if (error) throw error;
            const { data: userData } = await getCurrentUser();
            if (userData) setUser(userData);
        } catch (err) {
            console.error('Login failed:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [loginRequest, getCurrentUser]);

    const logout = useCallback(() => {
        setUser(null);
        // Optionally: clear auth tokens or cookies here
    }, []);

    const refreshUser = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await getCurrentUser();
            if (data) setUser(data);
        } finally {
            setLoading(false);
        }
    }, [getCurrentUser]);

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
};