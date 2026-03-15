<script lang="ts">
    import Background from "../lib/Background.svelte";
    import Card from "../lib/Card.svelte";
    import InteractiveRangeWidget from "../lib/InteractiveRangeWidget.svelte";

    import Info from "/info.svg";
</script>

<section>
    <section data-transition="fade">
        <Background blur>
            <h3>¿Exactamente qué es <code>range()</code>?</h3>
        </Background>
    </section>
    <section data-transition="fade">
        <Background blur>
            <h3>¿Exactamente qué es <code>range()</code>?</h3>
            <p><b><code>range()</code></b> es una función que se puede usar para <b>representar intervalos</b>, como el nombre indica</p>
        </Background>
    </section>
    <section data-transition="fade">
        <Background blur>
            <h3>¿Exactamente qué es <code>range()</code>?</h3>
            <p>Se puede usar de <b>tres formas</b> distintas:</p>
            <div class="cards">
                <Card vertical>
                    <pre><code class="language-python">range(fin)</code></pre>
                    <div class="center">
                        <p>Representa un intervalo de <code>0</code> hasta <code>fin-1</code></p>
                    </div>
                </Card>
                <Card vertical>
                    <pre><code class="language-python">range(inicio, fin)</code></pre>
                    <div class="center">
                        <p>Representa un intervalo de <code>inicio</code> hasta <code>fin-1</code></p>
                    </div>
                </Card>
                <Card vertical>
                    <pre><code class="language-python">range(inicio, fin, paso)</code></pre>
                    <div class="center">
                        <p>Igual que el anterior, pero en cada <b>iteración</b>, se le suma <code>paso</code> al número</p>
                    </div>
                </Card>
            </div>
            <div class="bottomCard">
                <Card>
                    <div class="layout">
                        <img src={Info} alt="Icono de información">
                        <p><b><code>range()</code> incluye</b> a todos los números del intervalo excepto <b><code>fin</code></b>, que es <b>excluido</b></p>
                    </div>
                </Card>
            </div>
        </Background>
    </section>
    <section data-transition="fade">
        <Background blur>
            <h3>Práctica</h3>
            <p>Identifica los rangos</p>
            <div class="cards">
                <Card vertical>
                    <pre><code class="language-python">range(10)</code></pre>
                    <div class="center fragment fade-in">
                        <p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p>
                    </div>
                </Card>
                <Card vertical>
                    <pre><code class="language-python">range(524, 529)</code></pre>
                    <div class="center fragment fade-in">
                        <p>524, 525, 526, 527, 528</p>
                    </div>
                </Card>
                <Card vertical>
                    <pre><code class="language-python">range(4, -10, -2)</code></pre>
                    <div class="center fragment fade-in">
                        <p>4, 2, 0, -2, -4, -6, -8</p>
                    </div>
                </Card>
            </div>
        </Background>
    </section>
    <section data-transition="fade">
        <Background blur>
            <h3>¡Inténtalo!</h3>
            <InteractiveRangeWidget/>
        </Background>
    </section>
</section>

<style>
    .cards
    {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }

    .cards .center
    {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cards p,
    .bottomCard .layout p
    {
        font-size: 2rem;
        margin: 0;
    }

    .bottomCard
    {
        font-size: 2rem;
        margin-top: 2rem;
    }

    .bottomCard .layout
    {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .bottomCard .layout img
    {
        height: 3rem;
        margin: 0;
    }
</style>