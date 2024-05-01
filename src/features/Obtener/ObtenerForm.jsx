import React, { useState,useEffect } from 'react';
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";

import Toast from 'react-bootstrap/Toast';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ObtenerForm = () => {
  const [alumno_id, setClave] = useState('');
  const [show, setShow] = useState(false);
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
  }, [alumnos]);


  const handleLogin = async (e) => { 
    e.preventDefault();
    let endpoint = `https://webservices.mx/escolares/test/alumnos/obtener?alumno_id=${alumno_id}`;

    if (alumno_id==='') setShow(true)
    try {
        const response = await fetch(endpoint, {
            method: 'GET'
        });

        setClave("");

        const json = await response.json();
        const metaCode = json.meta.code;

        const data = json.response;
        setAlumnos(data);
console.log(data)
        if (metaCode===100) {
          const notify = () => toast("Usuario no Encontrado");
          notify()
        } 
        if (metaCode===400) {
          const notify = () => toast("No Encontrado, no envies el campo vacio");
          notify()
        } 
        else if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
          const notify = () => toast("Usuario Encontrado");
          notify()
        } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
        }
    } catch (error) {
        console.error(error);
    }
};

const listItems = (
  <>
    <Heading as="h3">Informacion de {alumnos.nombre}</Heading>
    <p>Nombre: {alumnos.nombre}</p>
    <p>Apellido Paterno: {alumnos.paterno}</p>
    <p>Apellido Materno: {alumnos.materno}  </p>
    <FormRowVertical/>
  </>
);

  return (
    <>
    <Form onSubmit={handleLogin}>
      <Heading as="h1">Obtener Alumno</Heading>
        <FormRowVertical label="Clave">
          <Input 
            value={alumno_id}
            onChange={(e) => setClave(e.target.value)}
            placeholder="Clave"
            required={true}
          />
        </FormRowVertical>

        <FormRowVertical>
            <Button onClick={handleLogin}>Buscar</Button>
        </FormRowVertical>

        <Toast onClose={() => setShow(false)} show={show} delay={7000} autohide>
          <Toast.Body   style={{ backgroundColor: 'red' }}>Favor de llenar todos los campos</Toast.Body>
        </Toast>

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


    {(alumnos.length === 0)? (
      <>
      </>
    ) : (
      <>
          <Form>
         <Heading as="h1">Alumno Encontrado</Heading>
         <FormRowVertical>
          <ul>{listItems}</ul>
        </FormRowVertical>
       </Form>
      </>
    )}
     </>
  );
};

export default ObtenerForm;
