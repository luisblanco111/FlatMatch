import { Home } from "lucide-react";
import RegisterFormLayout from "@/components/register/RegisterFormLayout";
import RegisterInput from "@/components/register/RegisterInput";
import RegisterSelect from "@/components/register/RegisterSelect";

export default function RegisterOwnerPage() {
  return (
    <RegisterFormLayout
      backHref="/registrarse"
      badge="Registro de particular"
      title="Crea tu cuenta como particular"
      description="Publica habitaciones o viviendas y encuentra inquilinos que encajen con tu anuncio."
      buttonText="Crear cuenta de particular"
      icon={Home}
    >
      <RegisterInput label="Nombre completo" placeholder="Tu nombre" />
      <RegisterInput
        label="Correo electrónico"
        type="email"
        placeholder="tuemail@ejemplo.com"
      />
      <RegisterInput
        label="Contraseña"
        type="password"
        placeholder="••••••••"
      />
      <RegisterSelect
        label="Tipo de inmueble"
        options={[
          "Selecciona una opción",
          "Habitación",
          "Piso completo",
          "Vivienda compartida",
        ]}
      />
    </RegisterFormLayout>
  );
}