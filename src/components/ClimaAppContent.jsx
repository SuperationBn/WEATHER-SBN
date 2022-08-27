import React from "react";
import Resultados from "./Resultados";
import useClima from "../hooks/useClima";
import Spiner from "./Spiner";

const ClimaAppContent = () => {
	const { resultados, calgando, noResultados } = useClima();
	// const { resultados, calgando } = useClima();

	return (
		<section className="w-[100%] min-h-[100%] pt-4 pb-20">
			{/* {calgando ? (
				<Spiner />
			) : resultados?.location ? (
				<Resultados />
			) : noResultados ? (
				<p>{noResultados}</p>
			) : (
				<>
					<div>
						<h2>Algo anda mal</h2>
					</div>
				</>
			)} */}
			{calgando ? (
				<Spiner />
			) : resultados?.location ? (
				<Resultados />
			) : (
				noResultados && <p>{noResultados}</p>
			)}
			{/* {calgando ? <Spiner /> : resultados?.location && <Resultados />} */}
		</section>
	);
};

export default ClimaAppContent;
