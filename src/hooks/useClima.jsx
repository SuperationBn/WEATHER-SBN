import React, { useContext } from "react";
import { ClimaContext } from "../context/TagClimaProvider";

const useClima = () => {
	return useContext(ClimaContext);
};

export default useClima;
