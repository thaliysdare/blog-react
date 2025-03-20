export enum TipoDocumento {
    Artigo = 1,
    Tutorial = 2,
};

export interface Documento {
    imagemSrc: string;
    etiqueta: string;
    titulo: string;
    subtitulo: string;
    autor: string;
    data: string;
    tempoLeitura: string;
    avatar: string;
    destaque: boolean;
    tipo: TipoDocumento;
    id: number;
};