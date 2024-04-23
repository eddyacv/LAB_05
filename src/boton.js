import Button from 'react-bootstrap/Button';

function Boton() {
  return (
    <div className="d-grid gap-2">
      <Button variant="secondary" size="lg">
        Añadir
      </Button>
      <Button variant="secondary" size="lg">
        Eliminar
      </Button>
      <Button variant="secondary" size="lg">
        Modificar
      </Button>
    </div>
  );
}

export default Boton;