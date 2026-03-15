<script lang="ts">
    let {
        children = undefined,
        blur = false,
        fragment = false,
        image = "/bits-bg.jpg",
        tint = "transparent"
        } = $props();

    import { onMount } from "svelte";

    let bg: HTMLElement;
    let content: HTMLElement;

    const obsConfig = { attributes: true, attributeFilter: ['class'] };

    const obsCallback = function (mutations: MutationRecord[], _: MutationObserver)
    {
        for (const mutation of mutations)
        {
            if (mutation.type === "attributes" && mutation.attributeName === "class")
            {
                if (content.classList.contains("visible"))
                {
                    bg.classList.add("visible");
                }
                else
                {
                    bg.classList.remove("visible");
                }
            }
        }
    };

    const observer = new MutationObserver(obsCallback);
    
    onMount(() => {
        observer.observe(content, obsConfig);
    })
</script>

<div class:blur={blur} class:visible={!fragment} class="bg" data-id="bg" style="--image: url({image});  --tint: {tint};" bind:this={bg}>
    <div class:fragment={fragment} class:fade-up={fragment} class="content" bind:this={content} data-autoslide="0">
        {@render children?.()}
    </div>
</div>

<style>
    .bg
    {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        box-sizing: border-box;
    }

    .bg::before
    {
        content: "";
        inset: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        box-sizing: border-box;
        background-image: var(--image);
        background-size: cover;
        transition: filter 1.5s ease-in-out,
        background-color 1.5s ease-in-out;
        filter: none;
    }

    .bg.blur.visible::before
    {  
        content: "";
        filter: blur(8px);
        background-color: var(--tint);
        background-blend-mode: multiply;
    }

    .content
    {
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>