import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';


import cookie from "cookie";
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { AuthProvider } from '@/context/AuthContext';
import { SnackbarProvider } from 'notistack';
import App from 'next/app';





export default function MyApp({ Component, pageProps }: AppProps | any) {

  const router = useRouter();

  const getLayout = Component?.getLayout ?? ((page: any) => page);


  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Provider store={store}>
        <AuthProvider>
          <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            {getLayout(<Component {...pageProps} />, router)}
          </SnackbarProvider>
        </AuthProvider>
      </Provider>
    </>)
}


MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  return { ...appProps }
};