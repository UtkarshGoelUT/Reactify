import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navbar.module.css";
import { userContext } from "../../../context/userContext";

const NavbarComponent = () => {
	const { name, setName, setUid, setAmount } = useContext(userContext);

	const startLogOut = () => {
		setName("");
		setUid("");
		setAmount("");
	};

	return (
		<div>
			<Navbar
				fixed="top"
				className={classes.Navbar}
				collapseOnSelect
				variant="dark"
				expand="sm"
			>
				<Link to="/">
					<Navbar.Brand href="/">Reactify</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Nav>
						<Link to="/about">
							<Nav.Link style={{ marginTop: "0.9px" }} eventKey={2} href="/">
								About
							</Nav.Link>
						</Link>
						{name === "" ? (
							<Link to="/login">
								<Nav.Link style={{ marginTop: "0.9px" }} href="/">
									Login/Signup
								</Nav.Link>
							</Link>
						) : (
							<Nav.Link
								style={{ marginTop: "0.9px", cursor: "default" }}
								onClick={startLogOut}
							>
								Logout
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
