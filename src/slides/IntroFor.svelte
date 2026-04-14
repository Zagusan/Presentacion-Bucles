<script lang="ts">
    import Background from "../lib/Background.svelte";
    import BgImage from "/kitchen.jpg";
    import ChefHat from "/chef-hat.svg";
    import Clock from "/clock-12.svg";
    import Question from "/question.svg";

    import { Preview, Code } from "./introtxt";
    import Card from "../lib/Card.svelte";

    import { onMount } from "svelte";
    import Reveal from "reveal.js";

    import { highlight } from "../init";

    let slide: HTMLElement;
    let codeElement: HTMLElement;

    const obsConfig = { attributes: true, attributeFilter: ['data-auto-animate'] };

    const obsCallback = function (mutations: MutationRecord[], _: MutationObserver)
    {
        for (const mutation of mutations)
        {
            if (mutation.type === "attributes" && mutation.attributeName === "data-auto-animate")
            {
                if (slide.getAttribute("data-auto-animate") === "running")
                {
                    setTimeout(() => {
                        codeElement.textContent = Code;
                        delete codeElement.dataset.highlighted;
                        highlight.highlightBlock(codeElement);
                        Reveal.syncSlide(slide);
                    }, 1000)
                }
                else
                {
                    codeElement.textContent = Preview;
                    delete codeElement.dataset.highlighted;
                    highlight.highlightBlock(codeElement);
                    Reveal.syncSlide(slide);
                }
            }
        }
    };

    const observer = new MutationObserver(obsCallback);
    
    onMount(() => {
        observer.observe(slide, obsConfig);
    })
</script>

<section data-transition="fade">
    <section data-auto-animate data-autoslide="2000" data-transition="fade">
        <Background image={BgImage} blur fragment tint="rgba(0, 0, 0, 0.5)">
            <h3>Hagamos un viaje a la cocina</h3>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
        <h3>Hagamos un viaje a la cocina</h3>
        <div class="content fragment fade-in">
            <div class="cards">
                <Card vertical>
                    <img src={ChefHat} alt="Sombrero de chef">
                    <p>Imagínate que eres un chef</p>
                </Card>
                <Card vertical>
                    <img src={Clock} alt="Reloj indicando que son las 12 en punto">
                    <p>Es la hora del almuerzo y llegan un montón de pedidos</p>
                </Card>
                <Card vertical>
                    <div class="hamburguer"></div>
                    <p>Cuando te das cuenta, tienes que hacer 500 hamburguesas</p>
                </Card>
                <Card vertical>
                    <img src={Question} alt="Signo de pregunta">
                    <p>¿Ahora qué haces?</p>
                </Card>
            </div>
        </div>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade" bind:this={slide}>
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
        <h3>Hagamos un viaje a la cocina</h3>
        <div class="content">
            <p>Bueno... Esto no parece muy óptimo...</p>
            <pre style="width: 700px;" data-id="code">
                <code class="language-python" data-line-numbers bind:this={codeElement}>{Code}</code>
            </pre>
        </div>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Hagamos un viaje a la cocina</h3>
            <div class="content">
                <p>¡Mejor usemos un bucle!</p>
                <p>¡Excelente! Ahora, el código es más compacto y fácil de editar</p>
                <pre style="width: 700px;" data-id="code"><code class="language-python" data-line-numbers data-trim>
                    import time

                    for i in range(500):
                        print("La hamburguesa se está haciendo...")
                        time.sleep(5)
                        print("¡La hamburguesa está lista!")
                </code></pre>
            </div>
        </Background>
    </section>
</section>

<style>
    .content
    {
        display: flex;
        flex-direction: column;
        height: 0;
        flex: 1 1;
    }

    .cards
    {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        height: 0;
        flex: 1 1;
    }

    .cards p
    {
        font-size: 2rem;
    }

    .cards img
    {
        height: 6rem;
        margin-bottom: auto;
    }

    .hamburguer
    {
        width: 6rem;
        height: 6rem;
        background: url(/hamburger.svg) repeat;
    }
</style>