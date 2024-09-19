import { api } from '$lib/api';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import connectMongo from '$lib/utils/mongodb';

const dbConnect: Handle = async ({ event, resolve }) => {
  await connectMongo();
  return resolve(event);
};

const honoMiddleware: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith('/api')) {
    const res = await api.fetch(event.request, {
      event,
    });

    if (res) {
      return res;
    }
  }

  return resolve(event);
};

export const handle = sequence(dbConnect, honoMiddleware);