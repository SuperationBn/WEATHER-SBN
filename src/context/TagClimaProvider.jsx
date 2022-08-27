import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ClimaContext = createContext();

const TagClimaProvider = ({ children }) => {
	const [busqueda, setBusqueda] = useState({
		country: "",
	});

	const [resultados, setResultados] = useState({});

	const [calgando, setCargando] = useState(null);

	const [noResultados, setNoResultados] = useState(null);

	useEffect(() => {
		async function callDefault() {
			try {
				setCargando(true);

				const apiKeyNow = await import.meta.env.VITE_API_KEY;

				const res = await fetch(
					`http://api.weatherapi.com/v1/current.json?key=${apiKeyNow}&q=London&aqi=no`
				);
				const data = await res.json();
				setResultados(data);
				setCargando(false);
			} catch (error) {
				console.log(error);
			}
		}

		callDefault();
	}, []);

	// -----------------------------
	// -----------------------------

	const datosObtenidosDeBusqueda = e => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	const consultarClima = async datos => {
		try {
			setCargando(true);
			setNoResultados(false);
			const apiKey = import.meta.env.VITE_API_KEY;
			const { country } = datos;

			const res = await axios(
				`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`
			);
			setResultados(res.data);
		} catch (error) {
			console.error(error);
			setNoResultados(true);
		} finally {
			setCargando(false);
		}
	};

	return (
		<ClimaContext.Provider
			value={{
				resultados,
				busqueda,
				calgando,
				noResultados,
				setBusqueda,
				datosObtenidosDeBusqueda,
				consultarClima,
			}}
		>
			{children}
		</ClimaContext.Provider>
	);
};

export { ClimaContext, TagClimaProvider };
