import ape01 from '../../images/ape-01.png';
import ape02 from '../../images/ape-02.jpg';
import ape03 from '../../images/ape-03.jpg';
import './style.css';
import { MasterLayout } from '../../template/MaterLayout';
import {Helmet} from "react-helmet";
import { useEffect, useState } from 'react';
import { ApartmentCards } from '../../template/ApartmentCards';

const Home = () => {
    const[apartamentos, setApartamentos] = useState([]);

    useEffect(() => {

        fetch('https://run.mocky.io/v3/e074c82d-eeb4-4959-86d7-03fba69a0b82')
   
        .then ((response) => response.json())
        .then((responseJson) => setApartamentos([...responseJson]));
   },  []);

    return (
        <>
            <Helmet>
                <title>Moderno Imóveis | Home</title>
            </Helmet>
            <MasterLayout>
                <main className="container">
                    <section className="container grid-principal">
                        <figure>
                            <img src={ape01} alt="Foto família feliz" />
                            <figcaption>
                                Conheça a Modero Imóveis <br />
                                <a href="sobre.html">
                                    Saiba mais <i className="fas fa-long-arrow-alt-right"></i>
                                </a>
                            </figcaption>
                        </figure>

                        <img src={ape02} alt="Foto do pátio da Concessionária 2" />

                        <p className="texto-1">
                            Condições especiais de Financiamento
                        </p>

                        <p className="texto-2">
                            Trabalhamos com uma gama de imóveis
                        </p>

                        <img src={ape03} alt="Foto do pátio da Concessionária 3" />
                    </section>

                    <section className="container lista-apartamentos">
                        <h2>Apartamentos</h2>
                        <ul className="flex">
                            {apartamentos.slice(0,4).map((apartamento, index) =>(
                            <ApartmentCards 
                                    key={index}
                                    image={apartamento.image} 
                                    name={apartamento.name}
                                    address={apartamento.address}
                                    value={apartamento.value.toLocaleString('pt-BR', {
                                        style : 'currency',
                                        currency : 'BRL',
                                    })}
                                />
                            ))}
                        </ul>
                    </section>
                </main>
            </MasterLayout>
        </>
    );
}
export {Home};