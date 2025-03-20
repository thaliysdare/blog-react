import documentoService from "../services/documentoService";
import { TipoDocumento } from '../interfaces/documento';

import Card from '../componentes/Card';
import browserService from '../services/browserService';
import { useLocation, useNavigate } from "react-router-dom";

const Documentos = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const categoria = browserService.recuperarParametro("categoria");
    const paramTipoDocumento = browserService.recuperarParametro("tipo");
    const tipoDocumento = paramTipoDocumento as unknown as TipoDocumento;

    const handleFiltrar = (event: React.MouseEvent<HTMLButtonElement>) => {
        const categoria = event.currentTarget.innerText.toLowerCase() === "todos" ? null : event.currentTarget.innerText.toLowerCase();
        const queryParams = new URLSearchParams();

        if (categoria)
            queryParams.set("categoria", categoria);

        if (paramTipoDocumento !== null)
            queryParams.set("tipo", paramTipoDocumento);

        navigate(`${location.pathname}?${queryParams.toString()}`);
    };

    return <>
        <h2 className="text-xs uppercase text-white mb-3">Filtros</h2>
        <div className="flex space-x-4 mb-8 text-neutral-400">
            {documentoService.agruparPorCategoria(categoria, tipoDocumento).map((etiqueta) => 
            <button className="bg-none border text-xs uppercase hover:text-white cursor-pointer p-2 rounded-4xl" onClick={handleFiltrar}>{etiqueta}</button>)}
        </div>
        <div className="grid grid-cols-3 gap-8">
            {documentoService.filtrarPorCategoriaETipo(categoria, tipoDocumento).map((documento) => <Card propriedade={documento} />)}
        </div>
    </>;
};

export default Documentos;