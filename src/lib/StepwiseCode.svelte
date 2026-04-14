<script>
    let { children = undefined, code = "", overflow = "hidden", highlight = ""} = $props();
</script>

<div class="contentLayout">
    {@render children?.()}
    <pre data-id="code"><code data-trim data-line-numbers={highlight} class="language-python" style="--overflow: {overflow}">
        {code}
    </code></pre>
</div>

<style>
    .contentLayout
    {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .contentLayout pre
    {
        min-width: 500px;
        width: min-content;
    }

    .contentLayout pre code
    {
        overflow: var(--overflow);
        box-sizing: border-box;
    }
</style>