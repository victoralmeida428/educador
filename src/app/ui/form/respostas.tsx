import { Form } from "react-bootstrap";
import { QuestaoI } from "./questoes";

export interface RespostaI {
    questaoID: number,
    resposta: string
}

export function Respostas(props:{item: QuestaoI, qi: number}) {
    switch (props.item.tipo) {
        case "ME":
            const letras = ["A", "B", "C", "D", "E"]
            return (
                <ul key={`ul-Q-${props.qi}-${props.item.id}`} id={`${props.item.id}-${props.qi}`}>
                    {props.item.opcoes?.map((opt, index) => (
                        <li key={`ul-Q-${props.qi}-${props.item.id}-li-${index}`}><Form.Check
                            key={`ul-Q-${props.qi}-${props.item.id}-form-${index}`}
                            type="radio"
                            id={`radio-${props.qi}-${props.item.id}-${index}`}
                            name={`Q-${props.qi}`}
                            value={opt}
                            label={`  ${letras[index]}) ${opt}`}
                        />
                        </li>
                    ))}
                </ul>
            )
        case "VF":
            return (<ul key={`ul-Q-${props.qi}-${props.item.id}`} >
                <li key={`ul-Q-li-${props.qi}-${props.item.id}-V`}>
                    <Form.Check
                        type="radio"
                        key={`ul-Q-Check-${props.qi}-${props.item.id}-V`}
                        name={`Q-${props.qi}-${props.item.id}`}
                        value="V"
                        label="  Verdadeiro"
                    /></li>
                <li key={`ul-Q-li-${props.qi}-${props.item.id}-F`}>
                    <Form.Check
                        type="radio"
                        key={`ul-Q-Check-${props.qi}-${props.item.id}-F`}
                        name={`Q-${props.qi}-${props.item.id}`}
                        value="F"
                        label="  Falso"
                    /></li>
            </ ul>)
        case "text":
            return (
                <Form.Group key={`form-group-Q-${props.qi}-${props.item.id}`}>
                    <Form.Label htmlFor={`textarea-Q-${props.qi}-${props.item.id}`}>Resposta:</Form.Label>
                    <Form.Control
                        as="textarea"
                        id={`textarea-Q-${props.qi}-${props.item.id}`}
                        name={`Q-${props.qi}-${props.item.id}`}
                        className="w-full"
                        rows={3}
                    />
                </Form.Group>
            );
        default:
            return null;
    }
}