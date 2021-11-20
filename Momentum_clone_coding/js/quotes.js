const quotes = [
  {
    quote:
      "나이를 먹는 것 자체는 그다지 겁나지 않았다. 나이를 먹는 것은 내 책임이 아니다. 그것은 어쩔 수 없는 일이다. 내가 두려웠던 것은, 어떠한 시기에 달성되어야만 할 것이 달성되지 못한 채 그 시기가 지나가 버리고 마는 것이다.",
    author: "무라카미 하루키",
  },
  {
    quote: "당신을 다른 사람과 비교하지 말고 오직 어제의 당신하고만 비교하라",
    author: "조던 피터슨",
  },
  {
    quote: "박수칠 때 떠나라",
    author: "unknown",
  },
  {
    quote: "모든 국가는 그에 걸맞는 정부를 가진다",
    author: "unknown",
  },
  {
    quote: "소년이여, 야망을 가져라",
    author: "unknown",
  },
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength",
    author: "Arnold Schwarzeneggar",
  },
  {
    quote: "It is kind of fun to do the impossible",
    author: "Walt Disney",
  },
  {
    quote: "신은 죽었다.",
    author: "Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "If you don't get out of the box you've been rased in, you won't understand how much bigger the world is",
    author: "Angelina Jolie",
  },
  {
    quote: "A person who never made a mistake never tried anything new",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
