import About from '@components/About';

export default function Home() {
	return (
		<div className="pt-28">
			<div className="w-full h-[95vh]">
				<video
					autoPlay
					className="absolute top-16 left-0 w-full h-94.5% object-cover"
					loop
					muted
					poster="/thumb.jpg"
					src="/homeVideo.webm"
				/>
			</div>
			<About />
		</div>
	);
}
