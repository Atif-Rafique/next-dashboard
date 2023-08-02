import React from 'react';
import type { ReactElement } from "react";


// ================ Common ================
import Page from '@/components/page';



// ================ Components ================
import Layout from '@/layouts';
import SettingsComponent from '@/components/settings/settings';


// ================ Config ================
import { PAGE_TITLE } from '@/config';




const TITLE = PAGE_TITLE.SETTINGS;


const Settings = () => {
    return (
        <Page title={TITLE}>
            <SettingsComponent />
        </Page>
    )
}

export default Settings;




Settings.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title={TITLE}>{page}</Layout>
    )
}

