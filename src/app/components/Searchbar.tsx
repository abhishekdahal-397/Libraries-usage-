import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
export const Searchbar = () => {
	return (
		<>
			{" "}
			<div className=" Searchbar h-[4vh]  relative ">
				<input
					type="text "
					placeholder="search here"
					className="  py-auto rounded mx-1 h-9 my-2 px-6 w-[75vw] border-black outline-none border-[1px]"
				/>
				<FaSearch className="relative  bottom-[1.95rem] left-2" />
			</div>
			<div className=" mx-5 flex mt-5 h-4 w-4 rounded">
				<IoSettingsOutline />

				<IoIosNotifications className=" mt-5 h-4 w-4 mr-5 rounded" />
				<div className="rounded-full ml-4 bg-gray-500 mt-4 h-6 w-6"></div>
			</div>
			<div className=" absolute right-1">
				<span className="block relative right-4 top-2">PixarZo Design</span>
				<span className="text-[10px]">abishek@gmail.com</span>
			</div>
		</>
	);
};
