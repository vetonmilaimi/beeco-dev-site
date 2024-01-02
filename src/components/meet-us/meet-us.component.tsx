import meeting from '../../assets/Images/meeting.webp'
import Checks from './checks'

const MeetUs = () => {
	return (
		<div className="max-w-[80%] m-auto">
			<img
				src={meeting.src}
				alt="meeting img"
				className="
          max-w-[60%] 
          m-auto
          max-md:max-w-[100%]
        "
			/>

			<div className="flex max-md:flex-col gap-10 justify-center max-w p-6">
				<Checks
					title="Meet Us"
					description="
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem veniam reiciendis, aliquid quibusdam quae delectus accusantium nam adipisci esse dicta, fugiat, repudiandae odit commodi! Quos deserunt harum error repudiandae pariatur?
          "
				/>
				<Checks
					title="Meet Us"
					description="
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem veniam reiciendis, aliquid quibusdam quae delectus accusantium nam adipisci esse dicta, fugiat, repudiandae odit commodi! Quos deserunt harum error repudiandae pariatur?
          "
				/>
				<Checks
					title="Meet Us"
					description="
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem veniam reiciendis, aliquid quibusdam quae delectus accusantium nam adipisci esse dicta, fugiat, repudiandae odit commodi! Quos deserunt harum error repudiandae pariatur?
          "
				/>
			</div>
		</div>
	)
}

export default MeetUs
