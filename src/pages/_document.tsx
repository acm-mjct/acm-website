import { createGetInitialProps } from '@mantine/next';
import { emotionCache } from '@utils/emotions';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps(emotionCache);

export default class _Document extends Document {
	public override render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	public static override getInitialProps = getInitialProps;
}
