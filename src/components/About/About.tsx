export const About = () => {
	return (
		<>
			<img src={process.env.PUBLIC_URL + "/kompania.jpg"} style={{ width: "100%", maxHeight: "600px", borderRadius: "15px" }} alt="Kompania Fenix" />
			<div className="main__text my-3">
				Jesteśmy grupą przyjaciół, których łączy zamiłowanie do spotkań o charakterze militarnym. Nie wzięło się to znikąd. Część z nas ukończyła szkoły
				o profilu wojskowym i policyjnym, niektórzy postanowili kontynuować karierę w tym kierunku a część osób po prostu to lubi. Dlatego spotykamy się
				na różnego rodzaju zlotach militarnych i organizujemy spotkania sami. Kolekcjonujemy sprzęt militarny w którym lubimy się pokazać.
			</div>
			<div className="main__text" style={{ color: "#1a2d00", fontSize: "30px", fontWeight: "bold" }}>
				"Nie możemy Cię zmusić, żebyś coś zrobił, ale możemy sprawić, że będziesz żałował, że tego nie zrobiłeś z nami..."
			</div>
		</>
	);
};
