import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


// ================ Ant Components ================
import { Button, Checkbox, Form } from "antd";




// ====================== Components ======================
import AppInput from '../common/app-input/app-input';


import { useSnackbar } from 'notistack';



const ResetPasswordComponent = () => {

    const [form] = Form.useForm();
    const router = useRouter();

    const [isLoginLoading, setIsLoginLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();




    const handleResetPassword = async (values: any) => {


        setIsLoginLoading(true);
        const { email } = values;


        try {

            enqueueSnackbar(`Check your mail. The password reset mail is on its way`, {
                variant: 'warning',
                autoHideDuration: 10000
            });


            // router.push('/login');

        } catch (error) {
            console.log('Error Resetting Password =========>', error);
            enqueueSnackbar(`Error occurred while resetting your password`, { variant: 'error' });

        }

        finally {
            setIsLoginLoading(false);
        }

    };


    return (
        <div className='w-[468px] min-h-[699px] bg-[white] rounded-[15px] p-[4em]'>
            <h2 className='text-4xl font-bold text-center primary-text-color'>Recover</h2>
            <p className='text-xs text-center  my-[1.875em]'>If you deleted your Google Account, you may be able to get it back. If it’s your account.</p>

            <Form
                form={form}
                layout="vertical"
                scrollToFirstError={true}
                onFinish={handleResetPassword}
                autoComplete="off"
            >


                <div className='my-[1.875em]'>
                    <AppInput label="Email Address" name="email" placeholder="Example@gmail.com" />
                </div>

                <Button htmlType='submit' type='primary' className='bg-[#2D74FF] text-white px-6 font-semibold w-full h-[45px] flex items-center justify-center' loading={isLoginLoading}>Reset Your Password</Button>
            </Form>

            <p className='text-sm color p-color text-center my-[1.875em]'>Already have an account? <Link href="/auth/login" className='link-color text-base font-medium pl-[0.5em]' >Login</Link></p>
        </div>

    )
}

export default ResetPasswordComponent