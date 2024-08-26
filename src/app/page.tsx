'use client'
import { useEffect, useState } from "react";
import Prova from "./ui/form/form";
import { RespostaI } from "./ui/form/respostas";
import { Modal } from "react-bootstrap";
import { questoes } from "./ui/form/questoes";

export default function Home() {
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState<RespostaI[]>();
  const [acerto, setAcerto] = useState(0);
  const [nota, setNota] = useState(0);

  useEffect(() => {
    if (submit && data) {
      let correctAnswers = 0;
      let datalen = data.length

      data.forEach((e) => {
        const questao = questoes.find((f) => f.id == e.questaoID);
        if (questao && e.resposta.toLowerCase().includes(questao.gabarito.toLowerCase())) {
          correctAnswers += 1;
        }
      });

      setAcerto(correctAnswers);
      setNota(correctAnswers * 100 / datalen);
    }
  }, [submit, data]);

  return (
    <div>
      <Modal show={submit} animation={true} onHide={() => setSubmit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex justify-between">
            <span>Resultado: {acerto}/{data?.length}</span>
            <span className={nota > 60 ? "text-green-900" : "text-red-600"}>{nota.toLocaleString('pt-br', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2
            })} %</span>
          </div>
          <ul>
            {data?.map((e) => {
              const questao = questoes.filter((f) => f.id == e.questaoID)[0]
              const ok = e.resposta.toLowerCase().includes(questao.gabarito.toLowerCase())

              return (
                <li className="list-disc"><span  className="font-bold me-2">Questão {e.questaoID}:</span> {ok ? "Acertou" : "Errou"}</li>
              );
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      <div className="text-start mx-auto p-12">
        <Prova
          setData={setData}
          setSubmit={setSubmit}
        />
      </div>
    </div>);
}
