import { NewsPropsInterface } from "../../utils/interfaces";

export const News = ({}: NewsPropsInterface) => {
	return (
		<div className="news__container">
			<div className="news__image">
				<img src="" alt=""></img>
			</div>
			<div className="news__header"></div>
			<div className="news__description--short"></div>
		</div>
	);
};
