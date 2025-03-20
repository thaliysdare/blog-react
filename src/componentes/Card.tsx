import { Documento } from "../interfaces/documento";
import Etiqueta from "../componentes/Etiqueta";
import { useNavigate } from "react-router-dom";

const Card = ({ propriedade, className }: { propriedade: Documento, className?: string }) => {
    const navigate = useNavigate();

    const handleClick = () =>
        navigate(`/documentos/${propriedade.id}`);

    return <>
        <div className={`cursor-pointer text-white flex flex-col ${className}`} onClick={handleClick}>
            <img src={propriedade.imagemSrc} alt="Imagem 1" className="w-full h-[200px] object-cover mb-3 rounded-sm " />
            <Etiqueta texto={propriedade.etiqueta} />
            <h2 className="text-lg font-bold mb-3">{propriedade.titulo}</h2>
            <p className="mb-3 text-sm">{propriedade.subtitulo}</p>
            <div className="flex h-full items-end">
                <img className="w-8 h-8 rounded-full" src={propriedade.avatar} alt="Avatar" />
                <div className="ml-2 uppercase text-xs">
                    <p className="font-semibold">{propriedade.autor}</p>
                    <p className="text-gray-400">{propriedade.data} - {propriedade.tempoLeitura} MINUTOS DE LEITURA</p>
                </div>
            </div>
        </div>
    </>
};

export default Card;