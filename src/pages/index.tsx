import About from '../components/About';

export default function Home() {
	return (
		<div className="pt-18">
			<div className="w-full h-[92vh]">
				<video
					autoPlay
					className="absolute top-0 left-0 w-full h-full object-cover"
					loop
					muted
					poster="/thumb.jpg"
					src="/video.webm"
				/>
			</div>
			<About />
		</div>
	);
}
