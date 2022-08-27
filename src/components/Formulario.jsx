import React from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
	const { busqueda, setBusqueda, datosObtenidosDeBusqueda, consultarClima } =
		useClima();
	const { country } = busqueda;

	const envioDeDatosCorectamente = e => {
		e.preventDefault();
		setBusqueda({
			country: "",
		});

		if (busqueda) {
			consultarClima(busqueda);
		}
	};

	return (
		<form
			onSubmit={envioDeDatosCorectamente}
			className="w-[100%] flex justify-center md:justify-end mb-16 md:mb-4"
		>
			<div
				id="boxContainerForm"
				className="w-[94%] bg-orange-400/50 p-1 flex rounded-full"
			>
				<input
					type="search"
					name="country"
					id="buscador"
					value={country}
					onChange={datosObtenidosDeBusqueda}
					className="bg-black/40 placeholder:italic placeholder:text-[1.7rem] placeholder:text-slate-50/60 text-slate-50/80 tracking-widest font-semibold grow text-4xl md:text-2xl py-4 px-4 md:py-1 rounded-tl-full rounded-bl-full shadow-lg"
					placeholder="Enter a country..."
				/>
				<button
					type="submit"
					className="-tracking-tighter py-2 px-6 bg-orange-400/50 text-slate-100 font-bold text-2xl rounded-tr-full rounded-br-full"
				>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</form>
	);
};

export default Formulario;
