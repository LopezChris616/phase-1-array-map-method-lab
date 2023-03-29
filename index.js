const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const tutorialCapitalized = tutorials.map(tutorial => {
    const splitUp = tutorial.split(" ");
    
    const capitalFirst = splitUp.map(word => {
      const capitalized = word.replace(word[0], word[0].toUpperCase());
      return capitalized;
    });
  
    const joinTogether = capitalFirst.join(" ");
    return joinTogether;
  });

  return tutorialCapitalized;
}
