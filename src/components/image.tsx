import NextImage from "next/image";

// ----------------------------------------------------------------------

export default function AppImage({ src, alt, sx, ...other }: any) {
    return (
        <div style={{ position: "relative", ...sx }}>
            <NextImage alt={alt} src={src} {...other} />
        </div>
    );
}
