<script lang="ts">
  export let name: string;
  export let description: string;
  export let imageUrl: string;
  export let imageAlt: string;
  export let repo: string;
  export let isOnline: boolean;
  export let isOpenSource: boolean;
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
  on:click={handleClick}>
  <div>
    <header>
      <h4 class="text-xl font-bold my-2 decoration-2 decoration-secondary">
        {name}
      </h4>
    </header>
    <div>
      <img src={imageUrl} alt={imageAlt}
        class="rounded border-2 w-[16rem] h-[16rem] border-black grayscale group-hover:grayscale-0 group-active:border-secondary transition" />
      <p class="my-4 font-mono text-sm">{description}</p>
    </div>
  </div>
  <footer>
    <div class="flex flex-row flex-wrap gap-2 mb-4">
      {#each tags as tag}
          <div class="badge badge-outline">{tag}</div>
        {/each}
      </div>
      <div class="flex justify-start">
        {#if isOpenSource === true }
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <a href={repo} class="badge badge-success gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...$$props}>
            <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
          Open Source
        </a>
        {:else}
        <div class="badge badge-neutral gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22" {...$$props}>
            <path fill="currentColor" d="M15 17h1v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v-2h1V9h1V8h1V7h1V6h-1V5h-1v1h-1v1h-1v1h-1v1h-2V8H9V7H8V6H7V5H6v1H5v1h1v1h1v1h1v1h1v2H8v1H7v1H6v1H5v1h1v1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1m2 3h-3v-1h-1v-1h-1v-1h-2v1H9v1H8v1H5v-1H4v-1H3v-3h1v-1h1v-1h1v-2H5V9H4V8H3V5h1V4h1V3h3v1h1v1h1v1h2V5h1V4h1V3h3v1h1v1h1v3h-1v1h-1v1h-1v2h1v1h1v1h1v3h-1v1h-1Z" />
          </svg>
          Closed Source
        </div>
        {/if}
      </div>
      <div class="flex justify-start">
        {#if isOnline}
        <div class="badge badge-info gap-2 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...$$props}>
            <path fill="currentColor" d="M20.281 4.063a1.5 1.5 0 0 0-.906 2.593A8.94 8.94 0 0 1 22 13a8.95 8.95 0 0 1-2.625 6.344a1.503 1.503 0 1 0 2.125 2.125a11.995 11.995 0 0 0 0-16.938a1.5 1.5 0 0 0-1.063-.469a2 2 0 0 0-.156 0zm-14.906.03a1.5 1.5 0 0 0-.875.438a11.995 11.995 0 0 0 0 16.938a1.503 1.503 0 1 0 2.125-2.125A8.94 8.94 0 0 1 4 13a8.95 8.95 0 0 1 2.625-6.344a1.5 1.5 0 0 0-1.25-2.562zm3.813 3.313a1.5 1.5 0 0 0-.876.407A7 7 0 0 0 6 13c0 2.048.87 3.91 2.281 5.188a1.504 1.504 0 1 0 2.031-2.22A3.98 3.98 0 0 1 9 13a3.98 3.98 0 0 1 1.313-2.969a1.5 1.5 0 0 0-1.126-2.625zm7.406 0a1.5 1.5 0 0 0-.907 2.625A3.98 3.98 0 0 1 17 13a3.98 3.98 0 0 1-1.313 2.969a1.5 1.5 0 1 0 2 2.219A7 7 0 0 0 20 13a6.98 6.98 0 0 0-2.281-5.188a1.5 1.5 0 0 0-1.125-.406M13 11.188A1.812 1.812 0 1 0 14.813 13A1.81 1.81 0 0 0 13 11.187z" />
          </svg>
          Online Now
        </div>
        {:else}
        <div class="badge badge-error gap-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-4 w-4 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          Offline
        </div>
        {/if}
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