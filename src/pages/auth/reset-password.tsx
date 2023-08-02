import React from 'react';
import type { ReactElement } from "react";

// ================ Guard ================
import GuestGuard from '@/guards/guest-guard';


// ================ Common ================
import Page from '@/components/page';



// ================ Components ================
import Layout from '@/layouts';
import ResetPasswordComponent from '@/components/reset-password/reset-password';



// ================ Config ================
import { PAGE_TITLE, VARIANT } from '@/config';




const TITLE = PAGE_TITLE.RESET_PASSWORD;



export default function ResetPassword() {
    return (
        <GuestGuard>
            <Page title={TITLE}>
                <ResetPasswordComponent />
            </Page>
        </GuestGuard>
    );
}

ResetPassword.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout variant={VARIANT.AUTH} title={TITLE}>
            {page}
        </Layout>
    );
};
