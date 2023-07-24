import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { menuElements } from "../../utils/backend";

export const TopMenu = () => {
	let location = useLocation();

	console.log(location.pathname);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="top__menu">
				<div style={{ flexShrink: "1", height: "100%" }}>
					<img src={process.env.PUBLIC_URL + "/logo.png"} style={{ height: "100%", flexShrink: "2" }} alt="Kompania Fenix"></img>
				</div>
				<div className="menu__items">
					{menuElements?.map((menuElement) => {
						const menuElementLink = menuElement.link === "/" ? "/" : `/${menuElement.link}`;
						return (
							<div
								className={location.pathname === menuElementLink ? "menu__element--wrapper selected__element" : "menu__element--wrapper"}
								key={menuElement.name}
							>
								<div className="menu__element">
									<Link to={`${menuElement.link}`} style={{ all: "unset", cursor: "pointer" }}>
										{menuElement.name}
									</Link>
								</div>
							</div>
						);
					})}
				</div>
				<div className={!show ? "hamburger__menu" : "hamburger__menu open"} onClick={handleShow}>
					<div className="icon-E"></div>
					<div className="icon-X"></div>
				</div>
				<Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "black", color: "azure" }}>
					<Offcanvas.Header closeButton closeVariant="white">
						<Offcanvas.Title style={{ fontSize: "2rem" }}>Kompania Fenix</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						{menuElements.map((menuElement) => {
							return (
								<div className="d-flex flex-column justify-content-center align-items-start w-100 text-center">
									<div className="menu__element">{menuElement.name}</div>
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
