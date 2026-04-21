'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import * as gtag from '../lib/gtag'

const AnalyticsInner = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (!gtag.GA_TRACKING_ID) {
            return
        }
        const query = searchParams?.toString()
        const url = query ? `${pathname}?${query}` : pathname
        gtag.pageview(url)
    }, [pathname, searchParams])

    return null
}

const GoogleAnalytics = () => {
    if (!gtag.GA_TRACKING_ID) {
        return null
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Suspense fallback={null}>
                <AnalyticsInner />
            </Suspense>
        </>
    )
}

export default GoogleAnalytics
