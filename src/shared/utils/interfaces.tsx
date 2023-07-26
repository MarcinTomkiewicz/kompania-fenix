import { AnimatedProps, SpringValue } from "@react-spring/web";
import React, {CSSProperties} from "react";

export interface LinksInterface {
	name: string;
	link: string;
}

export interface NewsInterface {
	id: number;
	photo: string;
	title: string;
	shortDescription: string;
	fullDescription: string;
	date: Date;
	author: string;
}

export interface NewsPropsInterface {}

export interface CarouselElementInterface {
	imgSource: string;
	header: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}

export interface CarouselElementPropsInterface extends CarouselElementInterface {
	style: any;
}