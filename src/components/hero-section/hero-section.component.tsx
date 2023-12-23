import React from 'react'
import Button from 'ui/button'

const HeroSection = () => {
	return (
		<section className="max-w-[80%] mx-auto flex justify-center align-middle py-14">
			<div>
				<h1 className="text-5xl text-center font-extra-bold text-brand-primary">
					DIGITAL MARKETING & <br /> SOFTWARE DEVELOPMENT <br /> COMPANY
				</h1>
				<p className="text-center text-brand-primary py-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea suscipit vero labore velit placeat laborum
					quia maxime?
					<br /> Molestiae reprehenderit ut perferendis sed dolore et ducimus temporibus alias placeat neque?
				</p>
				{/* TODO: Add a button here --- Create a reusable button --- */}
				<div className="flex justify-center align-middle py-5">
					<Button text="Contact Us" />
				</div>
			</div>
		</section>
	)
}

export default HeroSection
