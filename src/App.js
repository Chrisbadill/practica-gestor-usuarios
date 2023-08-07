import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const [formulario, handleChange] = useFormulario({ name: "", lastname: "" });

  console.log(formulario);
  return (
    <Card>
      <form>
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
      </form>
    </Card>
  );
}

export default App;
