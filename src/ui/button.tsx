interface Props {
	text: string
}

// TODO: Make this button reusable
const Button = ({ text }: Props) => {
	return (
		<button
			className="
        bg-[#166ABD]
        border-[#166ABD]
        opacity-90
        py-[0.6rem]
        px-[1.2rem]
        rounded-full 
        text-xl 
        text-white
        hover:text-secondary
        transition
        duration-300
        delay-150
        shadow-glossy
      "
		>
			{text}
		</button>
	)
}

export default Button
