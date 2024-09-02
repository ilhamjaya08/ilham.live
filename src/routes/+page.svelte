<script lang='ts'>
    import { onMount } from 'svelte';
    import { quadInOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    import Typewriter from 'svelte-typewriter';

    const otherNames = [
		'Ilham',
		'ilhamjaya08',
		'Ham',
        'Jaya'
	];

	let currentName = otherNames[0];
	let currentIndex = 0;

    function updateName() {
		currentIndex = (currentIndex + 1) % otherNames.length;
		currentName = otherNames[currentIndex];
	}

    onMount(() => {
        setInterval(updateName, 1500);
    })
</script>

<div class="font-mono text-center ">
    <p class='text-4xl mt-20'>
        Hi there! I'm
    </p>
    <p class='mt-4 text-md underline'>
        Muhammad Ilham Jaya
    </p>
    <p class='mt-6 text-2xl'>
        Also known as
    </p>
    <Typewriter>
        <div class='mt-4 text-md'>{currentName}</div>
    </Typewriter>
</div>
