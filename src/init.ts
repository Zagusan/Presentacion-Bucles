import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown'
import Highlight from 'reveal.js/plugin/highlight/highlight'
import Notes from 'reveal.js/plugin/notes/notes'

interface HighlightInterface extends Reveal.Plugin
{
    highlightBlock(element: HTMLElement): void 
}

let highlight: HighlightInterface;

function initialize()
{
    Reveal.initialize({
    hash: true,

    width: 1280,
    height: 720,
    maxScale: 4.0,
    margin: 0,
    center: false,
    progress: false,
    slideNumber: "c/t",
    backgroundTransition: "fade",

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ Markdown, Highlight, Notes ]
}).then(() => {
    highlight = Reveal.getPlugin("highlight");
});
}

export { initialize, highlight }