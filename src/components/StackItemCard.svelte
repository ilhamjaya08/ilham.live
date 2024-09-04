<script lang="ts">
  import Icon from "@iconify/svelte";

  export let name: string;
  export let tools: { icon: any; name: string }[] = [];
  export let wide = false;
  
  function formatText(text: string): (string | string)[] {
      return text.split(' ').flatMap((word, index, array) => {
          const result: (string | string)[] = [word];
          if (index < array.length - 1) {
              result.push('<br>');
          }
          return result;
      });
  }
</script>

<article class="p-4 rounded-md border-base-content border-2 space-y-4 md:h-full transition">
<header class="text-center">
  <p class="font-bold font-suse">{name}</p>
</header>
<div>
  <ul class="flex flex-row flex-wrap">
    {#each tools as tool}
      <li class={`basis-1/2 ${wide ? 'md:basis-1/3 lg:basis-1/4' : 'md:basis-full lg:basis-1/2'}`}>
        <div class="p-2 space-x-4 cursor-default group">
          <Icon icon={tool.icon} class="inline-block w-6 h-6 md:w-8 md:h-8" />
          <p class="font-suse inline-block decoration-accent group-hover:underline font-bold text-xsm">
              {@html formatText(tool.name).join('')}
          </p>
        </div>
      </li>
    {/each}
  </ul>
</div>
</article>

<style>
.text-xsm {
  font-size: 0.675rem;
  line-height: 1rem;
}
</style>
