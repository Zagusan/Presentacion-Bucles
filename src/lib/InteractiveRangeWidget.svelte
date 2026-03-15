<script lang="ts">
    import Card from "./Card.svelte";
    import OutputCard from "./OutputCard.svelte";

    import Terminal from "/terminal.svg";

    let input = $state("");

    // Igual funciona porque el objeto que lee error es el mismo que usa output
    let error = true;

    let output = $derived.by(() => {
        error = true;
        if (input.length === 0)
        {
            return "range() necesita al menos 1 parámetro";
        }

        if (/[^-0-9,\s]/.test(input))
        {
            return "Se encontraron caracteres no válidos";
        }

        let inputMatch = input.match(/,/g)?.length
        if (inputMatch && inputMatch > 2)
        {
            return "range() solo acepta 3 argumentos, pero se suministraron más";
        }

        let params = ["", "", ""];
        let buffer = ""
        let i = 0;
        for (const char of input)
        {
            if (/\s/.test(char)) continue;

            if (char === ",")
            {
                params[i] = buffer
                buffer = ""
                i++;
                continue;
            }

            if ((/^\d+$/.test(buffer.at(-1) || "") || char === input.at(-1)) && char === "-")
            {
                return "Colocamiento inválido del signo de menos (-)"
            }

            if (char === "-" || Number.isInteger(+char))
            {
                buffer += char;
                continue;
            }
        }
        params[i] = buffer

        let cleanedParams = params.filter(Boolean);
        let intParams = cleanedParams.map((param) => parseInt(param));

        let start = 0;
        let end = 0;
        let step = 0;
        
        switch (intParams.length)
        {
            case 1:
                start = 0;
                end = intParams[0];
                step = 1
                break;
            case 2:
                start = intParams[0];
                end = intParams[1];
                step = 1
                break;
            case 3:
                start = intParams[0];
                end = intParams[1];
                step = intParams[2];
                break;
        }

        let result = [];
        if (step === 0)
        {
            return `\"paso\" tiene que ser distinto a 0`;
        }
        if (step > 0)
        {
            // if (start > end) return `Si 'paso' [${step}] es positivo, 'inicio' [${start}] debe de ser menor que 'fin' [${end}]`;
            while (start < end)
            {
                result.push(start);
                start += step;
            }
        }
        if (step < 0)
        {
            // if (start < end) return `Si 'paso' [${step}] es negativo, 'inicio' [${start}] debe de ser mayor que 'fin' [${end}]`;
            while (end < start)
            {
                result.push(start);
                start += step;
            }
        }

        let resultString = result.map((val) => val.toString()).join(", ");

        if (resultString)
        {
            error = false;
        }
        else
        {
            resultString = "¡Qué vacío! Intenta cambiar los parámetros";
        }

        return resultString;
    });
</script>

<div class="layout">
    <div class="codeCard">
        <Card>
            <pre><code class="language-python" data-trim>
                for i in range
                    print(i, end=", ")
            </code></pre>
            <div class="inputContainer">
                (
                <input type="text" placeholder="inicio, fin, paso" bind:value={input}>
                ):
            </div>
        </Card>
    </div>
    <div class="outputCard">
        <OutputCard headerIcon={Terminal} headerText="Salida">
            <code class="output" class:error={error}>{output}</code>
        </OutputCard>
    </div>
</div>

<style>
    .layout
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 2rem;
        gap: 2rem;
    }

    .codeCard
    {
        font-size: 3rem;
    }

    .inputContainer
    {
        position: absolute;
        top: 27%;
        left: 51%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.55em;
    }

    input
    {
        field-sizing: content;
        min-width: 20px;
        max-width: 150px;
        background-color: #262626;
        color: #fff;
        border-width: 0;
        padding: 0.2em;
        font-size: 0.85em;
        border-radius: 0.5rem;
    }

    pre
    {
        width: min-content;
        padding-right: 80px;
    }

    pre code
    {
        background: transparent;
    }

    .output.error
    {
        color: #757575;
    }
</style>