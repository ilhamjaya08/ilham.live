<script lang="ts">
    import ProjectCard from '../components/ProjectCard.svelte';
    import Fragment from '../components/Fragment.svelte';
  
    // Contoh data proyek
    const projects = [
      {
        name: 'Project One',
        description: 'This is the description for Project One.',
        imageUrl: 'https://via.placeholder.com/150',
        imageAlt: 'Project One Image',
        tags: ['React', 'Svelte', 'CSS'],
        url: 'https://example.com/project-one'
      },
      {
        name: 'Project Two',
        description: 'This is the description for Project Two.',
        imageUrl: 'https://via.placeholder.com/150',
        imageAlt: 'Project Two Image',
        tags: ['Node.js', 'Express', 'MongoDB'],
        url: 'https://example.com/project-two'
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
  
  <style>
    /* Add your styles here */
  </style>
  