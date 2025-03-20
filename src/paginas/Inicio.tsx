import CardDestaque from "../componentes/CardDestaque";
import Card from "../componentes/Card";

import documentoService from "../services/documentoService";
import browserService from "../services/browserService";

const Inicio = () => {
    const ehMobile = browserService.navegadorEhMobile();
    const documentosOrdenados = documentoService.ordenarPorDestaque();
    
    return <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentosOrdenados.map((documento, index) => {
                if (ehMobile)
                    return <Card propriedade={documento} />;

                let mostrarHr = index > 0 && documento.tipo !== documentosOrdenados[index - 1].tipo;
                const card = documento.destaque ? <CardDestaque propriedade={documento} /> : <Card propriedade={documento} />;

                if (mostrarHr) {
                    return <>
                        <hr className="col-span-3 border-t border-gray-700" />
                        {card}
                    </>;
                }
                return card;
            })}
        </div>
    </>;
};

export default Inicio;