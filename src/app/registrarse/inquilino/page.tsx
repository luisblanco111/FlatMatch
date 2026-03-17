import { UserRound } from "lucide-react";
import RegisterFormLayout from "@/components/register/RegisterFormLayout";
import RegisterInput from "@/components/register/RegisterInput";

export default function RegisterTenantPage() {
  return (
    <RegisterFormLayout
      backHref="/registrarse"
      badge="Registro de inquilino"
      title="Crea tu cuenta como inquilino"
      description="Completa tus datos para empezar a buscar habitación, compartir piso y recibir recomendaciones compatibles."
      buttonText="Crear cuenta de inquilino"
      icon={UserRound}
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
      <RegisterInput
        label="Ciudad de interés"
        placeholder="Ej. Madrid"
      />
    </RegisterFormLayout>
  );
}