export default function About() {
	return (
		<div className="mt-10 flex justify-center items-center lt-lg:flex-col-reverse lt-lg:px-10 gap-10 w-full" id="about">
			<video autoPlay className="object-cover" loop muted poster="/thumb.jpg" src="/about.mp4" />
			<div className="flex flex-col justify-center items-start gap-6">
				<h1 className="text-4xl font-bold text-white">About Us</h1>
				<p className="text-white">
					The Association for Computing Machinery is a U.S.-based international learned society for computing. It was
					founded in 1947 and is the world's largest and most prestigious scientific and educational computing society.
					ACM is widely recognized as the premier membership organization for computing professionals, delivering
					resources that advance computing as a science and a profession; enable professional development; and promote
					policies and research that benefit society.
				</p>
				<div className="flex ml-10 justify-start items-center w-full gap-40 lt-lg:gap-20 lt-lg:ml-0">
					<ul className="text-white list-disc">
						<li>Lectures and Workshops</li>
						<li>Student Presentations</li>
						<li>Exciting Events</li>
					</ul>
					<ul className="text-white list-disc">
						<li>Competitions</li>
						<li>Seminars</li>
						<li>Hackathons and much more!</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
