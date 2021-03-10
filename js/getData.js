const URL = "https://opentdb.com/api.php?amount=10&category=9&type=multiple";
async function getData() {
    const response = await fetch(URL);
    const data = await response.json();
    let items = data.results;
    items = items.map(item => {
        const question = item.question;
        const a = item.correct_answer;
        const correct = "a";
        const b = item.incorrect_answers[0];
        const c = item.incorrect_answers[1];
        const d = item.incorrect_answers[2];
        return {
            question, a, b, c, d, correct
        }
    });
    return items;
}

export default getData;