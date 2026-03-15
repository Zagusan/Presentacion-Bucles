<script lang="ts">
    import Background from "../lib/Background.svelte";
    import StepwiseCode from "../lib/StepwiseCode.svelte";
</script>

<section>
    <section data-autoslide="2000" data-transition="fade">
        <Background blur fragment>
            <h3>El bucle <code>for</code></h3>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>for</code></h3>
            <StepwiseCode code="for">
                <p>Primero, se escribe la <b>palabra clave</b> <code><b>for</b></code></p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>for</code></h3>
            <StepwiseCode code="for numero">
                <p>Luego, se declara una variable</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>for</code></h3>
            <StepwiseCode 
            code="for numero in range(10):">
                <p>Se escribe <code><b>in range(10):</b></code></p>
                <p>El número dentro de los paréntesis es la cantidad de repeticiones</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>for</code></h3>
            <StepwiseCode 
            code="for numero in range(10):
        →→→→pass">
                <p>Se añade la indentación con <b>tab</b> o poniendo 4 espacios</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>for</code></h3>
            <StepwiseCode 
            code="for numero in range(10):
            # Imprime los números del 0 al 9
            print(numero))">
                <p>Se coloca dentro del bucle lo que se quiere repetir</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>for</code></h3>
            <StepwiseCode 
            code="for _ in range(10):
            # Imprime {"\"Hola\""} 10 veces
            print({"\"Hola\""})">
                <p>Por convención, se usa el nombre <b>"<code>_</code>"</b> para la variable si no se va a utilizar. No es obligatorio, pero añade claridad al código</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>for</code></h3>
            <StepwiseCode 
            code="numeros = [-1, 7, 5, 3]

        for numero in numeros:
            # Imprime -1, 7, 5, 3
            print(numero))">
                <p>Los bucles también pueden iterar sobre <b>listas</b>, pero veremos esto en una clase futura</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Espera un momento...</h3>
            <p>¿Exactamente qué es <b><code>range()</code>?</b></p>
        </Background>
    </section>
</section>