<script lang="ts">
	import { cn } from '../../../lib/utils/cn'
	import { Motion } from 'svelte-motion';

	type Tab = {
		title: string;
		value: string;
		content?: any | undefined;
	};

	export let className: string | undefined = undefined;
	export let tabs: Tab[];
	export let hovering: boolean | undefined;

	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
</script>

<div class="relative h-full w-full">
	{#each tabs as tab, idx (tab.value)}
		<Motion
			let:motion
			layoutId={tab.value}
			animate={{
				y: isActive(tab) ? [0, 40, 0] : 0
			}}
		>
			<div
				use:motion
				style={`scale: ${1 - idx * 0.1}; top: ${hovering ? `${idx * -60}px` : 0}; z-index: ${-idx}; opacity: ${idx < 3 ? 1 - idx * 0.1 : 0};`}
				class={cn('absolute left-0 top-0 h-full w-full overflow-hidden', className)}
			>
				{@html tab.content}
			</div>
		</Motion>
	{/each}
</div>