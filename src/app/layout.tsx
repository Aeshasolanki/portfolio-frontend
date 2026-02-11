"use client";

import "./scroll-animations.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script"; // Import the Next.js Script optimizer


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Social Media Meta Tags (SEO) */}
        <meta property="og:title" content="My Professional Portfolio" />
        <meta property="og:description" content="Check out my latest Web Development projects." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className="bg-[#0a0a0a] text-white flex flex-col min-h-screen">
        
        {/* --- Facebook SDK / Pixel --- */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_FB_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* --- Twitter (X) Widget Script --- */}
        <Script 
          src="https://platform.twitter.com/widgets.js" 
          strategy="lazyOnload" 
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}