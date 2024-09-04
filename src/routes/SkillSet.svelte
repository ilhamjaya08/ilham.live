<script lang="ts">
    import Fragment from "../components/Fragment.svelte";
    import Comment from "../components/Comment.svelte";
    import StackItemCard from "../components/StackItemCard.svelte";
    const web = [
    { name: 'HTML5', icon: 'logos:html-5' },
    { name: 'CSS3', icon: 'logos:css-3' },
    { name: 'Svelte', icon: 'devicon:svelte' },
    { name: 'Astro', icon: 'devicon:astro' },
    { name: 'React', icon: 'logos:react' },
    { name: 'NextJS', icon: 'logos:nextjs-icon' },
    { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
    ];
    const be = [
    { name: 'NodeJS', icon: 'logos:nodejs' },
    { name: 'Bun', icon: 'logos:bun' },
    { name: 'Laravel', icon: 'logos:laravel' },
    { name: 'Express', icon: 'devicon:express' },
    { name: 'NestJS', icon: 'devicon:nestjs' },
    { name: 'Hono', icon: 'logos:hono' }
    ]
    const lang = [
    { name: 'Typescript', icon: 'devicon:typescript' },
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'Java', icon: 'logos:java' },
    { name: 'PHP', icon: 'logos:php' },
    ];
    const infra = [
    { name: 'Actions', icon: 'devicon:githubactions' },
    { name: 'Docker', icon: 'devicon:docker' },
    { name: 'Vercel', icon: 'devicon:vercel' },
    { name: 'GitHub', icon: 'devicon:github' },
    { name: 'cPanel', icon: 'logos:cpanel' },
    { name: 'Linux', icon: 'devicon:linux' },
    { name: 'Heroku', icon: 'devicon:heroku' },
    { name: 'AWS', icon: 'logos:aws' },
    ];
    const db = [
    { name: 'MySQL', icon: 'logos:mysql' },
    { name: 'MongoDB', icon: 'devicon:mongodb' },
    { name: 'PostgreSQL', icon: 'logos:postgresql' },
    { name: 'Prisma', icon: 'logos:prisma' },
    { name: 'TypeOrm', icon: 'logos:typeorm' },
    ];
    const tools = [
    { name: 'VSCode', icon: 'devicon:vscode' },
    { name: 'Laragon', icon: 'simple-icons:laragon' },
    { name: 'Git', icon: 'devicon:git' },
    { name: 'Postman', icon: 'devicon:postman' },
    { name: 'Android Studio', icon: 'devicon:androidstudio' },
    { name: 'Neovim', icon: 'devicon:neovim' },
    ];
</script>

<article id='skillset' class='bg-[#ffffff] py-8'>
    <div class='px-4 mx-auto w-full md:max-w-3xl lg:max-w-6xl'>
        <h1 class='font-suse font-extrabold text-3xl'>
            <Fragment name='SkillSet' />
        </h1>
        <ul class='mt-6 flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-x-0 lg:justify-center'>
            <li class="md:basis-1/2 md:px-2">
                <StackItemCard name='Web Development' tools={web} wide={true}  />
            </li>
            <li class="md:basis-1/2 md:px-2">
                <StackItemCard name='Backend Server' tools={be} wide={true}  />
            </li>
            <li class="md:basis-1/2 md:px-2">
                <StackItemCard name='Programming Languages' tools={lang} wide={true}  />
            </li>
            <li class="md:basis-1/2 md:px-2">
                <StackItemCard name='Infrastructure, CI/CD & DevOps' tools={infra} wide={true}  />
            </li>
            <li class="md:basis-1/2 md:px-2">
                <StackItemCard name='Databases & ORM' tools={db} wide={true}  />
            </li>
            <li class="md:basis-1/2 md:px-2">
                <StackItemCard name='Tools & Software' tools={tools} wide={true}  />
            </li>
        </ul>
    </div>
</article>