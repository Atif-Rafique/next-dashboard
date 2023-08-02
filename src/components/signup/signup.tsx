import React, { useState } from 'react';

// ================ Next ================
import Link from 'next/link';
import { useRouter } from 'next/router';


// ================ Ant Components ================
import { Button, Checkbox, Form } from "antd";



// ====================== Components ======================
import AppInput from '../common/app-input/app-input';


import { useSnackbar } from 'notistack';




const SignupComponent = () => {

    const [form] = Form.useForm();
    const router = useRouter();

    const [isLoginLoading, setIsLoginLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();


    const handleSignup = async (values: any) => {


        setIsLoginLoading(true);
        const { fullName, email, userName, password } = values;


        try {

            // Navigate the user to the login page if updateProfile succeeds
            enqueueSnackbar(`Signup Successfull. Now you can login to your account.`, { variant: 'success' });
            router.push('/auth/login');


        } catch (error) {
            console.log('Error:', error);
            enqueueSnackbar(`Error occurred while creating your account`, { variant: 'error' });
        }

        finally {
            setIsLoginLoading(false);
        }

    }



    return (
        <div className='w-[468px] min-h-[699px] bg-[white] rounded-[15px] p-[4em]'>
            <h2 className='text-4xl font-bold text-center primary-text-color'>Sign Up</h2>

            <Form
                form={form}
                layout="vertical"
                scrollToFirstError={true}
                onFinish={handleSignup}
                autoComplete="off"
            >

                <div className='mt-[1.875em]'>
                    <AppInput label="Full Name" name="fullName" placeholder="John Kevin" />
                </div>

                <div className='my-[1.875em]'>
                    <AppInput label="Email Address" name="email" placeholder="Example@gmail.com" />
                </div>

                <div className='my-[1.25em]'>
                    <AppInput label="Username" name="userName" placeholder="johnkevin4352" />
                </div>

                <div className='my-[1.25em]'>
                    <AppInput label="Password" name="password" placeholder="Your password" type="password" />
                </div>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    className='my-[1.25em]'
                    rules={[{ required: true, message: 'Please accept the agreement' }]}
                >
                    <Checkbox className='font-semibold'>
                        By creating an account you agree to the <Link href="#" className='text-sm font-bold underline text-[#7047EE]'>Terms of User</Link> and our <Link href="#" className='text-sm font-bold underline text-[#7047EE]'>Privacy Policy</Link>.
                    </Checkbox>
                </Form.Item>

                <Button htmlType='submit' type='primary' className='bg-[#2D74FF] text-white px-6 font-semibold w-full h-[45px] flex items-center justify-center' loading={isLoginLoading}>Create Account</Button>
            </Form>

            <p className='text-sm color p-color text-center my-[1.875em]'>Already have an account? <Link href="/auth/login" className='link-color text-base font-medium pl-[0.5em]' >Login</Link></p>
        </div>

    )
}

export default SignupComponent