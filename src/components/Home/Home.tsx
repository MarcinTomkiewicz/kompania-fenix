import { Carousel } from "../../shared/components/Carousel/Carousel";

export const Home = () => {
	return (
		<>
			<div style={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between", gap: "30px" }}>
				<img src={process.env.PUBLIC_URL + "/kompania.jpg"} className="home__image" alt="Kompania Fenix" style={{height: "200px"}} />
				<Carousel />
			</div>
			{/* <img src={process.env.PUBLIC_URL + "images/have_fun.jpg"} className="home__image" alt="Kompania Fenix" />
				<img src={process.env.PUBLIC_URL + "images/plan.jpg"} className="home__image" alt="Kompania Fenix" />
				<img src={process.env.PUBLIC_URL + "images/join.jpg"} className="home__image" alt="Kompania Fenix" />
				<img src={process.env.PUBLIC_URL + "images/torches.jpg"} className="home__image" alt="Kompania Fenix" /> */}
		</>
	);
};
