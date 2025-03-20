import { EtiquetaProps } from "./interfaces/etiqueta";

const Etiqueta = ({texto, className} : EtiquetaProps) => 
    <span className={`bg-yellow-600 text-white uppercase text-xs font-semibold p-1 rounded self-start mb-3 ${className}`}>
        {texto}
    </span>;

export default Etiqueta;