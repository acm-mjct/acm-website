import Image from 'next/image';

import boatImage from '../../public/404/boat.svg';
import islandImage from '../../public/404/island.svg';

export default function FourUhFour() {
	return (
		<div className="four-uh-four">
			<div className="not-found parallax">
				<div className="sky-bg" />
				<div className="wave-7" />
				<div className="wave-6" />
				<div className="wave-island">
					<Image alt="Island" src={islandImage} />
				</div>
				<div className="wave-5" />
				<div className="font-inter font-extrabold wave-lost wrp">
					<span>4</span>
					<span>0</span>
					<span>4</span>
				</div>
				<div className="wave-4" />
				<div className="wave-boat">
					<Image alt="Boat" className="boat" src={boatImage} />
				</div>
				<div className="wave-3" />
				<div className="wave-2" />
				<div className="wave-1" />
			</div>
		</div>
	);
}
