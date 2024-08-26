export interface QuestaoI {
    id: number,
    questao: string,
    tipo: "ME" | "text" | "VF"
    gabarito: string,
    opcoes?: string[]
}

export const questoes: QuestaoI[] = [
    {   id: 1,
        questao: "Qual pH da água a temperatura ambiente?",
        tipo: "ME",
        gabarito: "7",
        opcoes: ["6", "7", "8", "9", "4"]
    },
    {
        id: 2,
        questao: "A água pura tem pH = 7 em todas as suas condições de temperatura e pressão",
        tipo: "VF",
        gabarito: "F",
    },
    {
        id: 3,
        questao: "Qual nome do processo em que a água passa do estado líquido para o sólido?",
        tipo: "text",
        gabarito: "Solidificação",
    }

]