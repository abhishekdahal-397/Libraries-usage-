import React from "react";
import { AiFillTablet } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { TbPower } from "react-icons/tb";
import { GiButterfly } from "react-icons/gi";
import { GiDiamondTrophy } from "react-icons/gi";
const Sidebar = () => {
	return (
		<>
			<div className="relative ml-2 mt-2 rounded flex flex-col text-white  h-[100vh] bg-black w-[4vw]">
				<div className=" my-4 h-4 w-full">
					<AiFillTablet className="mx-auto" />
				</div>
				<div className=" my-4 h-4 w-full">
					<FaHome className="mx-auto" />
				</div>
				<div className=" my-4 h-4 w-full">
					<FaCalendar className="mx-auto" />
				</div>
				<div className=" my-4 h-4 w-full">
					<GiButterfly className="mx-auto" />
				</div>
				<div className=" my-4 h-4 w-full">
					<GiDiamondTrophy className="mx-auto" />
				</div>
				<div className=" my-4 h-4 absolute bottom-4 w-full">
					<TbPower className="mx-auto" />
				</div>
			</div>
		</>
	);
};
export default Sidebar;
