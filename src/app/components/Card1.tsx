import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
const Card1 = () => {
	return (
		<div>
			<div className="rounded whitespace-nowrap flex flex-wrap mx-auto mt-[20vh ] h-[20vh] font-medium p-4 bg-gray-100 w-[22vw]">
				<p>New Projects</p>
				<BsThreeDotsVertical className="justify-between h-5 w-5 relative left-[11vw] " />{" "}
				<div className="font-bold basis-full  block relative top-3">565</div>
				<div className="w-full flex items-center space-x-2 relative top-5">
					<FaArrowUp className="h-3 w-2 text-green-500" />
					<span className="text-green-500 font-sm">40%</span>
					<p className="font-sm">vs last month</p>
				</div>
			</div>
		</div>
	);
};
export default Card1;
