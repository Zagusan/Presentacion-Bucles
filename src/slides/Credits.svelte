<script>
    import Clouds from "/clouds.jpg";
    import RevealLogo from "/reveal-white-text.svg";
    import LucideLogo from "/lucide-logo-dark.svg";
    import SvelteLogo from "/svelte-horizontal.svg";
    import Bits from "/bits-bg.jpg";
    import Kitchen from "/kitchen.jpg";
    import Counter from "/counter.jpg";
    import Codigo from "/codigo-python-alt.jpg";

    import Background from "../lib/Background.svelte";
    import Card from "../lib/Card.svelte";

</script>


<section>
    <section data-auto-animate data-autoslide="2000" data-transition="fade">
        <Background image={Clouds} blur fragment tint="rgba(0, 0, 0, 0.5)">
            <h3>Créditos</h3>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={Clouds} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Créditos</h3>
            <div class="content">
                <div class="cards">
                    <Card vertical>
                        <img src={RevealLogo} alt="Logotipo de Reveal.js">
                        <a href="https://github.com/hakimel/reveal.js/blob/master/LICENSE">Ver licencia</a>
                    </Card>
                    <Card vertical>
                        <div class="lucide">
                            <img style="height: 100%; margin: 0;" src={LucideLogo} alt="Logotipo de Lucide">
                            <p>Lucide</p>
                        </div>
                        <a href="https://lucide.dev/license">Ver licencia</a>
                    </Card>
                    <Card vertical>
                        <img src={SvelteLogo} alt="Logotipo de Svelte">
                        <a href="https://github.com/sveltejs/svelte/blob/main/LICENSE.md">Ver licencia</a>
                    </Card>
                </div>
            </div>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={Clouds} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Créditos</h3>
            <div class="content-alt">
                <div class="cards">
                    <Card vertical>
                        <img src={Bits} class="bg" alt="Fondo verde y futurista con ceros y unos flotando">
                        <a href="https://www.freepik.com/free-vector/futuristic-binary-code-matrix-pattern-background-cyber-security_58526933.htm">
                            Fondo por Starline
                        </a>
                    </Card>
                    <Card vertical>
                        <img src={Kitchen} class="bg" alt="Fondo de la cocina de un restaurante">
                        <a href="https://www.freepik.com/free-photo/front-view-professional-kitchen_11228898.htm">
                            Fondo por Freepik
                        </a>
                    </Card>
                    <Card vertical>
                        <img src={Counter} class="bg" alt="Mostrador de un café con una persona sonriente">
                        <a href="https://www.freepik.com/free-photo/cafe-small-business-smiling-asian-barista-apron-standing-counter-coffee-shop-workin_36502968.htm">
                            Fondo por benzoix
                        </a>
                    </Card>
                </div>
            </div>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={Clouds} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Créditos</h3>
            <div class="content-alt">
                <div class="cards" style="grid-template-columns: 1fr 1fr;">
                    <Card vertical>
                        <img src={Codigo} class="bg" alt="Pantalla con código de Python">
                        <a href="https://www.pexels.com/photo/close-up-of-codes-on-a-computer-screen-4976712/" style="white-space: nowrap;">
                            Fondo por Godfrey Atima
                        </a>
                    </Card>
                    <Card vertical>
                        <img src={Clouds} class="bg" alt="Fondo de la cocina de un restaurante">
                        <a href="https://www.pexels.com/photo/asperitas-dark-clouds-in-gloomy-sky-3742711/" style="white-space: nowrap;">
                            Fondo por Andrew Beatson
                        </a>
                    </Card>
                </div>
            </div>
        </Background>
    </section>
</section>

<style>
    .content
    {
        display: flex;
        flex-direction: column;
        flex: 1 1;
        margin: 15% 0;
    }

    .content-alt
    {
        display: flex;
        flex-direction: column;
        flex: 1 1;
        margin: 10% 0;
    }

    .cards
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        height: 0;
        flex: 1 1;
    }

    .cards img
    {
        height: 6rem;
    }

    .lucide
    {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.25rem;
        height: 6rem;
        width: 100%;
        margin: 20px 0;
        font-size: 3.5rem;
        font-weight: 600;
        color: #dfdfd6;
        font-family: "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    .cards .bg
    {
        border-radius: 2rem;
        height: 12rem;
    }

    a:hover
    {
        text-decoration: underline;
    }
</style>