export const Home = () => {
	return (
		<>
			<div style={{ display: "flex", height: "200px" }}>
				<img src={process.env.PUBLIC_URL + "/kompania.jpg"} className="home__image" alt="Kompania Fenix" />
			</div>
		</>
	);
};
