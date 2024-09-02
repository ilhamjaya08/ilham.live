<script lang='ts'>
    import { onMount } from 'svelte';
    import { quadInOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    import Typewriter from 'svelte-typewriter';
    import CircularButton from '../components/CircularButton.svelte';
    import { fade } from 'svelte/transition';

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

<article id='main'>
    <div class="font-mono text-center mt-32 ">
        <p class='text-4xl'>
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

    <div>
        <p class="text-sm mt-20 text-center">
            Junior Software Developer and Software Engineering Student
        </p>
    </div>

    <div 
       class="p-0 flex items-center justify-center absolute bottom-10 md:p-4 md:left-1/2 md:-translate-x-1/2"
       transition:fade|local={{ duration: 700 }} >
			<CircularButton size="md" href="#about">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...$$props}>
                    <path fill="currentColor" fill-rule="evenodd" d="M8 1v11.293l3.146-3.147l.708.708L7.5 14.207L3.146 9.854l.708-.708L7 12.293V1z" clip-rule="evenodd" />
                </svg>
                 &nbsp;Explore this site
            </CircularButton>
    </div>
</article>