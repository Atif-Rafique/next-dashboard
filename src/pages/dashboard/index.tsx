import React, { type ReactElement } from 'react'



// ================ Components ================
import Layout from '@/layouts'


// ================ Components ================
import Page from '@/components/page';


// ================ Config ================
import { PAGE_TITLE } from '@/config';





const TITLE = PAGE_TITLE.DASHBOARD;



Dashboard.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title={TITLE}>
            {page}
        </Layout>
    )
}


function Dashboard() {
    return (
        <Page title={TITLE}>
            DASHBOARD
        </Page>
    )
}

export default Dashboard