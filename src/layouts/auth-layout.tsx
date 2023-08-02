// ====================== components ======================
import Image from "@/components/image";
import image from "../../public/loader.svg";


// ========================================================================================

export default function AuthLayout({ children, title, imageNum = 1 }: any) {


    const logoStyle = { height: 65, width: 250, variant: "theme" };
    return (
        <>
            <div className="pt-4 px-5 direction-column justify-center gap-4 items-center">

                {/* =================== Logo Here =================== */}

                <div className="flex items-center justify-center">

                    {/* =================== Text here =================== */}

                    <div className="relative w-100 h-screen flex items-center justify-center">

                        {/* =================== Some More Text here =================== */}

                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}