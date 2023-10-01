<script>
    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
</svelte:head>

<svelte:component this={data.content} />
