<script lang="ts">
    let { 
            children = undefined, 
            fullscreen = false, 
            revealId = "",
            gap = "",
            headerIcon = "",
            headerText = ""
        } = $props();
</script>

<div class:fullscreen={fullscreen} class="card-root r-stack">
    <div class="content" style="gap: {gap};">
        <div class="header">
            <img src={headerIcon} alt="">
            {headerText}
        </div>
        <div class="innerBg">
            {@render children?.()}
        </div>
    </div>
    <div class="card-bg" data-id={revealId}></div>
</div>

<style>
    .card-root
    {
        min-width: 200px;
        max-width: 1200px;
    }

    .content,
    .card-bg
    {
        width: 100%;
        height: 100%;
    }

    .content
    {
        position: relative;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        box-sizing: border-box;
        font-size: 2rem;
    }

    .card-bg
    {
        border-radius: 1rem;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .fullscreen
    {
        width: 100%;
        height: 100%;
    }

    .header
    {
        display: flex;
        gap: 1rem;
        padding: 0.5rem;
        width: 100%;
        box-sizing: border-box;
    }

    .innerBg
    {
        width: 100%;
        background-color: #262626;
        padding: 1rem;
        border-radius: 0 0 1rem 1rem;
        box-sizing: border-box;
        text-wrap-mode: nowrap;
        overflow-x: auto;
    }

    img
    {
        margin: 0;
    }
</style>