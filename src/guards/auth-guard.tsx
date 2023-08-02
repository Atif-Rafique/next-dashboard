
import { useState, useEffect } from "react";


// ===================== NEXT =====================
import { useRouter } from "next/router";


// ===================== Hooks =====================
import useAuth from "../hooks/useAuth";


//===================== components =====================
import Layout from "@/layouts";
import LoadingScreen from "@/components/loading";
import LoginComponent from "@/components/login/login";



// ====================================================================================

export default function AuthGuard({ children }: any) {

  const { isAuthenticated, isInitialized } = useAuth();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<any>(null);




  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      push(requestedLocation);
    }
  }, [pathname, push, requestedLocation]);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }





    return (
      <Layout variant="auth" title="Login">
        <LoginComponent />
      </Layout>
    );
  }

  return <>{children}</>;
}
