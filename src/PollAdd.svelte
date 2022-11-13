<script>
    import { polls } from './store.js';
    import { createEventDispatcher } from 'svelte';
    import {slide} from 'svelte/transition';
    let q='';
    let a='';
    let b='';

    let dispatch = createEventDispatcher();
    let errors=['','',''];
    let valid = false;
    
    function addPoll(){
        valid=true;
        if(q.trim().length<5){
            valid=false;
            errors[0]="Question must be more than 5 characters"
        }else{
            errors[0]=''
        }

        if(a.trim().length<1){
            valid=false;
            errors[1]="Option A must not be empty"
        }else if(a.length>40){
            valid=false;
            errors[1]='Option A must not exceed 40'
        }else{
            errors[1]=''
        }

        if(b.trim().length<1){
            valid=false;
            errors[2]="Option B must not be empty"
        }else if(b.length>40){
            valid=false;
            errors[2]='Option B must not exceed 40'
        }else{
            errors[2]=''
        }
        
        if(valid){
        let poll= {id: Math.random(),question: q,optionA: a, optionB: b,votesA: 0, votesB:0};
        polls.update(curPolls=>{
            return [poll,...curPolls];
        })
        dispatch('add');
        }
    }
</script>

<div class="add" transition:slide="{{ duration: 800 }}">
    <form>
        <div class="inputs">
            <h3>Question: </h3>
            <input type="text" placeholder="eg: Do you like Coding?" bind:value={q} />
            <h3 class="invalid">{errors[0]}</h3>
            <h3>Option A: </h3>
            <input type="text" placeholder="eg: Yes!" bind:value={a}/>
            <h3 class="invalid">{errors[1]}</h3>
            <h3>Option B: </h3>
            <input type="text" placeholder="eg: No!" bind:value={b}/>
            <h3 class="invalid">{errors[2]}</h3>
            <button on:click|preventDefault={addPoll}>Add Poll</button>
        </div>
    </form>
</div>

<style>
    .add{
        display: flex;
        justify-content: center;
    }
    form{
        margin-top: 2rem;
        padding: 0.5rem;
        background-color: rgb(53, 53, 53);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
    }
    .inputs{
        margin: 1rem;
        display: flex;
        flex-direction: column;
        width: 500px;
        max-width: 90vw;
    }
    h3{
        color: rgb(220, 220, 220);
        font-weight: bolder;
        font-size: larger;
    }
    input{
        margin: 1.2rem 0;
        width: 100%;
        border-radius: 10px;
        padding: 0.5rem;
        padding-left: 0.7rem;
    }
    button{
        align-self: center;
        width: 20%;
        border-radius: 5px;
        background-color: rgb(18, 212, 128);
        border: none;
        font-weight: bolder;
    }
    .invalid{
        color: crimson;
        text-align: center;
    }
</style>