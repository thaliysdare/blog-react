import { Documento, TipoDocumento } from "../interfaces/documento";
import documentos from "../assets/documentos-exemplos";

class DocumentoService {

  private documentos: Documento[];

  constructor(documentos: Documento[]) {
    this.documentos = documentos;
  }

  public filtrarPorId = (id: number) => this.documentos.find(x => x.id === id);

  public filtrarPorCategoriaETipo = (categoria: string | null, tipoDocumento: TipoDocumento | null) =>
    this.documentos.filter(x =>
      (categoria === null || x.etiqueta.toLowerCase() === categoria.toLowerCase())
      && (tipoDocumento === null || x.tipo == tipoDocumento));

  public agruparPorCategoria = (categoria: string | null, tipoDocumento: TipoDocumento | null) => {
    let agrupados: Record<string, number> = {};

    this.filtrarPorCategoriaETipo(categoria, tipoDocumento).forEach(documento => {
      agrupados[documento.etiqueta] = (agrupados[documento.etiqueta] || 0) + 1;
    });

    agrupados["Todos"] = this.documentos.length;

    return Object.keys(agrupados);
  };

  public ordenarPorDestaque = () => this.documentos.sort((a, b) => {
    if (a.tipo === b.tipo) {
      return (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0);
    }
    return a.tipo - b.tipo;
  });

  public recuperarHtml = (id: number) => 
    fetch('/documentos/documento-' + id + '.html')
    .then(response => response.text())
    .catch(() => '');
}

const documentosService = new DocumentoService(documentos);
export default documentosService;