import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "./globals.css"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        template: '%s | Jens Penneman',
        default: 'Jens Penneman',
        absolute: 'Jens Penneman',
    },

    applicationName: "Jens Penneman",
    keywords: ["Jens", "Penneman"],

    creator: "Jens Penneman",
    publisher: "Jens Penneman",
    authors: [{name: "Jens Penneman", url: "https://jenspenneman.com"}],

    formatDetection: {
        url: false,
        email: false,
        telephone: false,
        address: false,
        date: false,
    },

    metadataBase: new URL("https://jenspenneman.com"),
    referrer: "origin-when-cross-origin",
    alternates: {
        canonical: "/",
        languages: {},
    },

    generator: "Next.js",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return <html lang="nl-BE">
    <body className={inter.className}>{children}</body>
    </html>;
}
