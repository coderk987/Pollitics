<script>
    import { polls } from './store.js';
    import PollCard from './PollCard.svelte';
    import {fade,slide,scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
</script>

<main>
    <div class="cards">
    {#each $polls as poll (poll.id)}
        <div class="item" in:fade out:scale|local animate:flip={{duration:500}}>
            <PollCard {poll} />
        </div>
    {/each}
    </div>
</main>

<style>
    main{
        display:flex;
        justify-content: center;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
    .cards{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5rem;
        width: 1100px;
        max-width: 90vw;
    }
</style>