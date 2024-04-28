import React, { useState } from 'react';
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

  const handleLogin = async (e) => { 
    e.preventDefault();
    let endpoint = `http://webservices.mx/escolares/test/alumnos/obtener?alumno_id=${alumno_id}`;

    let endpoint2 = `http://webservices.mx/escolares/test/alumnos/eliminar?alumno_id=${alumno_id}`;

    if (alumno_id==='') setShow(true)
    try {

        const obtenido = await fetch(endpoint, {
            method: 'GET'
        });

        const response = await fetch(endpoint2, {
          method: 'GET'
         });

        setClave("");
        const json = await obtenido.json();
        const metaCode = json.meta.code;

        if (metaCode===100) {
          const notify = () => toast("Usuario no Encontrado");
          notify()
        } 
        else if (metaCode===400) {
          const notify = () => toast("No Encontrado, no envies el campo vacio");
          notify()
        } 
        else if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
          const notify = () => toast("Usuario Eliminado Correctamente");
          notify()
        } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
        }
    } catch (error) {
        console.error(error);
    }
};

  return (
    <>
    <Form onSubmit={handleLogin}>
      <Heading as="h1">Eliminar Alumno</Heading>
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
     </>
  );
};

export default ObtenerForm;
