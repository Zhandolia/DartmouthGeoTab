// Define an array of objects containing country names and their flag image URLs
const countries = [
    { name: 'Australia', flagUrl: 'https://flagcdn.com/au.svg' },
    { name: 'Brazil', flagUrl: 'https://flagcdn.com/br.svg' },
    { name: 'China', flagUrl: 'https://flagcdn.com/cn.svg' },
    { name: 'France', flagUrl: 'https://flagcdn.com/fr.svg' },
    { name: 'India', flagUrl: 'https://flagcdn.com/in.svg' },
    { name: 'Japan', flagUrl: 'https://flagcdn.com/jp.svg' },
    { name: 'Mexico', flagUrl: 'https://flagcdn.com/mx.svg' },
    { name: 'Russia', flagUrl: 'https://flagcdn.com/ru.svg' },
    { name: 'South Africa', flagUrl: 'https://flagcdn.com/za.svg' },
    { name: 'United States', flagUrl: 'https://flagcdn.com/us.svg' }
  ];
  
  // Define a function to shuffle the countries array randomly
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffle the countries array randomly
  const shuffledCountries = shuffleArray(countries);
  
  // Define a variable to store the current question index
  let currentQuestionIndex = 0;
  
  // Define a function to render the current question
  function renderQuestion() {
    // Get the current question object from the shuffledCountries array
    const currentQuestion = shuffledCountries[currentQuestionIndex];
    
    // Render the country name and flag image
    const flagImage = `<img src="${currentQuestion.flagUrl}" alt="${currentQuestion.name} flag" />`;
    const questionText = `Which country does this flag belong to?`;
    const questionHtml = `
      <div class="question">
        <p>${flagImage}</p>
        <p>${questionText}</p>
      </div>
    `;
    document.getElementById('quiz').innerHTML = questionHtml;
  }
  
  // Define a function to check the user's answer
  function checkAnswer(answer) {
    // Get the current question object from the shuffledCountries array
    const currentQuestion = shuffledCountries[currentQuestionIndex];
    
    // Check if the answer is correct and increment the score if it is
    if (answer === currentQuestion.name) {
      alert('Correct!');
      // increment score
    } else {
      alert(`Sorry, the correct answer is ${currentQuestion.name}.`);
    }
    
    // Move on to the next question
    currentQuestionIndex++;
    
    // Check if the quiz is over and show the final score if it is
    if (currentQuestionIndex === shuffledCountries.length) {
      alert(`Quiz over! Your final score is X out of ${shuffledCountries.length}.`);
    } else {
      renderQuestion();
    }
  }
  
  // Call the renderQuestion function to display the first question
  renderQuestion();
  