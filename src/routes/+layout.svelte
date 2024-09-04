<script>
    import '../style.css';
    import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
    <title>
        Ilham.Live
    </title>
</svelte:head>

<main>
    <Navbar/>
    <slot/>
</main>