interface Props {
	image: ImageMetadata
	title: string
	description: string
}

const Card = ({ image, title, description }: Props) => {
	return (
		<div className="max-w-[70%] mx-auto bg-red-400 my-3 px-12 flex py-6 items-center justify-between">
			<img src={image.src} width={300} />
			<div className="flex flex-col p-6">
				<h1 className="text-[#002A41] text-4xl pb-10">{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Card
