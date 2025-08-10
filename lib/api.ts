import axios from 'axios';
import type { Note, NewNoteData } from '@/types/note';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

const instance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchNotes = async (
  page: number,
  perPage: number,
  search: string,
  tag: string | undefined,
): Promise<FetchNotesResponse> => {
  const params = {
    page,
    perPage,
    search,
    tag,
  };

  const res = await instance.get<FetchNotesResponse>('/notes', {
    params,
  });
  return res.data;
};

export const createNote = async (newNote: NewNoteData): Promise<Note> => {
  const res = await instance.post<Note>('/notes', newNote);
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await instance.delete<Note>(`/notes/${id}`);
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await instance.get<Note>(`/notes/${id}`);
  return res.data;
};
