import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


// ====================== Constants ======================
import { PATH_AUTH } from '@/routes/paths';



// ================ Common ================
import Page from '@/components/page';



// ================ Components ================
import Layout from '@/layouts';
import LoadingScreen from '@/components/loading';



// ================ Config ================
import { PAGE_TITLE, VARIANT } from '@/config';




Home.getLayout = function getLayout(page: any) {
  return <Layout variant={VARIANT.MAIN}>{page}</Layout>;
};




export default function Home() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    router.push(PATH_AUTH.login);
  }, [router])

  if (isLoading) return <LoadingScreen />;





  return (
    <Page title={PAGE_TITLE.HOME}>
      <div className="h-full">
        <div className="relative"></div>
      </div>
    </Page>
  )
}
