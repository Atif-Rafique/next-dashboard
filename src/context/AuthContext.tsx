// import { useAppDispatch } from "@root/redux/store";
import { createContext, ReactNode, useEffect, useReducer } from "react";
// utils
import { getSession, isValidToken, setSession } from "../utils/jwt";
import { useAppDispatch } from "@/redux/store";
import { useLogoutMutation } from "@/services/authApi";
import { setAuthTokens } from "@/redux/slices/auth/slice";
// import { setAuthTokens } from "@root/redux/slices/auth/slice";
// import { useLogoutMutation } from "@root/services/authApi";

// ----------------------------------------------------------------------

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers = {
    INITIALIZE: (state: any, action: any) => {
        const { isAuthenticated, user } = action.payload;

        console.log("isAuthenticated, user", action.payload);

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },
    LOGIN: (state: any, action: any) => {
        const { user } = action.payload;

        console.log("user===========> ", user);



        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state: any) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
    REGISTER: (state: any, action: any) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
};

const reducer = (state: any, action: any) =>
    handlers[action.type as keyof typeof handlers]
        ? handlers[action.type as keyof typeof handlers](state, action)
        : state;

const AuthContext = createContext({
    ...initialState,
    method: "jwt",
    login: (res: any) => Promise.resolve(),
    logout: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

function AuthProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [logoutTrigger] = useLogoutMutation();
    const appDispatch = useAppDispatch();

    useEffect(() => {
        const initialize = () => {
            try {
                const {
                    accessToken,
                    refreshToken,
                    user,
                }: { accessToken: string; refreshToken: string; user: any } =
                    getSession();

                console.log("ININTAILAIZEEE", accessToken,
                    refreshToken,
                    user);



                if (accessToken && isValidToken(accessToken)) {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    });
                    // Set auth tokens is redux for api headers
                    const authData: any = { accessToken, refreshToken };
                    appDispatch(setAuthTokens(authData));
                } else {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: "INITIALIZE",
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };

        initialize();
    }, [appDispatch]);


    const login = (response: any) => {

        console.log("response==============> ", response);


        const { token, user }: any = response;

        const { refreshToken, accessToken } = token;


        setSession({ accessToken, refreshToken, user });

        dispatch({
            type: "LOGIN",
            payload: {
                user,
            },
        });
    };

    const logout = async () => {
        setSession(null);
        dispatch({ type: "LOGOUT" });
        // dispatch(logoutSuccess());
        // router.push('/');
        appDispatch({ type: "auth/logout" });
        // logoutTrigger();
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: "jwt",
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
