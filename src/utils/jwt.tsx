import jwtDecode from "jwt-decode";
import { verify, sign } from "jsonwebtoken";

import jwt from 'jsonwebtoken';



// ----------------------------------------------------------------------

const isValidToken = (accessToken: string) => {
    if (!accessToken) {
        return false;
    }
    const decoded: any = jwtDecode(accessToken);
    console.log("jwtDecode(accessToken)============> ", jwtDecode(accessToken));

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
};

//  const handleTokenExpired = (exp) => {
//   let expiredTimer;

//   window.clearTimeout(expiredTimer);
//   const currentTime = Date.now();
//   const timeLeft = exp * 1000 - currentTime;
//   console.log(timeLeft);
//   expiredTimer = window.setTimeout(() => {
//     console.log('expired');
//     // You can do what ever you want here, like show a notification
//   }, timeLeft);
// };

const getSession = () => {
    const sessionJSON = window.localStorage.getItem("session");
    if (sessionJSON) return JSON.parse(sessionJSON);
    return {};
};

const setSession = (userData: any) => {
    if (userData) {
        localStorage.setItem("session", JSON.stringify(userData));
        // axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
        // This function below will handle when token is expired
        // const { exp } = jwtDecode(authToken);
        // handleTokenExpired(exp);
    } else {
        localStorage.removeItem("session");
        // delete axios.defaults.headers.common.Authorization;
    }
};


// const setToken = (data: any) => {
//     const accessToken = jwt.sign(data, "process.env.NEXT_SECRET_KEY", { expiresIn: '1h' });

//     // Generate the JWT refresh token (optional, only if you want to implement refresh tokens)
//     const refreshToken = jwt?.sign(data, 'your_refresh_secret_key_here', { expiresIn: '7d' });


//     return { accessToken, refreshToken }

// }








export { isValidToken, setSession, verify, sign, getSession };
