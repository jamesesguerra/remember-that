import { LoginForm } from "@/components/ui/features/auth/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <Image
            src={"https://assets.aceternity.com/logo.png"}
            alt="Logo"
            width={30}
            height={30}
          />
          RememberThat
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
