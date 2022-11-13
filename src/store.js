import { writable } from "svelte/store";

export const polls = writable([
  {
    id: 1,
    question: "Pasta or Pizza",
    optionA: "Pasta",
    optionB: "Pizza",
    votesA: 10,
    votesB: 5,
  },
  {
    id: 2,
    question: "Is this website good?",
    optionA: "Yes",
    optionB: "Opposite of No",
    votesA: 23,
    votesB: 12,
  },
]);
