import React, { useState } from 'react';
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistroForm = () => {
  const [clave, setClave] = useState('');
  const [matricula, setMatricula] = useState('');
  const [paterno, setPaterno] = useState('');
  const [materno, setMaterno] = useState('');
  const [nombre, setNombre] = useState('');

  const handleLogin = async (e) => { 
    e.preventDefault();
    let endpoint = 'http://webservices.mx/escolares/test/alumnos/agregar?clave=' + clave + '&matricula=' + matricula + '&paterno=' + paterno;

    if (materno) endpoint += '&materno=' + materno;
    
    endpoint += '&nombre=' + nombre;
        //http://webservices.mx/escolares/test/alumnos/agregar?clave=XXXX000000XXXX00&matricula=TEST02920&paterno=GONZALEZ&materno=PEREZ&nombre=JOSE
    try {
        const response = await fetch(endpoint, {
            method: 'GET'
        });

        setClave("");
        setMatricula("");
        setPaterno("");
        setMaterno("");
        setNombre("");
        
        const json = await response.json();
        const metaCode = json.meta.code;

        if (metaCode===100) {
          const notify = () => toast("Error ");
          notify()
        } 
        if (metaCode===400) {
          const notify = () => toast("Error, no envies el campo vacio");
          notify()
        } 
        else if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
          const notify = () => toast("Registro Exitoso");
          notify()
        }else {
            const errorMessage = await response.text();
            console.error(errorMessage);
        }
    } catch (error) {
        console.error(error);
    }
};

  return (
    <Form onSubmit={handleLogin}>
      <Heading as="h1">Registro Alumno</Heading>
        <FormRowVertical label="Clave">
          <Input 
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            placeholder="Clave"
            required={true}
          />
        </FormRowVertical>

        <FormRowVertical label="Matricula">
          <Input  
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            placeholder="Matricula"
            required={true}
          />
        </FormRowVertical>
        
        <FormRowVertical label="APellido Paterno">
          <Input 
            value={paterno}
            onChange={(e) => setPaterno(e.target.value)}
            placeholder="APellido Paterno"
            required={true}
          />
        </FormRowVertical>

        <FormRowVertical label="APellido Materno">
          <Input 
            value={materno}
            onChange={(e) => setMaterno(e.target.value)}
            placeholder="APellido Materno"
          />
        </FormRowVertical>

        <FormRowVertical label="Nombre">
          <Input     
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            required={true}
          />
        </FormRowVertical>

        <FormRowVertical>
            <Button onClick={handleLogin}>Registro</Button>
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

export default RegistroForm;
