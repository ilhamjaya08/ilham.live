<script lang='ts'>
    import { onMount } from 'svelte';
    import Typewriter from 'svelte-typewriter';
    import CircularButton from '../components/CircularButton.svelte';

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
    <div class="container mx-auto px-4">
        <section class='flex flex-col md:flex-row items-center justify-center min-h-[90vh]'>
            
            <div class="image-container w-full md:w-1/2 flex justify-center md:justify-start">
                <img src="/drink-coffee.svg" alt="Illustration" class='w-[12rem] h-[12rem] md:w-auto md:h-auto max-w-full'>
            </div>

            <div class="text-container w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
                <p class='text-4xl font-suse font-semibold text-gray-600'>Hi there! I'm</p>
                <p class='mt-4 text-md underline font-mono'>Muhammad Ilham Jaya</p>
                <p class='mt-6 text-2xl font-suse'>Also known as</p>
                <Typewriter>
                    <div class='mt-4 text-md font-mono'>{currentName}</div>
                </Typewriter>
                <p class="text-sm mt-4 md:mt-20 font-suse">Junior Software Developer and Software Engineering Student</p>

                <div class="mt-8 md:mt-12">
                    <CircularButton size="md" href="#about">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                            <path fill="currentColor" fill-rule="evenodd" d="M8 1v11.293l3.146-3.147l.708.708L7.5 14.207L3.146 9.854l.708-.708L7 12.293V1z" clip-rule="evenodd" />
                        </svg>
                         Explore this site
                    </CircularButton>
                </div>
            </div>
        </section>
    </div>
</article>

<style>
  .container {
    max-width: 1200px;
    padding: 1rem;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 90vh;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
  }

  .text-container {
    padding-left: 2rem;
  }

  @media (min-width: 768px) {
    section {
      flex-direction: row;
    }

    .image-container {
      justify-content: flex-start;
    }

    .text-container {
      text-align: left;
    }
  }
</style>