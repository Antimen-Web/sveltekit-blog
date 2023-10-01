<script>
    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
</svelte:head>

<article>
<div class="prose">
    <svelte:component this={data.content} />
</div>
</article>