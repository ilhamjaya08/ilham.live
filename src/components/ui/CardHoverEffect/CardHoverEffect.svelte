<script lang="ts">
	import { Motion, AnimatePresence } from 'svelte-motion';
	import { cn } from '../../../lib/utils/cn';
	export let items: {
		title: string;
		description: string;
		link: string;
	}[];
	export let className: string | undefined = undefined;

	let hoveredIndex: number | null = null;
</script>

<div class={cn('grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3', className)}>
	{#each items as item, idx (item.link)}
		<a
			href={item?.link}
			class="group relative block h-full w-full p-2"
			on:mouseenter={() => (hoveredIndex = idx)}
			on:mouseleave={() => (hoveredIndex = null)}
		>
			<AnimatePresence show={true}>
				{#if hoveredIndex === idx}
					<Motion
						let:motion
						layoutId="hoverBackground"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 0.15 }
						}}
						exit={{
							opacity: 0,
							transition: { duration: 0.15, delay: 0.1 }
						}}
					>
						<span
							use:motion
							class="absolute inset-0 block h-full w-full rounded-3xl bg-violet-700 dark:bg-slate-800/[0.8]"
						/>
					</Motion>
				{/if}
			</AnimatePresence>
			<div
				class={cn(
					'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.2]',
					className
				)}
			>
				<div class="relative z-50">
					<div class="p-4">
						<h4 class={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}>
							{item.title}
						</h4>
						<p class={cn('mt-8 text-sm leading-relaxed tracking-wide text-zinc-400', className)}>
							{item.description}
						</p>
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>