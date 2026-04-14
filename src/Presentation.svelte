<script>
    import { onMount } from 'svelte'
    
    import 'reveal.js/dist/reveal.css'
    import 'reveal.js/dist/theme/black.css'
    import 'reveal.js/plugin/highlight/monokai.css'

    import Cover from './slides/Cover.svelte';
    import IntroFor from './slides/IntroFor.svelte';
    import Credits from './slides/Credits.svelte';

    import { initialize } from "./init";
    import For from './slides/For.svelte';
    import Range from './slides/Range.svelte';
    import IntroWhile from './slides/IntroWhile.svelte';
    import While from './slides/While.svelte';
    import Activity from './slides/Activity.svelte';
    import Solution from './slides/Solution.svelte';
    import BreakContinue from './slides/Break&Continue.svelte';

    onMount(() => {
        initialize();
    })
</script>

<div class="reveal">
    <div class="slides">
        <Cover/>
        <IntroFor/>
        <For/>
        <Range/>
        <IntroWhile/>
        <While/>
        <BreakContinue/>
        <Activity/>
        <Solution/>
        <Credits/>
    </div>
</div>