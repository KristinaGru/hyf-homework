const btn = document.getElementById('submit');

async function getResult(string) {
  const url = 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': happyKey,
      'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
    },
    body: new URLSearchParams({
      text: string
    })
  };

  try {
    return (await fetch(url, options)).json();
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener('click', async () => {
  const name = document.getElementById('inputName').value;
  const msg = document.getElementById('msg').value;
  const happy = document.getElementById('happy');
  const sad = document.getElementById('sad');
  const neutral = document.getElementById('neutral');
  const result = (await getResult(msg)).type;
  if (!name || !msg) {
    alert('Enter your name and a message');
  } else {
    switch (result) {
      case 'positive':
        document.querySelectorAll('.happy').forEach((element) => {
          element.hidden = false;
        });
        document.querySelectorAll('.sad,.neutral').forEach((element) => {
          element.hidden = true;
        });
        happy.innerText = `Hey there ${name}. You are clearly happy! :)`;
        break;
      case 'negative':
        document.querySelectorAll('.sad').forEach((element) => {
          element.hidden = false;
        });
        document.querySelectorAll('.happy,.neutral').forEach((element) => {
          element.hidden = true;
        });
        sad.innerText = `I'm sorry ${name}. You are clearly sad! :(`;
        break;
      case 'neutral':
        document.querySelectorAll('.neutral').forEach((element) => {
          element.hidden = false;
        });
        document.querySelectorAll('.sad,.happy').forEach((element) => {
          element.hidden = true;
        });
        neutral.innerText = `Hello ${name}. You are so-so :|`;
        break;
    }
  }
});
