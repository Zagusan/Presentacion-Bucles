<script lang="ts">
    import Background from "../lib/Background.svelte";
    import Card from "../lib/Card.svelte";

    import BgImage from "/codigo-python-alt.jpg";
    import Laptop from "/laptop.svg";
    import Waiter from "/waiter.svg";
    import Numbers from "/file-digit.svg";
</script>

<section data-transition="fade">
    <section data-auto-animate data-autoslide="2000" data-transition="fade">
        <Background image={BgImage} blur fragment tint="rgba(0, 0, 0, 0.5)">
            <h3>¡A programar!</h3>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>El restaurante de números</h3>
            <div class="content fragment fade-in">
                <div class="cards">
                    <Card vertical>
                        <img src={Laptop} alt="Icono de laptop">
                        <p>Trabajas en un restaurante donde los clientes son computadoras</p>
                    </Card>
                    <Card vertical>
                        <img src={Waiter} alt="Mano con campananilla encima">
                        <p>Las computadoras piden números para comer y tú las atiendes</p>
                    </Card>
                    <Card vertical>
                        <img src={Numbers} alt="Documento con números">
                        <p>También debes prepararles y servirles las órdenes</p>
                    </Card>
                </div>
            </div>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>El restaurante de números</h3>
            <div class="small-text">
                <Card vertical fullscreen>
                    <p>Van a crear un programa que:</p>
                    <ul>
                        <li>Reciba un número que representa la cantidad de computadoras</li>
                        <li>Tome las órdenes de los números
                            <ul>
                                <li>Si solo hay un parámetro en el pedido, este corresponde <code>fin</code></li>
                                <li>Si hay dos o tres parámetros, estos corresponden a <code>inicio, fin, paso</code></li>
                            </ul>
                        </li>
                        <li>Imprima los números que conforman cada orden</li>
                    </ul>
                </Card>
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

    .cards p
    {
        font-size: 2rem;
    }

    .cards img
    {
        height: 6rem;
        margin-bottom: auto;
    }
</style>