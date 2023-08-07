import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";

function App() {
  const [formulario, handleChange] = useFormulario({ name: "" });

  console.log(formulario);
  return (
    <form>
      <Input
        label="Nombre"
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
