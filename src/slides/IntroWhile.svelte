<script lang="ts">
    import Background from "../lib/Background.svelte";
    import Card from "../lib/Card.svelte";

    import BgImage from "/counter.jpg";
    import Waiter from "/waiter.svg";
    import Tasks from "/clipboard.svg";
    import Question from "/question.svg";
    import Info from "/info.svg";
    import Warning from "/warning.svg";
</script>

<section>
    <section data-auto-animate data-autoslide="2000" data-transition="fade">
        <Background image={BgImage} blur fragment tint="rgba(0, 0, 0, 0.5)">
            <h3>Volvamos al restaurante</h3>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
        <h3>Volvamos al restaurante</h3>
        <div class="content fragment fade-in">
            <div class="cards">
                <Card vertical>
                    <img src={Waiter} alt="Mano con campananilla encima">
                    <p>Imagínate que eres el mesero</p>
                </Card>
                <Card vertical>
                    <div class="people"></div>
                    <p>Tienes que atender al montón personas que llegan durante el almuerzo</p>
                </Card>
                <Card vertical>
                    <img src={Tasks} alt="Portapapeles con tareas">
                    <p>También tienes que servir la comida y las bebidas</p>
                </Card>
                <Card vertical>
                    <img src={Question} alt="Signo de pregunta">
                    <p>¿Ahora qué haces?</p>
                </Card>
            </div>
        </div>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Hagamos un viaje a la cocina</h3>
            <div class="content">
                <p>Esto no va a funcionar esta vez, ¿verdad?</p>
                <pre style="width: 650px;" data-id="code">
                    <code class="language-python" data-line-numbers data-trim>
                    for i in range(500):
                        print("¡Hola! ¿Qué desea ordenar?")
                        pedido = input()
                        print("Su pedido estará listo pronto")
                    </code>
                </pre>
                <div class="bottomCard">
                    <Card>
                        <div class="layout">
                            <img src={Info} alt="Icono de información">
                            <p>No sabemos <b>cuántos clientes van a llegar</b></p>
                        </div>
                    </Card>
                </div>
                <div class="bottomCard">
                    <Card>
                        <div class="layout">
                            <img src={Warning} alt="Icono de información">
                            <p>Tampoco podemos quedarnos en el mostrador para siempre</p>
                        </div>
                    </Card>
                </div>
            </div>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Hagamos un viaje a la cocina</h3>
            <div class="content">
                <p>¡El bucle <b><code>while</code></b> está aquí para salvar el día!</p>
                <pre style="width: 650px;" data-id="code"><code class="language-python" data-line-numbers data-trim>
                    hay_clientes = True

                    while hay_clientes:
                        print("¡Hola! ¿Qué desea ordenar?")
                        pedido = input()

                        if pedido == "":
                            print("Parece que ya no hay más clientes")
                            hay_clientes = False
                        else:
                            print("Su pedido estará listo pronto")
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
        align-items: center;
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

    .people
    {
        width: 6rem;
        height: 6rem;
        background: url(/users.svg) repeat;
    }

    .bottomCard
    {
        display: flex;
        font-size: 2rem;
        margin-top: 2rem;
    }

    .bottomCard .layout
    {
        display: flex;
        align-items: center;
        text-align: left    ;
        gap: 1rem;
    }

    .bottomCard .layout img
    {
        height: 3rem;
        margin: 0;
    }

    pre code
    {
        width: min-content;
    }
</style>