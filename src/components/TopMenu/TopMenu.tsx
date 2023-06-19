import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export const TopMenu = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const menuElements: string[] = ["Home", "O Kompanii", "Galeria", "Zloty", "Kontakt"];

	return (
		<>
			<div className="top__menu">
				<img src={process.env.PUBLIC_URL + "/logo.png"} style={{ height: "100%" }}></img>
				<div className="menu__items">
					{menuElements.map((menuElement) => {
						return (
							<div className="menu__element--wrapper">
								<div className="menu__element">{menuElement}</div>
							</div>
						);
					})}
				</div>
				<div className={!show ? "hamburger__menu" : "hamburger__menu open"} onClick={handleShow}>
					<div className="icon-E"></div>
					<div className="icon-X"></div>
				</div>
				<Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "black", color: "azure" }} >
					<Offcanvas.Header closeButton closeVariant="white">
						<Offcanvas.Title style={{ fontSize: "2rem" }}>Kompania Fenix</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						{menuElements.map((menuElement) => {
							return (
								<div className="d-flex flex-column justify-content-start align-items-start w-100">
									<div className="menu__element">{menuElement}</div>
								</div>
							);
						})}
						{/* </div> */}
					</Offcanvas.Body>
				</Offcanvas>
			</div>
		</>
	);
};
