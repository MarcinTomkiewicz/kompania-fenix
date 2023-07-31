export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__disclaimer">
				<div>© 2023 by Kompania Fenix Opole</div>
				<div>
					Informujemy, że podczas wydarzeń z udziałem Kompanii Fenix będą wykonywane, a następnie upubliczniane i przetwarzane zdjęcia lub filmy, na
					których może zostać uchwycony wizerunek osób obecnych. Biorąc udział w spotkaniu czy wydarzeniu organizowanym przez Kompanię Fenix
					uczestnicy oraz obserwatorzy wyrażają zgodę na upublicznianie i przetwarzanie ich wizerunków, a także ewentualnie innych danych osobowych.
					Jednocześnie zapewniamy, że dokładamy wszelkich starań, aby zadbać o bezpieczeństwo danych. Fotografie filmy będą szyfrowane i filtrowane
					tak, aby nie trafiły w niepowołane ręce.
				</div>
			</div>
			<div className="footer__disclaimer">
				<div className="contact__data">
					<span className="bi bi-phone icons">&nbsp;+48 792 314 240</span>
					<span className="bi bi-send icons">&nbsp;kompania.fenix@gmail.com</span>
				</div>
				<div className="icons__set">
					<span className="bi bi-facebook icons"></span>
					<span className="bi bi-instagram icons"></span>
					<span className="bi bi-youtube icons"></span>
					<span className="bi bi-tiktok icons"></span>
					{/* <span className="bi bi-twitter icons"></span>
					<span className="bi bi-whatsapp icons"></span>
					<span className="bi bi-discord icons"></span> */}
				</div>
			</div>
		</div>
	);
};
