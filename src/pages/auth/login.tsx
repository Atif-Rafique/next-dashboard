import React from 'react';
import type { ReactElement } from "react";


// ================ Guard ================
import GuestGuard from '@/guards/guest-guard';


// ================ Common ================
import Page from '@/components/page';


// ================ Components ================
import Layout from '@/layouts';
import LoginComponent from '@/components/login/login';



// ================ Config ================
import { PAGE_TITLE, VARIANT } from '@/config';




const TITLE = PAGE_TITLE.LOGIN;



export default function Login() {
    return (
        <GuestGuard>
            <Page title={TITLE}>
                <LoginComponent />
            </Page>
        </GuestGuard>
    );
}


Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout variant={VARIANT.AUTH} title={TITLE}>
            {page}
        </Layout>
    );
};