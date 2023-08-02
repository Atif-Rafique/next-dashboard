// next
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

export default function MainLayout({ children }: any) {
    const { pathname } = useRouter();

    const isHome = pathname === "/";

    return (
        <div>
            {/* <div>Top Navbar</div> */}
            {children}
            {/* <div>Footer</div> */}
            <div style={{ flexGrow: 1 }} />
        </div>
    );
}
