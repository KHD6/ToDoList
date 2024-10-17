const quotes = [
    {
        quote: '나는 생각한다, 고로 존재한다.',
        author: 'René Descartes'
    },
    {
        quote: '세상에 변하지 않는 유일한 것은 변화이다.',
        author: 'Heraclitus'
    },
    {
        quote: '인생은 10%는 일어나는 일이고, 90%는 그것에 어떻게 반응하는가에 달려 있다.',
        author: 'Charles R. Swindoll'
    },
    {
        quote: '행복은 우리 안에 있다.',
        author: 'Leo Tolstoy'
    },
    {
        quote: '성공은 실패를 거듭할 수 있는 능력이다.',
        author: 'Winston Churchill'
    },
    {
        quote: '길을 잃는다는 것은 곧 새로운 길을 찾는 것이다.',
        author: 'Eastern Proverb'
    },
    {
        quote: '어둠을 탓하기보다는 작은 촛불 하나를 켜는 것이 낫다.',
        author: 'Confucius'
    },
    {
        quote: '인내는 쓰지만 그 열매는 달다.',
        author: 'Jean-Jacques Rousseau'
    },
    {
        quote: '나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.',
        author: 'Ralph Waldo Emerson'
    },
    {
        quote: '하루하루를 인생의 마지막 날처럼 살아라.',
        author: 'Steve Jobs'
    },
    {
        quote: '행복은 방향이지 목적지가 아니다.',
        author: 'Socrates'
    },
    {
        quote: '아는 것이 힘이다.',
        author: 'Francis Bacon'
    },
    {
        quote: '시작이 반이다.',
        author: 'Aristotle'
    },
    {
        quote: '우리의 삶은 우리가 생각하는 대로 이루어진다.',
        author: 'Mahatma Gandhi'
    },
    {
        quote: '성공이란 계속해서 실패에도 불구하고 열정을 잃지 않는 것이다.',
        author: 'Winston Churchill'
    },
    {
        quote: '삶이 있는 한 희망은 있다.',
        author: 'Cicero'
    },
    {
        quote: '마음이 가는 곳에 에너지가 흐른다.',
        author: 'Tony Robbins'
    },
    {
        quote: '지식은 인간이 가질 수 있는 가장 강력한 무기이다.',
        author: 'Nelson Mandela'
    },
    {
        quote: '행복한 사람은 시간을 잊고, 불행한 사람은 시간을 기억한다.',
        author: 'Arthur Schopenhauer'
    },
    {
        quote: '성공의 비밀은 목적의 일관성에 있다.',
        author: 'Benjamin Disraeli'
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
const todaysQuote = quotes[Math.floor(Math.random() * 100) % quotes.length]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;