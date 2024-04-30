import React, { useState, useEffect } from 'react';
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListarComponent = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://webservices.mx/escolares/test/alumnos/listar');
        const data = await response.json();
        const metaCode = data.response;

        setAlumnos(metaCode);

        console.log(metaCode);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const listItems = alumnos.map((item) => (
    <li key={item.id}>
       <p></p>   <Heading as="h3">Informacion de {item.nombre}</Heading>
      <p>Nombre: {item.nombre}</p>
      <p>Apellido Paterno: {item.paterno}</p>
      <p>Apellido Materno: {item.materno}  </p>
      <FormRowVertical/>
    </li>
  ));
  
  return (
    <Form>
    <Heading as="h1">Listado de Alumnos</Heading>
      {(loading)? <Spinner /> :null}

      <FormRowVertical>
        <ul>{listItems}</ul>
      </FormRowVertical>
      
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </Form>
  );
};

export default ListarComponent;
