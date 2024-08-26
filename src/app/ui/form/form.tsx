import { Dispatch, SetStateAction, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { questoes } from "./questoes"
import { RespostaI, Respostas } from "./respostas";


interface ProvaI {
    setData: Dispatch<SetStateAction<RespostaI[] | undefined>>
    setSubmit: Dispatch<SetStateAction<boolean>>
}

export default function Prova(props: ProvaI) {
    return (
        <Form
            key="prova"
            onSubmitCapture={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget);
                const dados = Object.fromEntries(formData.entries());
                props.setSubmit(true);
                const dataArray: RespostaI[] = (Object.entries(dados).map((key) =>
                (
                    {
                        questaoID: parseInt(key[0].match(/\d+/)?.[0] || "0", 10),
                        resposta: key[1].toString()
                    }
                )
                ))
                props.setData(dataArray)
                console.log(dataArray)
            }}>
            {questoes.map((item, index) => (
                <Form.Group className="mb-5" key={item.id}> {/* Usando item.id como key */}
                    <Form.Label className="text-lg font-bold">Questão {index + 1}</Form.Label>
                    <div>
                        <span>{item.questao}</span>
                        <Respostas item={item} qi={index + 1} />
                    </div>
                </Form.Group>
            ))}
            <div className="text-center">
                <Button type="submit" className="bg-cyan-950 text-white p-2 rounded-full text-center">Enviar Resposta</Button>
            </div>
        </Form>
    )
}
