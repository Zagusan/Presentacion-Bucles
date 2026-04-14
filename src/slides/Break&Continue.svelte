<script lang="ts">
    import Background from "../lib/Background.svelte";
    import Card from "../lib/Card.svelte";
</script>

<section>
    <section data-transition="fade">
        <Background blur>
            <h3><code>break</code> y <code>continue</code></h3>
        </Background>
    </section>
    <section data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.5)">
            <h3><code>break</code> y <code>continue</code></h3>
            <p><b><code>break</code></b> y <b><code>continue</code></b> se utilizan para <b>interrumpir o alterar</b> el funcionamiento normal de un bucle</p>
        </Background>
    </section>
    <section data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.5)">
            <h3><code>break</code> y <code>continue</code></h3>
            <div class="cards">
                <Card vertical>
                    <pre><code class="language-python" data-trim>
                        for numero in range(10):
                            if numero == 6 or numero == 7:
                                print({`"Ese número no se dice"`})
                                continue
                            print(numero)
                    </code></pre>
                    <div class="center">
                        <p><b><code>continue</code></b> se <b>salta la iteración actual</b> del bucle. Este ejemplo lo usa para evitar imprimir ciertos números</p>
                    </div>
                </Card>
                <Card vertical>
                    <pre><code class="language-python" data-trim>
                        numero = 1

                        while True:
                            print(numero)
                            numero += 1
                            if numero > 100:
                                print("Ok ya me harté")
                                print("Puedes dejar de contar")
                                break
                    </code></pre>
                    <div class="center">
                        <p><b><code>break</code> detiene por completo</b> el bucle. Este ejemplo lo usa para dejar de contar al llegar a 100</p>
                    </div>
                </Card>
            </div>
        </Background>
    </section>
</section>

<style>
    .cards
    {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .cards .center
    {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cards p
    {
        font-size: 2rem;
        margin: 0;
        margin-top: auto;
    }
</style>