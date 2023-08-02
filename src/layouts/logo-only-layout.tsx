// =============================================================

export default function LogoOnlyLayout({ children }: any) {
    return (
        <>
            <div className="absolute w-100 top-0 left-0 p-5">
                <h2>Logo Only Layout</h2>
            </div>
            {children}
        </>
    );
}
