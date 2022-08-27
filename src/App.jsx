import { TagClimaProvider } from "./context/TagClimaProvider";
import ClimaAppContent from "./components/ClimaAppContent";
import Formulario from "../src/components/Formulario";
import useClima from "./hooks/useClima";

function App() {
	return (
		<TagClimaProvider>
			<header className="md:flex md:justify-between md:items-center md:m-0 md:p-0">
				<h2 className="w-full uppercase text-[4rem] mb-20 mt-8 ml-5 font-bold text-slate-100">
					weather-
					<span className="text-orange-400">sbn</span>
				</h2>
				<Formulario />
			</header>
			<main>
				<ClimaAppContent />
			</main>
			<footer className="w-full text-center">
				<span className="text-[1.4rem] text-slate-50/30">
					Copyright © SuperationBn. All rights reserved.
				</span>
			</footer>
		</TagClimaProvider>
	);
}

export default App;
