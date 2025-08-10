import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesPage() {
  const data = await fetchNotes(1, 12, '');

  return <NotesClient initialData={data} />;
}
