import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardItem = () => {
    // Inicializa el estado dentro del componente
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    const resetear = () => {
        setContador(0);
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/007/335/846/non_2x/gear-icon-template-vector.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    {/* Usa la variable del estado 'contador' en lugar de 'initialValue' */}
                    <Card.Body>Cantidad = {contador}</Card.Body>
                    <Button variant="primary" onClick={incrementar}>+</Button>
                    <Button variant="secondary" onClick={decrementar}>-</Button>
                    <Button variant="danger" onClick={resetear}>reset</Button>
                </Card.Body>
            </Card>
        </>
    )
}
