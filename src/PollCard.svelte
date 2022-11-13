<script>
    import {polls} from "./store";
    import {tweened} from "svelte/motion"

    export let poll;
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0;
    $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0;

    function handleVote(option,id){
        polls.update(curPolls=>{
            let copied=[...curPolls];
            let voted=copied.find((i)=>i.id==id);
            if(option=='a'){
                voted.votesA++;
            }
            if(option=='b'){
                voted.votesB++;
            }
            return copied;
        })
    }
    function handleDelete(){
    polls.update(curPolls => {
      return curPolls.filter(p => p.id!=poll.id);
    });
  };

  const tweenA=tweened(0);
  const tweenB=tweened(0);
  $: tweenA.set(percentA);
  $: tweenB.set(percentB);
</script>

<div class="poll">
    <h2>{poll.question}</h2>
    <div class="option" on:click={()=>handleVote('a',poll.id)}>
        <div class="A" style="width: {$tweenA}%">
            <div class="text" style="width: calc(100/{percentA}*100%)"><p>{poll.optionA}:{poll.votesA}</p></div>
        </div>
    </div>
    <div class="option" on:click={()=>handleVote('b',poll.id)}>
        <div class="B" style="width: {$tweenB}%">
            <div class="text" style="width: calc(100/{percentB}*100%)"><p>{poll.optionB}:{poll.votesB}</p></div>
        </div>
    </div>
    <div class="delete">
        <button on:click={handleDelete}>Delete</button>
    </div>
</div>

<style>
    h2{
        margin-bottom: 0.5em;
    }
    h2,p{
        color: whitesmoke;
        font-weight: bolder;
    }
    .poll{
        box-sizing: border-box;
        background-color: rgb(29, 29, 29);
        padding: 1em 1.5em;
        border-radius: 10px;
    }
    .option{
        margin: 1.2em 0;
        background-color: rgb(40, 40, 40);
        border-radius: 5px;
        width: 95%;
        -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
    }
    .A{
        padding: 0.4em 0.3em;
        background-color: rgb(247, 80, 114);
        border-left: 5px solid rgb(194, 20, 55);
        max-height: 40px;
    }
    .B{
        padding: 0.4em 0.3em;
        background-color: rgb(18, 212, 128);
        border-left: 5px solid rgb(10, 113, 68);
        word-break: keep-all;
        max-height: 40px;
    }
    .delete{
        text-align:center;
    }
    button{
        background-color:rgb(236, 40, 40);
        color: rgb(215, 215, 215);
        border: none;
        font-weight: bolder;
        padding: 0.5em 1em;
    }
</style>