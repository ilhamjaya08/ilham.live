<script lang="ts">
    import ProjectCard from '../components/ProjectCard.svelte';
    import Fragment from '../components/Fragment.svelte';
  
    // Contoh data proyek
    const projects = [
      {
        name: 'Cek Username API',
        description: 'an API services for username validation of several digital services, like uid games, e-money, bank accounts, electricity customers, and others.',
        imageUrl: 'https://telegra.ph/file/334e591ddc365386cd60d.jpg',
        imageAlt: 'Image',
        tags: ['Flowbite', 'SvelteKit', 'TailwindCSS', 'Hono', 'Bun'],
        url: 'https://cek-username.vercel.app'
      },
      {
        name: 'Bun Discord',
        description: 'Fast & Lightweight Discord Bot written and run on Bun',
        imageUrl: 'https://telegra.ph/file/d4954dc4e3ed4376278a1.png',
        imageAlt: 'Bun Discord',
        tags: ['Discord.js', 'Bun', 'Bot'],
        url: 'https://github.com/ilhamjaya08/bun-discord'
      }
      // Tambahkan proyek lain sesuai kebutuhan
    ];
  </script>
  
  <article id="projects" class="bg-[#bbe4ff] py-8">
    <div class="px-4 mx-auto w-full md:max-w-3xl lg:max-w-6xl">
      <h1 class="font-suse font-extrabold text-3xl">
        <Fragment name="My Projects & Works" />
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {#each projects as project}
          <ProjectCard
            name={project.name}
            description={project.description}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            tags={project.tags}
            url={project.url}
          />
        {/each}
      </div>
    </div>
  </article>
  