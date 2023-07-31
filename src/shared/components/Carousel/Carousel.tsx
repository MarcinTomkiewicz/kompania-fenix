import { useEffect, useState } from "react";
import { useTransition, useSpringRef } from "@react-spring/web";
import { carouselElementData } from "../../utils/backend";
import { CarouselElement } from "../CarouselElement/CarouselElement";

export const Carousel = () => {
	const [index, setIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false)

	const transRef = useSpringRef();
	const transitions = useTransition(index, {
		ref: transRef,
		keys: null,
		from: { opacity: 0, transform: "rotateX(-100deg)", transformOrigin: "left" },
		enter: { opacity: 1, transform: "rotateX(0deg)", transformOrigin: "left" },
		leave: { opacity: 0, transform: "rotateX(-100deg)", transformOrigin: "left" },
		config: {
			duration: 1000,
		},
	});

	useEffect(() => {
		if (isHovered) return;
		const changeCarousel = setInterval(() => setIndex((state) => (state + 1) % carouselElementData.length), 5000);
		return () => clearInterval(changeCarousel);
	}, [isHovered]);

	useEffect(() => {
		transRef.start();
	}, [index]);

	return (
		<div onMouseEnter={() => setIsHovered(prev => !prev)} onMouseLeave={() => setIsHovered(prev => !prev)} style={{ height: "500px", display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", position: "relative" }}>
			{transitions((style, i) => {
				return (
					<CarouselElement
						imgSource={carouselElementData[i].imgSource}
						header={carouselElementData[i].header}
						description={carouselElementData[i].description}
						buttonLink={carouselElementData[i].buttonLink}
						buttonText={carouselElementData[i].buttonText}
						style={style}
					/>
				);
			})}
		</div>
	);
};
