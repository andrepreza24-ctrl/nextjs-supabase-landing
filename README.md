# Mi Catálogo de Proyectos - Next.js & Supabase

Aplicación web desarrollada como actividad evaluada para demostrar el dominio del **App Router de Next.js 16+**, rutas dinámicas y gestión de datos con un servicio serverless en **Supabase**.

## 🚀 Tecnologías Utilizadas

- **Next.js 16+** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (PostgreSQL Serverless, RLS)
- **Vercel** (Despliegue)

## 🔗 Rutas Dinámicas Implementadas

1. **Por ID:** `/items/[id]` — Consulta un proyecto individual mediante su identificador UUID.
2. **Por Slug:** `/categorias/[slug]` — Consulta la información de un elemento mediante su parámetro de URL legible (slug).

## 🛠️ Instalación y Configuración Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
   cd mi-landing

   Instalar dependencias:
   npm install
   Configurar variables de entorno:
   NEXT_PUBLIC_SUPABASE_URL=tu_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
   Ejecutar el servidor de desarrollo:
   npm run dev 
   y abrimnos la url