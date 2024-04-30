import React, { useState } from 'react';
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistroForm = () => {
  const [id, setId] = useState('');
  const [clave, setClave] = useState('');
  const [matricula, setMatricula] = useState('');
  const [paterno, setPaterno] = useState('');
  const [materno, setMaterno] = useState('');
  const [nombre, setNombre] = useState('');

  const handleLogin = async (e) => { 
    e.preventDefault();
    let endpoint = 'http://webservices.mx/escolares/test/alumnos/agregar?alumno_idclave='+ id;

    if (clave) endpoint += '&clave=' + clave;
    if (matricula) endpoint += '&matricula=' + matricula;
    if (paterno) endpoint += '&paterno=' + paterno;
    if (materno) endpoint += '&materno=' + materno;
    if (nombre)     endpoint += '&nombre=' + nombre;


        //http://webservices.mx/escolares/test/alumnos/agregar?clave=XXXX000000XXXX00&matricula=TEST02920&paterno=GONZALEZ&materno=PEREZ&nombre=JOSE
    try {
        const response = await fetch(endpoint, {
            method: 'GET'
        });

        setId("");
        setClave("");
        setMatricula("");
        setPaterno("");
        setMaterno("");
        setNombre("");
        
        const json = await response.json();
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
          const notify = () => toast("Usuario Modificado Correctamente");
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
    <Form onSubmit={handleLogin}>
      <Heading as="h1">Modificar Alumno</Heading>

      <FormRowVertical label="ID del Alumno">
          <Input 
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID de Alumno"
            required={true}
          />
        </FormRowVertical>

        <FormRowVertical label="Clave">
          <Input 
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            placeholder="Clave"
          />
        </FormRowVertical>

        <FormRowVertical label="Matricula">
          <Input  
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            placeholder="Matricula"
          />
        </FormRowVertical>
        
        <FormRowVertical label="APellido Paterno">
          <Input 
            value={paterno}
            onChange={(e) => setPaterno(e.target.value)}
            placeholder="APellido Paterno"
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
           
          />
        </FormRowVertical>

        <FormRowVertical>
            <Button onClick={handleLogin}>Modificar</Button>
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
