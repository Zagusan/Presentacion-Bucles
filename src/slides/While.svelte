<script lang="ts">
    import Background from "../lib/Background.svelte";
    import StepwiseCode from "../lib/StepwiseCode.svelte";
</script>

<section>
    <section data-autoslide="2000" data-transition="fade">
        <Background blur fragment>
            <h3>El bucle <code>while</code></h3>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>while</code></h3>
            <StepwiseCode code="while">
                <p>Primero, se escribe la <b>palabra clave</b> <code><b>while</b></code></p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>while</code></h3>
            <StepwiseCode code="while condicion:">
                <p>Luego, se coloca una expresión o variable <b>booleana</b> seguida de dos puntos. El bucle continuará siempre y cuando esta sea verdadera</p>
                <p>(<code><b>condicion == True</b></code>)</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>while</code></h3>
            <StepwiseCode code="while True:">
                <p>Para crear un bucle infinito, se puede colocar <code><b>True</b></code></p>
                <p>Después de todo <code><b>True == True</b></code> siempre es verdadero</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>while</code></h3>
            <StepwiseCode 
            code="while True:
        →→→→pass">
                <p>Se añade la indentación con <b>tab</b> o poniendo 4 espacios</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>while</code></h3>
            <StepwiseCode 
            code="while True:
            # Recibe un nombre y dice hola
            nombre = input({"\"Nombre: \""})
            print(f{"\"¡Hola {nombre}!\""})">
                <p>Se coloca dentro del bucle lo que se quiere repetir</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>while</code></h3>
            <StepwiseCode 
            code="numero = 0
        
        while numero < 10:">
                <p>En este ejemplo, vamos a imprimir los números del 0 al 9 al comprobar que <code>numero</code> sea menor que 10</p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>while</code></h3>
            <StepwiseCode 
            code="numero = 0
        
        while numero < 10:
            print(numero)">
                <p>Se coloca dentro del bucle el <code><b>print()</b></code></p>
            </StepwiseCode>
        </Background>
    </section>
    <section data-auto-animate data-transition="fade">
        <Background blur tint="rgba(0, 0, 0, 0.4)">
            <h3>Cómo crear un bucle <code>while</code></h3>
            <StepwiseCode 
            code="numero = 0
        
        while numero < 10:
            print(numero)
            numero += 1">
                <p>Es <b>muy importante</b> colocar <code>numero += 1</code>. De lo contrario, el número siempre será menor a 10, creando un bucle infinito</p>
            </StepwiseCode>
        </Background>
    </section>
</section>