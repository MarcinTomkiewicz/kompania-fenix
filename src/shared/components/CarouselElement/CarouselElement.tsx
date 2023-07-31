import { animated } from "@react-spring/web";
import { Button } from "react-bootstrap";
import { CarouselElementPropsInterface } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import React from "react";
import Style from "style-it";
import "./carouselElement.css";

export const CarouselElement = ({ imgSource, header, description, buttonText, buttonLink, style }: CarouselElementPropsInterface): React.ReactElement => {
	// console.log((1660 - window.innerWidth).toString());
	return (
		<>
			{/* <Style>
				{`.animated__wrapper::before {
					content: "";
					position: absolute;
					top: 0; 
					left: 0;
					width: 100%;
					height: 100%;
					// background-image: url(${process.env.PUBLIC_URL + imgSource});
					filter: grayscale(100%);
					background-repeat: no-repeat;
					background-size: cover;
				}
			}`}
			</Style> */}
			<animated.div
				className="animated__wrapper"
				style={{
					...style,
					backgroundImage: `url(${process.env.PUBLIC_URL + imgSource})`
				}}
			>
				<div className="element__wrapper">
					<div className="header">{header}</div>
					<div className="description">{description}</div>
					<Link to={buttonLink}>
						<Button>{buttonText}</Button>
					</Link>
				</div>
			</animated.div>
		</>
	);
};
