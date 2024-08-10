import React from 'react'
import { Card } from 'react-bootstrap'
import '../pages/styles/SaibaMais.css'

export const SaibaMais = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <Card className="cd-saiba-mais">
            <Card.Header as="h3" className="cd-header"> SAIBA MAIS </Card.Header>
            <Card.Body>
                <Card.Title className="cd-title">Movimente-se</Card.Title>
                <Card.Text className="cd-text">
                    A prática regular de exercícios é fundamental para manter a saúde e o bem-estar. Na CodeFitness, acreditamos que a atividade física deve ser uma parte integrante do seu estilo de vida. Oferecemos uma ampla gama de treinos e atividades para atender a todos os níveis de habilidade e objetivos. 
                    <br /><br />
                    Nosso objetivo é proporcionar um ambiente de apoio e motivação para que você possa alcançar suas metas de fitness de maneira eficaz e prazerosa. Desde aulas de musculação e cardio até programas personalizados de treinamento, estamos aqui para ajudar você a se manter ativo e saudável. Venha e descubra como podemos ajudar a transformar sua rotina de exercícios!
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}
