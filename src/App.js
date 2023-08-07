import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    email: "",
    lastname: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset();
  };

  console.log(formulario, usuarios);
  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label="Nombre"
                name="name"
                placeholder="Nombre"
                value={formulario.name}
                onChange={handleChange}
              />
              <Input
                label="Apellido"
                name="lastname"
                placeholder="Apellido"
                value={formulario.lastname}
                onChange={handleChange}
              />
              <Input
                label="Correo"
                name="email"
                placeholder="Correo"
                value={formulario.email}
                onChange={handleChange}
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((x) => (
              <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
