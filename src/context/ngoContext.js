import React, { useState, createContext } from "react";

export const ngoContext = createContext();

export const NgoProvider = (props) => {
	const [ngo, setNgo] = useState(
		 [
			{
				name: "NGO1",
				fund: 2000,
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
			},
			{
				name: "NGO2",
				fund: 8000,
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
			},
			{
				name: "NGO3",
				fund: 1000,
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
			},
		]
	);

	return (
		<ngoContext.Provider value={[ ngo, setNgo ]}>
			{props.children}
		</ngoContext.Provider>
	);
};
