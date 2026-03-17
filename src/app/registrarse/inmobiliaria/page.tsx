import { Building2 } from "lucide-react";
import RegisterFormLayout from "@/components/register/RegisterFormLayout";
import RegisterInput from "@/components/register/RegisterInput";
import RegisterSelect from "@/components/register/RegisterSelect";

export default function RegisterAgencyPage() {
  return (
    <RegisterFormLayout
      backHref="/registrarse"
      badge="Registro de inmobiliaria"
      title="Crea tu cuenta como inmobiliaria"
      description="Gestiona múltiples anuncios, centraliza tu cartera y conecta con inquilinos potenciales."
      buttonText="Crear cuenta de inmobiliaria"
      icon={Building2}
    >
      <RegisterInput
        label="Nombre de la agencia"
        placeholder="Nombre de la inmobiliaria"
      />
      <RegisterInput
        label="Correo electrónico"
        type="email"
        placeholder="contacto@agencia.com"
      />
      <RegisterInput
        label="Contraseña"
        type="password"
        placeholder="••••••••"
      />
      <RegisterSelect
        label="Número de propiedades"
        options={[
          "Selecciona una opción",
          "1 - 10",
          "11 - 50",
          "51 - 100",
          "Más de 100",
        ]}
      />
    </RegisterFormLayout>
  );
}