import { create } from 'create-svelte';

export async function createSK({name}: {name: string}) {
  await create(name, {
    name: name,
    template: 'skeleton', // or 'skeleton' or 'skeletonlib'
    types: 'typescript', // or 'typescript' or null;
    prettier: true,
    eslint: true,
    playwright: false,
    vitest: false,
    svelte5: true,
  });
}