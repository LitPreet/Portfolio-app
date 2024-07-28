import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://portfolio-app-three-flame.vercel.app/"),

	title: 'Preet Bhardwaj',
	authors: {
		name: "Preet Bhardwaj",
	},

	description:
		"Based in Gurugram, I'm a Frontend developer passionate about injecting excitement into static web apps.",
	openGraph: {
		title: "Preet Bhardwaj",
		description:
			"Based in Gurugram, I'm a Frontend developer passionate about injecting excitement into static web apps.",
		url: "https://portfolio-app-three-flame.vercel.app/",
		siteName: "Preet Bhardwaj",
		images: "/og.png",
		type: "website",
	},
	keywords: ["portfolio", "Preet Bhardwaj", "Profile","front End developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/laptop.png" />
      </head>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
