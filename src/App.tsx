import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { TopMenu } from "./components/TopMenu/TopMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Footer } from "./components/Footer/Footer";

function App() {
	return (
		<>
			<div className="wrapper">
				<TopMenu />
				<div style={{ width: "90%", minHeight: "75vh" }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="gallery" element={<Home />} />
						<Route path="events" element={<Home />} />
						<Route path="contact" element={<Home />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
