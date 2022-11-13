<script>
    import PollList from "./PollList.svelte"
    import PollAdd from "./PollAdd.svelte"

    let tab="li";
    function changeTab(){
        tab="li";
    }
</script>

<main>
    <div class="tabs">
        <h3 style="margin-right: 7rem;" on:click={()=>tab="li"} class:active="{tab=="li"}">Poll List</h3>
        <h3 on:click={()=>tab="add"} class:active="{tab=="add"}">Add Poll</h3>
    </div>
    {#if tab=="li"}
      <PollList/>
    {:else if tab=="add"}
      <PollAdd on:add={changeTab}/>
    {/if}
</main>

<style>
    .tabs{
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }
    h3{
        color: rgb(229, 229, 229);
        font-size: 2.3rem;
        transition: 0.2s ease;
    }
    .active{
        border-bottom: solid 1px rgb(212, 210, 210);
        font-size: 2.5rem;
        transition: 0.2s ease;
    }
</style>