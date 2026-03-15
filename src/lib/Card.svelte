<script lang="ts">
    let { 
            children = undefined, 
            fullscreen = false, 
            vertical = false,
            revealId = "",
            gap = ""
        } = $props();
</script>

<div class:fullscreen={fullscreen} class="card-root r-stack">
    <div class:vertical={vertical} class="content" style="gap: {gap};">
        {@render children?.()}
    </div>
    <div class="card-bg" data-id={revealId}></div>
</div>

<style>
    .content,
    .card-bg
    {
        width: 100%;
        height: 100%;
    }

    .content
    {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        z-index: 1;
        box-sizing: border-box;
    }

    .card-bg
    {
        border-radius: 1rem;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .vertical
    {
        flex-direction: column;
    }

    .fullscreen
    {
        width: 100%;
        height: 100%;
    }
</style>