import { CSSProperties, useEffect, useState } from "react";
import { useTransition, animated, AnimatedProps, useSpringRef } from "@react-spring/web";
import { carouselElementData } from "../../utils/backend";
import { CarouselElement } from "../CarouselElement/CarouselElement";

export const Carousel = () => {
	const [index, set] = useState(0);
	// const onClick = () => set((state) => (state + 1) % 2);
	const transRef = useSpringRef();
	const transitions = useTransition(index, {
		ref: transRef,
		keys: null,
		from: { opacity: 0, transform: "rotateX(-100deg)", transformOrigin: 'left' },
		enter: { opacity: 1, transform: "rotateX(0deg)", transformOrigin: 'left' },
		leave: { opacity: 0, transform: "rotateX(-100deg)", transformOrigin: 'left' },
		config: {
			duration: 1000,
		},
	});

	useEffect(() => {
		const changeCarousel = setInterval(() => set((state) => (state + 1) % carouselElementData.length), 5000);
		return () => clearInterval(changeCarousel);
	}, []);

	useEffect(() => {
		transRef.start();
	}, [index]);
	return (
		<div style={{ height: "500px", display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", position: "relative" }}>
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
