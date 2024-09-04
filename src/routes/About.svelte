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

        <div class='mt-6'>
            <p class='md:text-xl mt-2 font-bold font-mono'>
                Muhammad Ilham Jaya 
                <span class='text-xsm md:text-sm'>
                    is my full name
                </span>
            </p>
        
            <p class='text-xsm md:text-sm mt-2 font-bold font-mono flex items-center'>
                <span>I was born on</span>
                <span class='md:text-xl flex items-center ml-2'>
                    March 18, 2008 
                </span>
            </p>
        
            <p class='text-xsm md:text-sm mt-2 font-bold font-mono flex items-center'>
                <span>I live in</span>
                <span class='md:text-xl flex items-center ml-2'>
                    Karanganyar, Central Java, Indonesia 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 72 72" class="ml-1">
                        <path fill="#d22f27" d="M5 17h62v38H5z" />
                        <path fill="#fff" d="M5 36h62v19H5z" />
                        <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z" />
                    </svg>
                </span>
            </p>
        
            <p class='text-xsm md:text-sm mt-2 font-bold font-mono flex items-center'>
                Software Developer is my Occupation
            </p>
        
            <p class='text-xsm md:text-sm mt-2 font-bold font-mono flex items-center'>
                I'm Software Engineering Student at SMK Negeri 5 Surakarta
            </p>
        
            <p class='text-xsm md:text-sm mt-2 font-bold font-mono flex items-center'>
                I have several hobbies such as Playing video games, Coding, and reading any science books/article
            </p>
        
            <p class='text-xsm md:text-sm mt-2 font-bold font-mono flex items-center'>
                I can speak in Indonesian (Native), Javanese (Daily-Native), English and Arabic (Basic), 
            </p>
        </div>
        
    </div>
</article>

<style>

.text-xsm {
    font-size: 0.675rem;
    line-height: 1rem;
}
</style>