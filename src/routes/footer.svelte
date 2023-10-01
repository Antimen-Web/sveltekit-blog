<script>
    import * as config from "$lib";
</script>

<footer>
    <p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
    footer {
        padding-block: var(--size-7);
        border-bottom: 1px solid var(--border);
    }

    p {
        color: var(--text-2);
    }
</style>