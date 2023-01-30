import { writable } from "svelte/store";

const PollStore = writable([
    {
      id: 1,
      question: 'PHP or Javascript?',
      answerA: "PHP",
      answerB: 'Javascript',
      votesA: 9,
      votesB: 15,
    },
  ])

export default PollStore;