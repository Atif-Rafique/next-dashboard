import React from 'react';
import type { ReactElement } from "react";


// ================ Guard ================
import GuestGuard from '@/guards/guest-guard';



// ================ Common ================
import Page from '@/components/page';



// ================ Components ================
import Layout from '@/layouts';
import SignupComponent from '@/components/signup/signup';



// ================ Config ================
import { PAGE_TITLE, VARIANT } from '@/config';




const TITLE = PAGE_TITLE.SIGNUP;


export default function Signup() {
    return (
        <GuestGuard>
            <Page title={TITLE}>
                <SignupComponent />
            </Page>
        </GuestGuard>
    );
}

Signup.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout variant={VARIANT.AUTH} title={TITLE}>
            {page}
        </Layout>
    );
};