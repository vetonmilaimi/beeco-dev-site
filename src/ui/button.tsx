interface Props {
	text: string
}

const Button = ({ text }: Props) => {
	return (
		<button
			className="
        bg-[#166ABD]
        opacity-90
        py-[0.6rem]
        px-[1.2rem]
        rounded-full 
        text-xl 
        text-white
      "
		>
			{text}
		</button>
	)
}

export default Button
