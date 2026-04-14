<script lang="ts">
    import Background from "../lib/Background.svelte";
    import Card from "../lib/Card.svelte";
    import StepwiseCode from "../lib/StepwiseCode.svelte";

    import BgImage from "/codigo-python-alt.jpg";
    import Info from "/info.svg";
    import Warning from "/warning.svg";
</script>

<section>
    <section data-autoslide="2000" data-transition="fade">
        <Background image={BgImage} blur fragment tint="rgba(0, 0, 0, 0.5)">
            <h3>Solución</h3>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Solución</h3>
            <div class="content">
                <StepwiseCode overflow="auto" code ="a = input({`"¿Cuál sería el primer parámetro?\\n"`})
        b = input({`"¿Cuál sería el segundo parámetro?\\n"`})
        c = input({`"¿Cuál sería el tercer parámetro?\\n"`})">
                    <div class="explanation">
                        <Card>
                            <div class="layout">
                                <img src={Info} alt="Icono de información">
                                <p>Enfoquémonos primero en <b>solamente</b> tomar una orden</p>
                            </div>
                        </Card>
                    </div>
                </StepwiseCode>
            </div>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Solución</h3>
            <div class="content">
                <StepwiseCode overflow="auto" highlight="2-7, 10-12, 15-17"
                code ="a = input({`"¿Cuál sería el primer parámetro?\\n"`})
        if a == {`""`}: # Valida que esté al menos el primer parámetro
            print({`"Bro no puedes hacer eso. Tienes que darme al menos un parámetro"`})
            continue # Se brinca todo el bucle para evitar errores
        
        a = int(a)
        cantidad_parametros = 1

        b = input({`"¿Cuál sería el segundo parámetro?\\n"`})
        if b != {`""`}:
            b = int(b)
            cantidad_parametros = 2

            c = input({`"¿Cuál sería el tercer parámetro?\\n"`})
            if c != {`""`}:
                c = int(c)
                cantidad_parametros = 3">
                    <div class="explanation">
                        <Card>
                            <div class="layout">
                                <img src={Info} alt="Icono de información">
                                <p><b><code>input()</code></b> devuelve <code>""</code> si la entrada esta vacía<br>Esto se puede usar para detectar la cantidad de parámetros</p>
                            </div>
                        </Card>
                    </div>
                </StepwiseCode>
            </div>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Solución</h3>
            <div class="content">
                <StepwiseCode overflow="auto" highlight="19-25" code ="a = input({`"¿Cuál sería el primer parámetro?\\n"`})
        if a == {`""`}: # Valida que esté al menos el primer parámetro
            print({`"Bro no puedes hacer eso. Tienes que darme al menos un parámetro"`})
            continue # Se brinca todo el bucle para evitar errores
        
        a = int(a)
        cantidad_parametros = 1

        b = input({`"¿Cuál sería el segundo parámetro?\\n"`})
        if b != {`""`}:
            b = int(b)
            cantidad_parametros = 2

            c = input({`"¿Cuál sería el tercer parámetro?\\n"`})
            if c != {`""`}:
                c = int(c)
                cantidad_parametros = 3

            orden = None
            if cantidad_parametros == 1:
                orden = range(a)
            elif cantidad_parametros == 2:
                orden = range(a, b)
            elif cantidad_parametros == 3:
                orden = range(a, b, c)">
                    <div class="explanation">
                        <Card>
                            <div class="layout">
                                <img src={Info} alt="Icono de información">
                                <p>Ahora sí podemos definir la lógica de las órdenes usando un <b><code>if</code></b></p>
                            </div>
                        </Card>
                    </div>
                </StepwiseCode>
            </div>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Solución</h3>
            <div class="content">
                <StepwiseCode overflow="auto" highlight="27-30" code ="a = input({`"¿Cuál sería el primer parámetro?\\n"`})
        if a == {`""`}: # Valida que esté al menos el primer parámetro
            print({`"Bro no puedes hacer eso. Tienes que darme al menos un parámetro"`})
            continue # Se brinca todo el bucle para evitar errores
        
        a = int(a)
        cantidad_parametros = 1

        b = input({`"¿Cuál sería el segundo parámetro?\\n"`})
        if b != {`""`}:
            b = int(b)
            cantidad_parametros = 2

            c = input({`"¿Cuál sería el tercer parámetro?\\n"`})
            if c != {`""`}:
                c = int(c)
                cantidad_parametros = 3

            orden = None
            if cantidad_parametros == 1:
                orden = range(a)
            elif cantidad_parametros == 2:
                orden = range(a, b)
            elif cantidad_parametros == 3:
                orden = range(a, b, c)

            print({`"Aquí está tu orden:"`})
            for numero in orden:
                print(numero)
            print({`"¡Espero que la disfrutes!"`})">
                    <div class="explanation">
                        <Card>
                            <div class="layout">
                                <img src={Warning} alt="Icono de advertencia">
                                <p>Ojo, no hay que olvidarse de imprimir</p>
                            </div>
                        </Card>
                    </div>
                </StepwiseCode>
            </div>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Solución</h3>
            <div class="content">
                <StepwiseCode overflow="auto" highlight="1-3" code ="cantidad_computadoras = int(input({`"¿Cuántas computadoras hay?\\n"`}))

        for _ in range(cantidad_computadoras):
            a = input({`"¿Cuál sería el primer parámetro?\\n"`})
            if a == {`""`}: # Valida que esté al menos el primer parámetro
                print({`"Bro no puedes hacer eso. Tienes que darme al menos un parámetro"`})
                continue # Se brinca todo el bucle para evitar errores
            
            a = int(a)
            cantidad_parametros = 1

            b = input({`"¿Cuál sería el segundo parámetro?\\n"`})
            if b != {`""`}:
                b = int(b)
                cantidad_parametros = 2

                c = input({`"¿Cuál sería el tercer parámetro?\\n"`})
                if c != {`""`}:
                    c = int(c)
                    cantidad_parametros = 3

                orden = None
                if cantidad_parametros == 1:
                    orden = range(a)
                elif cantidad_parametros == 2:
                    orden = range(a, b)
                elif cantidad_parametros == 3:
                    orden = range(a, b, c)

                print({`"Aquí está tu orden:"`})
                for numero in orden:
                    print(numero)
                print({`"¡Espero que la disfrutes!"`})">
                    <div class="explanation">
                        <Card>
                            <div class="layout">
                                <img src={Info} alt="Icono de información">
                                <p>Por último, hay que añadir el bucle</p>
                            </div>
                        </Card>
                    </div>
                </StepwiseCode>
            </div>
        </Background>
    </section>
    <section data-transition="fade">
        <Background image={BgImage} blur tint="rgba(0, 0, 0, 0.5)">
            <h3>Ejercicios Adicionales</h3>
            <div class="content" style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 16px;">
                <Card>
                    <p>En vez de preguntar por la cantidad de computadoras, ¿cómo puedes hacer que este programa se <b>repita infinitamente</b>?</p>
                </Card>
                <Card>
                    <p>¿Cómo puedes hacer que el programa se <b>repita hasta que ya no haya más clientes</b>?</p>
                </Card>
            </div>
        </Background>
    </section>
</section>

<style>
    .content
    {
        width: 1200px;
        height: 100%;
    }

    .explanation
    {
        display: flex;
        font-size: 2rem;
        margin-top: 2rem;
    }

    .explanation .layout
    {
        display: flex;
        align-items: center;
        text-align: left;
        gap: 1rem;
    }

    .explanation .layout img
    {
        height: 3rem;
        margin: 0;
    }
</style>