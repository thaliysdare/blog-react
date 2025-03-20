import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import documentosService from '../services/documentoService';
import Etiqueta from '../componentes/Etiqueta';

const Documentos = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();
    if (id === undefined)
        navigate('/documentos');

    let documento = documentosService.filtrarPorId(parseInt(id as string));
    if (documento === undefined) {
        navigate('/documentos');
        return;
    }

    useEffect(() => {
        documentosService.recuperarHtml(parseInt(id as string))
            .then(html => setHtmlContent(html))
            .catch(() => navigate('/documentos'));
    }, []);

    return <>
        <img src={documento.imagemSrc} alt="Imagem 1" className="w-full h-[400px] object-cover rounded-sm" />
        <div className='mt-4'>
            <Etiqueta texto={documento.etiqueta} />
            <h2 className="mt-4 text-3xl font-bold text-white">{documento.titulo}</h2>
            <p className="mt-4 text-lg text-white">{documento.subtitulo}</p>
            <div className="mt-4 flex items-end">
                <img
                    className="w-8 h-8 rounded-full"
                    src={documento.avatar}
                    alt="Avatar"
                />
                <div className="ml-2 uppercase text-xs text-white">
                    <p className="font-semibold">{documento.autor}</p>
                    <p className="text-gray-400">{documento.data} - {documento.tempoLeitura} MINUTOS DE LEITURA</p>
                </div>
            </div>
            <hr className="mt-4 border-t border-gray-700" />
        </div>
        <div className='documento-html' dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>;
};

export default Documentos;