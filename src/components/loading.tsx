// ======================= Assets =======================
import AppImage from "./image";


export default function LoadingScreen() {
    return (
        <div className="fixed flex items-center justify-center w-full h-full top-0 left-0 bottom-0" style={{ zIndex: 9999 }}>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                <AppImage width={100} height={100} alt="Loading..." src="/loader.svg" />
            </div>
        </div>
    );
}
