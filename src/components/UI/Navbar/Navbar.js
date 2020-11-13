import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navbar.module.css";
import { userContext } from "../../../context/userContext";

const NavbarComponent = () => {
	const { name } = useContext(userContext);

	return (
		<div>
			<Navbar
				fixed="top"
				className={classes.Navbar}
				collapseOnSelect
				variant="dark"
				expand="sm"
			>
				<Navbar.Brand href="/">
					Reactify
				</Navbar.Brand>
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
							<Nav.Link style={{ marginTop: "0.9px", cursor: "default" }}>
								{name}
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;