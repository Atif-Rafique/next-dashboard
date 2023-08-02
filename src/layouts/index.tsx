import React from 'react';


// ============ Guards ============
import AuthGuard from '@/guards/auth-guard';
import GuestGuard from '@/guards/guest-guard';



// ============ Layouts ============
import MainLayout from './main';
import AuthLayout from './auth-layout';
import DashboardLayout from './dashboard';
import LogoOnlyLayout from './logo-only-layout';





export default function Layout({ variant = "dashboard", children, ...other }: any) {


    if (variant === "auth") {
        return <AuthLayout {...other}> {children} </AuthLayout>;
    }

    if (variant === "logoOnly") {
        return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
    }

    if (variant === "main") {
        return (
            <GuestGuard>
                <MainLayout>{children}</MainLayout>
            </GuestGuard>
        );
    }

    return (
        <AuthGuard>
            <DashboardLayout {...other}> {children} </DashboardLayout>
        </AuthGuard>
    );
}