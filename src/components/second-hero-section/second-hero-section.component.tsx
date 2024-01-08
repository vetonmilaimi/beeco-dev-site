interface Props {
	title: string
}

const SecondHeroSection = ({ title }: Props) => {
	return (
		<section className="max-w-[100%] bg-[#F5F5F5] mx-auto flex justify-center py-14">
			<h1
				className="
              text-5xl 
              text-center 
              font-extra-bold 
              text-brand-primary
              max-md:text-3xl
            "
			>
				{title}
			</h1>
		</section>
	)
}

export default SecondHeroSection
