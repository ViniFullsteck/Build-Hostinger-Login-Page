"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Back from "@/public/background.webp";
import Logo from "@/public/logo.svg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentativa de login com:", formData);
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Lado esquerdo - Ilustração */}
        <div className="hidden lg:block">
          <Image
            src={Back}
            alt="Ilustração decorativa"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lado direito - Formulário de Login */}
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo Hostinger"
              width={32}
              height={32}
              className="w-40"
            />
          </div>

          {/* Texto de boas-vindas */}
          <div className="space-y-2">
            <h1 className="text-xl">Olá, 👋</h1>
            <h2 className="text-2xl font-semibold">
              Bem-vindo ao Hostinger Webmail
            </h2>
          </div>

          {/* Formulário de Login */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Nome de usuário"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="h-14"
              />
            </div>

            <div className="space-y-2 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="h-14 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#6F4EF6] hover:bg-[#5B3ED9] text-white font-medium"
            >
              Entrar
            </Button>

            <div className="text-center">
              <a href="#" className="text-[#6F4EF6] text-sm hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          </form>

          {/* CTA para planos de email */}
          <div className="space-y-4 pt-8">
            <h3 className="text-xl font-semibold">
              Não tem uma conta de email?
            </h3>
            <p className="text-gray-600 text-sm">
              Descubra o plano de email perfeito para suas necessidades e eleve
              sua comunicação.
            </p>
            <Button
              variant="outline"
              className="text-[#6F4EF6] border-[#6F4EF6] hover:bg-[#6F4EF6] hover:text-white"
            >
              Obter plano de email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
