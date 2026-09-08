import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const { data: item } = await supabase.from('items').select('*').eq('slug', slug).single();

  if (!item) return <div className="p-10">Categoría o ítem no encontrado</div>;

  return (
    <main className="max-w-2xl mx-auto p-8">
      <Link href="/" className="text-blue-500 underline mb-4 inline-block">&larr; Volver</Link>
      <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Vista por Slug: {item.slug}</span>
      <p className="mt-4 text-gray-700">{item.description}</p>
    </main>
  );
}