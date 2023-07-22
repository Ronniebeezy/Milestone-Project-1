

var myQuestions = [
    
        {
            question: "What is Kobe bryants Career High?",
            answers: {
                a: '63',
                b: '81',
                c: '58'
            },
            correctAnswer: 'b'
        },
        {
            question: "What year did the US Olympincs Mens basketball team, referred to as the Dream Team, win the olympic gold medal? ",
            answers: {
                a: '1988',
                b: '1996',
                c: '1992'
            },
            correctAnswer: 'c'
        },
        {
            question: "Known as the last dance, which year was Michael Jordans final year with the Chicago Bulls?",
            answers: {
                a: '1998',
                b: '1994',
                c: '2003'
            },
            correctAnswer: 'a'
        },
        {
            question: "This Dodgers and MLB Hall of Famer, wore the now retired number 42 and was the first African American player to play in the MLB ",
            answers: {
                a: 'Hank Aaron',
                b: 'Jackie Robison',
                c: 'Willie Mays'
            },
            correctAnswer: 'b'
        },
        {
            question: "Becoming the only rookie in NBA finals history to win finals MVP, which year did Lakers legend Magic Johnson accomplish this feat?",
            answers: {
                a: '1978',
                b: '1982',
                c: '1980'
            },
            correctAnswer: 'c'
        }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // Store the output for the questions
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        
        answers = [];
  
        // for each possible answer...
        for(letter in questions[i].answers){
  
          //added a html radio
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // added question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // Combined the output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find the answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show the results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }