import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formValues, setFormValues] = useState({ email: '', password: '', favClass: '1' });
  const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: true });

  const clickSubmit = (() => {
    if (!validationStates.emailState || !validationStates.passwordState) {
      
      return;
    }
    alert(JSON.stringify(formValues))
  })

  const handleEmailChange = (e) => {
    const valorEmail = e.target.value;
    // Puedes agregar tu lógica de validación de correo electrónico aquí
    // Por ejemplo, comprobar si es un formato de correo electrónico válido
    const esCorreoValido = /^\S+@\S+\.\S+$/.test(valorEmail);
    setValidationStates({ ...validationStates, emailState: esCorreoValido });
    //console.log(validationStates.emailState)
    setFormValues({ ...formValues, email: valorEmail });
  };

  const handlePasswordChange = (e) => {
    const valorContraseña = e.target.value;
    // Puedes agregar tu lógica de validación de contraseña aquí
    // Por ejemplo, comprobar si cumple con tus criterios (números, letras, longitud)
    const esContraseñaValida = /^(?=.*[A-Za-z\d*])[A-Za-z\d*]{9,}$/.test(valorContraseña);
    setValidationStates({ ...validationStates, passwordState: esContraseñaValida });
    //console.log(validationStates.passwordState);
    setFormValues({ ...formValues, password: valorContraseña });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };


  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Dirección de correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo electrónico" onChange={handleEmailChange} value={formValues.email} className={!validationStates.emailState? 'border border-danger': ''} />
          {!validationStates.emailState && <Form.Text className="text-muted">Tu email debe tener el formato establecido.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" onChange={handlePasswordChange} value={formValues.password}  className={!validationStates.passwordState? 'border border-danger': ''} />
          {!validationStates.passwordState && <Form.Text className="text-muted">Tu contraseña debe tener números y letras y debe tener al menos 9 caracteres de longitud.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Clase Favorita</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologías web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default App;