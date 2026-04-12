console.log("Testing the test file");

function generateQuestions() {
    const pool = Array.from({ length: 109 }, (_, i) => i + 1);
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 50); // This will return just 50 numbers
}

const questionSet = generateQuestions();
console.log(questionSet);