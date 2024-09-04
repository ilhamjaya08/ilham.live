<script lang="ts">
    export let name: string;
    export let description: string;
    export let imageUrl: string;
    export let imageAlt: string;
    export let tags: string[] = [];
    export let url: string;
  
    function handleClick() {
      window.open(url, '_blank');
    }
  </script>
  
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article
    class="p-4 rounded-md border-2 border-black space-y-2 h-full flex flex-col justify-between group active:bg-secondary active:border-secondary active:text-secondary-content transition cursor-pointer"
    on:click={handleClick}
  >
    <div>
      <header>
        <h4 class="text-xl font-bold my-2 decoration-2 decoration-secondary">
          {name}
        </h4>
      </header>
      <div>
        <img
          src={imageUrl}
          alt={imageAlt}
          class="rounded border-2 w-[16rem] h-[16rem] border-black grayscale group-hover:grayscale-0 group-active:border-secondary transition"
        />
        <p class="my-4 font-mono text-sm">{description}</p>
      </div>
    </div>
    <footer>
      <div class="flex flex-row flex-wrap gap-2 mb-4">
        {#each tags as tag}
          <div class="badge badge-outline">{tag}</div>
        {/each}
      </div>
      <div class="flex justify-end">
        <button
          type="button"
          class="btn bg-[#2eacff] group-active:text-secondary-content"
        >
          GO HERE
        </button>
      </div>
    </footer>
</article>

