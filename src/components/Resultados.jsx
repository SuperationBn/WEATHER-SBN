import React from "react";
import useClima from "../hooks/useClima";

const Resultados = () => {
	const { resultados } = useClima();
	// console.log(resultados);

	const locationData = resultados.location;
	const currentData = resultados.current;
	const { country, localtime, name, region } = locationData;
	const {
		condition,
		wind_degree,
		wind_kph,
		wind_mph,
		vis_km,
		temp_c,
		temp_f,
		humidity,
	} = currentData;

	return (
		<article className="w-[100%] flex flex-col gap-5 md:p-5">
			<div className="max-w-[700px] w-[90%] mx-auto shadow-xl bg-slate-900/50 rounded-xl py-8 px-2 text-center flex flex-col gap-8">
				<div className="flex flex-col items-center justify-center">
					<span className="uppercase text-[2.2rem] text-slate-50 font-medium">
						{condition.text}
					</span>
					<img src={condition.icon} alt="icon time" className="-mb-10 p0" />
				</div>
				<h2 id="ciudad" className="text-[6.4rem] font-bold text-slate-50/90">
					{country}
				</h2>
				<h3 className="-tracking-tighter text-[2rem] font-bold text-slate-50/60">
					{name} <i className="fa-solid fa-map-location-dot"></i>
				</h3>
				<span className="-tracking-tighter text-[2.5rem] font-semibold text-slate-50/90">
					{region}
				</span>
				<p className="tracking-widest text-[1.6rem] font-bold text-slate-50/70">
					{localtime}
				</p>
			</div>
			<div
				id="vientos"
				className="flex max-w-[700px] w-[90%] mx-auto gap-1 justify-around mt-8 items-center"
			>
				<h4 className="h-fit font-bold flex flex-col items-center  bg-slate-50/10 py-2 px-8 rounded-2xl shadow-lg">
					<span className="text-[1.5rem] text-slate-50/50">wind kph</span>
					<span className="text-[2rem] md:text-[3.5rem] text-slate-50/80">
						{wind_kph}
					</span>
				</h4>
				<h4 className="font-bold flex flex-col items-center  bg-slate-900/40 py-4 px-8 rounded-2xl shadow-lg">
					<span className="text-[1.7rem] text-slate-50/60 ">
						wind degree <i className="fa-solid fa-wind"></i>
					</span>
					<span className="text-[3rem] md:text-[5rem] text-slate-50 ">
						{wind_degree}°
					</span>
				</h4>
				<h4 className="h-fit font-bold flex flex-col items-center  bg-slate-50/10 py-2 px-8 rounded-2xl shadow-lg">
					<span className="text-[1.5rem]  text-slate-50/50">wind mph</span>
					<span className="text-[2rem] md:text-[3.5rem]  text-slate-50/80">
						{wind_mph}
					</span>
				</h4>
			</div>
			<div className="md:flex gap-5">
				<div className="mt-10 flex max-w-[700px] w-[90%] mx-auto flex-col justify-center items-center bg-slate-900/40 rounded-lg py-4 shadow-lg">
					<h4 className="-tracking-tighter uppercase text-[2rem] font-bold text-slate-50/80">
						visivilit <i className="fa-solid fa-eye"></i>
					</h4>
					<h3 className="text-[7rem] font-bold text-slate-50">
						{vis_km} <span className="-ml-6 text-[2rem]">km</span>
					</h3>
				</div>
				<div className="mt-10 max-w-[700px] w-[90%] mx-auto bg-slate-900/40 rounded-lg py-4 shadow-lg">
					<h3 className="text-center -tracking-tighter uppercase text-[2rem] font-bold text-slate-50/80">
						temperature <i className="fa-solid fa-temperature-half"></i>
					</h3>
					<div className="flex justify-around items-center mt-8">
						<div className="flex">
							<h4 className="text-[5rem] text-slate-50/90 font-bold">
								{temp_c}
							</h4>
							<span className="text-slate-50/60 text-[1.5rem] mt-3 font-bold">
								°C
							</span>
						</div>
						<div className="w-[5px] h-[50px] bg-slate-50"></div>
						<div className="flex">
							<h4 className="text-[5rem] text-slate-50/90 font-bold">
								{temp_f}
							</h4>
							<span className="text-slate-50/60 text-[1.5rem] mt-3 font-bold">
								°F
							</span>
						</div>
					</div>
				</div>
				<div className="text-center mt-10 max-w-[700px] w-[90%] mx-auto bg-slate-900/40 rounded-lg py-4 shadow-lg">
					<h3 className="-tracking-tighter uppercase text-[2rem] font-bold text-slate-50/80">
						humidity <i className="fa-solid fa-cloud-showers-water"></i>
					</h3>
					<h3 className="text-[7rem] font-bold text-slate-50">
						{humidity} <span className="-ml-6 text-[2rem]">%</span>
					</h3>
				</div>
			</div>
		</article>
	);
};

export default Resultados;
