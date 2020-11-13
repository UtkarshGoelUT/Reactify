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
				<Link to="/">
					
						Reactify
				
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav >
						<Link to="/">
							
								Home
							
						</Link>
	
					
						
							<Link to="/about" class="d-flex justify-contents-end">
								
									About
							
							</Link>
							{name === "" ? (
								<Link to="/login">
									
										Login/Signup
								
								</Link>
							) : (
									
										{name}
									
								)}
						
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
