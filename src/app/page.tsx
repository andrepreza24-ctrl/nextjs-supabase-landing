import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

export default async function HomePage() {
  const { data: items, error } = await supabase.from('items').select('*');

  // Si hay un error, lo imprimimos en la consola de Windows para diagnosticarlo
  if (error) {
    console.log('Error de Supabase:', error);
    return <div className="p-10 text-red-500">Error: {error.message}</div>;
  }

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Mi Catálogo de Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items?.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
            <div className="flex gap-2">
              <Link href={`/items/${item.id}`} className="text-xs bg-blue-600 text-white px-3 py-2 rounded">
                Ruta 1 (ID)
              </Link>
              <Link href={`/categorias/${item.slug}`} className="text-xs bg-gray-800 text-white px-3 py-2 rounded">
                Ruta 2 (Slug)
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}