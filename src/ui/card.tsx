interface Props {
	image: ImageMetadata
	title: string
	description: string
	imgRight?: boolean
}

const Card = ({ image, title, description, imgRight }: Props) => {
	return (
		<div
			className={`
				max-w-[80%] 
				max-sm:max-w-[90%]
				max-md:flex-col 
				max-md:text-center 
				max-md:py-0
				mx-auto 
				shadow-lg 
				my-3 
				px-12 
				flex ${imgRight && 'flex-row-reverse'} 
				py-6 
				items-center 
				justify-between
			`}
		>
			<img src={image.src} width={300} />
			<div className="flex flex-col p-6">
				<h1 className="text-[#002A41] text-4xl pb-10 max-md:pb-3">{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Card
