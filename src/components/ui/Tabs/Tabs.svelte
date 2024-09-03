<script lang="ts">
	import { cn } from '../../../lib/utils/cn';
	import { AnimatePresence, Motion } from 'svelte-motion';
	import FadeInDiv from './FadeInDiv.svelte';

	type Tab = {
		title: string;
		value: string;
		content?: string | any;
	};

	export let propTabs: Tab[];
	export let containerClassName: string | undefined = undefined;
	export let activeTabClassName: string | undefined = undefined;
	export let tabClassName: string | undefined = undefined;
	export let contentClassName: string | undefined = undefined;

	let active: Tab = propTabs[0];
	let tabs: Tab[] = propTabs;

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		tabs = newTabs;
		active = newTabs[0];
	};

	let hovering = false;
</script>

<div
	class={cn(
		'no-visible-scrollbar relative flex w-full max-w-full flex-row items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible',
		containerClassName
	)}
>
	{#each propTabs as tab, idx (tab.title)}
		<button
			on:click={() => {
				moveSelectedTabToTop(idx);
			}}
			on:mouseenter={() => (hovering = true)}
			on:mouseleave={() => (hovering = false)}
			class={cn('relative rounded-full px-4 py-2', tabClassName)}
			style="transform-style: preserve-3d;"
		>
			{#if active.value === tab.value}
				<Motion
					let:motion
					layoutId="clickedbutton"
					transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
				>
					<div
						use:motion
						class={cn(
							'absolute inset-0 rounded-full bg-gray-200 dark:bg-zinc-800 ',
							activeTabClassName
						)}
					/>
				</Motion>
			{/if}

			<span class="relative block text-black dark:text-white">
				{tab.title}
			</span>
		</button>
	{/each}
</div>
<FadeInDiv {tabs} {hovering} className={cn('', contentClassName)} />