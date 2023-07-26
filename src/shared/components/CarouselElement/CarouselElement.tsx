import { animated } from "@react-spring/web";
import { Button } from "react-bootstrap";
import { CarouselElementPropsInterface } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import React from "react";
import "./carouselElement.css";

export const CarouselElement = ({ imgSource, header, description, buttonText, buttonLink, style }: CarouselElementPropsInterface): React.ReactElement => {

    console.log((1660 - window.innerWidth).toString());
	return (
		<animated.div className="animated__wrapper"
			style={{
				...style,
				backgroundImage: `linear-gradient(black, black), url(${process.env.PUBLIC_URL + imgSource})`,
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
	);
};
