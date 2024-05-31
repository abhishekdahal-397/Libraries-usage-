import { Searchbar } from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import MidSection from "./components/MidSection";
import Card1 from "./components/Card1";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
export default function Home() {
	return (
		<>
			<CardContainer className="my-custom-class">
				{/* Your content here */}
				<CardBody>
					<CardItem>Item 1</CardItem>
					<CardItem translateX={50} translateY={20}>
						Item 2
					</CardItem>
				</CardBody>
			</CardContainer>
		</>
	);
}
