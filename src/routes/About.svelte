<script>
  import Fragment from "../components/Fragment.svelte";
  import Comment from "../components/Comment.svelte";

</script>

<article id='about' class='bg-[#6c63ff] py-8'>
    <div class='px-4 mx-auto w-full md:max-w-3xl lg:max-w-6xl'>
        <h1 class='font-suse font-extrabold text-3xl'>
            <Fragment name='Who Am I?' />
        </h1>
        <p class='mt-4 font-mono '>
            I'm a junior software engineer with a passion for building scalable and efficient systems.
            I have experience in the world of advanced programming for approximately 1 year.
            I have started game server scripting since 2020, and slowly I stepped into the realm of web and mobile programming.
        </p>
    </div>
</article>

<article id='bio' class='bg-[#a9f8ad] py-8'>
    <div class='px-4 mx-auto w-full md:max-w-3xl lg:max-w-6xl'>
        <h1 class='font-suse font-extrabold text-3xl'> 
            <Comment name='Bio' />
        </h1>
    </div>
</article>