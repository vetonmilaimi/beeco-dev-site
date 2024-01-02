import { CheckSquare } from 'lucide-react'

interface Props {
	title: string
	description: string
}

const Checks = ({ title, description }: Props) => {
	return (
		<div className="max-w-[30%] max-md:max-w-[100%] text-center">
			<CheckSquare className="text-brand-primary max-w-[100%] m-auto mt-9" size={48} />
			<h1 className="text-4xl text-brand-primary">{title}</h1>
			<p>{description}</p>
		</div>
	)
}

export default Checks
