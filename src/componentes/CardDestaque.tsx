import { useNavigate } from "react-router-dom";
import { Documento } from "../interfaces/documento";
import Etiqueta from "./Etiqueta";

const CardDestaque = ({ propriedade, className }: { propriedade: Documento, className?: string }) => {
    const navigate = useNavigate();

    const handleClick = () =>
        navigate(`/documentos/${propriedade.id}`);
    
    return (
        <div className={`cursor-pointer col-span-3 ${className}`} onClick={handleClick}>
            <div className={`grid grid-cols-3 gap-8 h-[400px]`}>
                <div className="col-span-2">
                    <img src={propriedade.imagemSrc} alt="Imagem 1" className="w-full h-[400px] object-cover rounded-sm" />
                </div>

                <div className="col-span-1 h-full text-white flex flex-col">
                    <Etiqueta texto={propriedade.etiqueta} />
                    <h2 className="text-3xl font-bold">{propriedade.titulo}</h2>
                    <p className="mt-4 text-lg">{propriedade.subtitulo}</p>
                    <div className="flex h-full items-end">
                        <img
                            className="w-8 h-8 rounded-full"
                            src={propriedade.avatar}
                            alt="Avatar"
                        />
                        <div className="ml-2 uppercase text-xs">
                            <p className="font-semibold">{propriedade.autor}</p>
                            <p className="text-gray-400">{propriedade.data} - {propriedade.tempoLeitura} MINUTOS DE LEITURA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDestaque;
