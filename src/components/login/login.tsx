import React, { useEffect, useState } from 'react';

// ================ Next ================
import Link from 'next/link';
import { useRouter } from 'next/router';


// ================ Ant Components ================
import { Button, Form } from "antd";


// ====================== Hooks ======================
import useAuth from '@/hooks/useAuth';


// ====================== Common ======================
import AppInput from '../common/app-input/app-input';


import { useSnackbar } from 'notistack';



const LoginComponent = () => {

    const { login } = useAuth();
    const router = useRouter();
    const [form] = Form.useForm();
    const { enqueueSnackbar } = useSnackbar();


    const [isLoginLoading, setIsLoginLoading] = useState(false);





    const handleLoginnn = async (credentials: any) => {

        setIsLoginLoading(true);
        const { email, password } = credentials;





        const resultAfterSignin = {
            user: credentials,
            token: {
                accessToken: "ASdasd",
                refreshToken: "sadasd",
            }
        }


        try {
            // await signIn({ email, password });






            login(resultAfterSignin)
            enqueueSnackbar('Sign in successful', { variant: 'success' });


        } catch (error: any) {

            console.log("Error ===========", error);
            enqueueSnackbar(`Error while signing in`, { variant: 'error' });

        }

        finally {
            setIsLoginLoading(false);
        }

    };



    return (
        <div className='w-[468px] h-[699px] bg-[white] rounded-[15px] p-[4em]'>
            <h2 className='text-4xl font-bold text-center primary-text-color'>Login</h2>

            <Form
                form={form}
                layout="vertical"
                scrollToFirstError={true}
                onFinish={handleLoginnn}
                autoComplete="off"
            // initialValues={{
            //     email: "fodag98148@rc3s.com",
            //     password: "Test111@@@"
            // }}
            >

                <div className='mt-[1.875em]'>
                    <AppInput label="Email Address" name="email" placeholder="Example@gmail.com" />
                </div>

                <div className='my-[1.25em]'>
                    <AppInput label="Password" name="password" placeholder="Your password" type="password" />
                </div>

                <Button htmlType='submit' type="primary" className='bg-[#2D74FF] text-white px-6 font-semibold w-full h-[45px] flex items-center justify-center' loading={isLoginLoading}>Log In</Button>
            </Form>

            <p className='text-base font-medium text-center link-color my-[1.875em]'>
                <Link href="/auth/reset-password" >
                    Reset Password?
                </Link>
            </p>

            <p className='text-sm color p-color text-center'>Don’t have account yet? <Link href="/auth/signup" className='link-color text-base font-medium pl-[0.5em]' >New Account</Link></p>
        </div>

    )
}

export default LoginComponent