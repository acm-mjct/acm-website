import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { MantineProvider } from '@mantine/core';
import { emotionCache } from '@utils/emotions';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';

import '@unocss/reset/tailwind.css';
import '../styles/unocss.css';
import '../styles/404.css';
import '../styles/nprogress.css';
import '../styles/globals.css';

const transformCSS = (): JSX.Element => {
	return null as any;
};

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>ACM MJCET</title>
				<meta charSet="utf8" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />

				{/* <link href="/gem.png" rel="icon" type="image/png" /> */}

				<meta content="ACM MJCET" name="title" />
				<meta content="ACM,MJCET,muffakham jah,engineering,college,hyderabad,iit,india" name="keywords" />
				<meta content="index, follow" name="robots" />
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="English" name="language" />
				<meta content="ACM MJCET" property="og:title" />
				<meta content="website" property="og:type" />
				<meta content="https://mjcet.acm.org/" property="og:url" />
				{/* <meta content="/embed.png" property="og:image" /> */}
				<meta content="summary_large_image" name="twitter:card" />

				<meta content="summary_large_image" property="twitter:card" />
				<meta content="https://mjcet.acm.org/" property="twitter:url" />
				<meta content="ACM MJCET" property="twitter:title" />
				{/* <meta content="/embed.png" property="twitter:image" /> */}
			</Head>
			<MantineProvider
				emotionCache={emotionCache}
				theme={{
					colorScheme: 'dark',
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				<NextNProgress transformCSS={transformCSS} />
				<AnimatePresence initial mode="wait">
					<div className="bg-fixed min-h-screen bg-true-gray-900 background-image overflow-hidden">
						<nav>
							<Navbar />
						</nav>
						<div className="mx-auto min-h-screen  max-w-[88rem] px-4">
							<Component {...pageProps} />
							<Analytics />
						</div>
						{router.pathname !== '/404' && (
							<footer className="w-full left-0 absolute">
								<Footer />
							</footer>
						)}
					</div>
					{/* <ToastContainer theme="dark" /> */}
				</AnimatePresence>
			</MantineProvider>
		</div>
	);
}
