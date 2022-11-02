export default function Footer() {
	return (
		<div className="bg-true-gray-900 py-4 !bg-[#08090d] lg:pb-10 lg:px-4 text-white">
			<div className="flex mx-auto  max-w-[88rem] gap-8 justify-between lt-lg:flex-col lt-lg:px-4">
				<div className="flex flex-col gap-4 justify-center lt-lg:text-center">
					<div className="font-bold font-segoe text-lg">Reach Us</div>
					<div className="flex flex-col mx-auto  max-w-[88rem] justify-center">
						<div className="flex gap-2 justify-start items-center">
							<svg
								fill="currentColor"
								height="1em"
								stroke="currentColor"
								strokeWidth="0"
								viewBox="0 0 512 512"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
							</svg>
							<a className="rounded-md cursor-pointer outline-none" href="mailto:acmmjcetofficial@gmail.com">
								acmmjcetofficial@gmail.com
							</a>
						</div>
						<div className="flex gap-2 justify-start items-center">
							<svg
								fill="currentColor"
								height="1em"
								stroke="currentColor"
								strokeWidth="0"
								viewBox="0 0 640 512"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
							</svg>
							<a className="rounded-md cursor-pointer outline-none" href="https://discord.gg/HhRRMGHPPE">
								Discord Server
							</a>
						</div>
					</div>
				</div>
				{/* <div className="flex flex-wrap gap-4 justify-center items-center">
					{[
						{ name: 'Refund', path: 'https://sofi.gg/refund' },
						{ name: 'Terms', path: 'https://sofi.gg/terms' },
						{ name: 'Privacy', path: 'https://sofi.gg/privacy' },
					].map((data, index) => {
						return (
							<a
								className="rounded-md bg-true-gray-800 py-2 px-8 text-light-200 outline-none hover:bg-true-gray-800/90"
								href={data.path}
								key={index}
							>
								{data.name}
							</a>
						);
					})}
				</div> */}
			</div>

			<div className="flex mx-auto max-w-[88rem] items-center justify-between lt-lg:flex-col lt-lg:flex-col-reverse lt-lg:gap-2">
				<div className="text-sm pt-2 text-light-200">ACM MJCET | &copy; All rights reserved</div>

				<div className="flex pt-4 gap-4">
					<a href="https://hashnode.com/@acmmjcet" rel="noreferrer" target="_blank">
						<svg
							className="cursor-pointer h-8 fill-current text-[#00D6D6] w-8 move-up"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Hashnode</title>
							<path d="M22.192 11.317c0 .2-.08.392-.222.533l-9.28 9.306a.686.686 0 0 1-.512.224.743.743 0 0 1-.534-.225l-.654-.614a.284.284 0 0 1-.007-.41l10.713-10.72c.182-.182.497-.054.497.201v1.706zm-11.904 7.018l-.532.475a.445.445 0 0 1-.604-.014l-7.065-6.897a.918.918 0 0 1-.277-.66V9.952c0-.464.566-.698.9-.371l7.499 7.322c.13.13.35.396.35.717 0 .205-.047.495-.27.717zM3.973 4.987l2.431-2.402a.292.292 0 0 1 .41 0l8.139 8.045a2.19 2.19 0 0 1 0 3.12l-2.43 2.401a.293.293 0 0 1-.408 0l-8.14-8.047a2.172 2.172 0 0 1-.65-1.56c0-.59.23-1.144.648-1.557zm9.632 1.375l2.54-2.51a2.241 2.241 0 0 1 1.897-.623c.5.068.956.326 1.313.679l2.571 2.542a.284.284 0 0 1 0 .406l-3.91 3.867a.29.29 0 0 1-.41 0l-4.001-3.956a.285.285 0 0 1 0-.405zM23.7 5.885L18.04.19a.603.603 0 0 0-.852-.002l-4.493 4.485a.898.898 0 0 1-1.262.002L6.94.237a.603.603 0 0 0-.842-.002L.31 5.871c-.2.194-.31.458-.31.733v5.34c0 .271.11.534.305.726l11.277 11.145a.603.603 0 0 0 .846 0L23.696 12.67c.194-.193.304-.455.304-.727V6.606c0-.27-.106-.529-.298-.72z" />
						</svg>
					</a>
					<a href="https://twitter.com/AcmMjcet" rel="noreferrer" target="_blank">
						<svg
							className="cursor-pointer h-8 fill-current text-[#1DA1F2] w-8 move-up"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Twitter</title>
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
						</svg>
					</a>
					{/* <a href="https://www.reddit.com/r/sofigg" rel="noreferrer" target="_blank">
						<svg
							className="cursor-pointer h-8 fill-current text-[#FF4500] w-8 move-up"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Reddit</title>
							<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
						</svg>
					</a> */}
					<a href="https://discord.gg/HhRRMGHPPE" rel="noreferrer" target="_blank">
						<svg
							className="cursor-pointer h-8 fill-current text-[#5865F2] w-8 move-up"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Discord</title>
							<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
						</svg>
					</a>
					{/* <a href="https://donatebot.io/checkout/863226120245215262" rel="noreferrer" target="_blank">
						<svg
							className="cursor-pointer h-8 fill-current text-[#00457C] w-8 move-up"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>PayPal</title>
							<path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
						</svg>
					</a> */}
				</div>
			</div>
		</div>
	);
}