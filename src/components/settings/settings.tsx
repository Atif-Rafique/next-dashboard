import React from 'react';



// ================ Lib ================
import useAuth from '@/hooks/useAuth';
import { useSnackbar } from "notistack";



const SettingsComponent = () => {

    // const { handleLogout } = useAuth();
    const { logout } = useAuth();

    const { enqueueSnackbar } = useSnackbar()


    const handleLogouttt = async () => {
        console.log("handleLogouttt");

        try {

            logout();
            enqueueSnackbar('Log out Successful', { variant: 'success' });

        } catch (error) {
            console.log("error sign out", error);
            enqueueSnackbar('Error while Logging out', { variant: 'error' });
        }
    }

    return (
        <div>
            <h2>Settings</h2>
            <button type='button' onClick={handleLogouttt} className='bg-slate-300 py-2 px-6 mt-4 font-semibold'>Log Out</button>
        </div>
    )
}

export default SettingsComponent