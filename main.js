const verbList = [
  'avoir','être','faire','prendre','finir','regarder','devoir','aller',
  'arriver','rester','parler','venir','s\'asseoir','manger','se réveiller',
  'appeler','acheter','créer','lire','mettre','voir','boire','savoir','écrire',
  'rentrer','dormir','partir','ouvrir','apprendre','sortir','vouloir','pouvoir',
  'falloir','tenir','pleuvoir','valoir','dire','tomber','rendre','suivre',
  'sentir','croire','vivre','entendre','connaître','revenir','comprendre',
  'sembler','laisser','répondre','penser','envoyer','recevoir','donner','marcher',
  'aimer','demander'
];
const verbList_backup = [
  'trouver','passer'
];
const subjectList = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
const subjectList2 = ['tu', 'nous', 'vous'];
const typeList = ['直接法', '条件法', '接続法(queから入力)', '命令法'];
const typeList2 = ['直接法', '条件法', '接続法(queから入力)'];
const tenseList = ['現在', '複合過去', '半過去', '大過去', '単純未来'];

let randomVerb = Math.floor(Math.random() * verbList.length);
let randomSubject = Math.floor(Math.random() * subjectList.length);
let randomSubject2 = Math.floor(Math.random() * subjectList2.length);
let randomType = Math.floor(Math.random() * typeList.length);
let randomTense = Math.floor(Math.random() * tenseList.length);

const verb = document.getElementById('verb');
const subject = document.getElementById('subject');
const type = document.getElementById('type');
const tense = document.getElementById('tense');
// function showVerb() {
//   $('#verb').text(verbList[randomVerb]);
// }
// function showType() {
//   $('#type').text(typeList[randomType]);
// }
// function showTense() {
//   if ($('#type').textContent != '直接法') {
//     $('#tense').text('現在');
//   } else {
//     $('#tense').text(tenseList[randomTense]);
//   }
// }
// function showSubject() {
//   if ($('#type').textContent === '命令法') {
//     $('#subject').text(subjectList2[randomSubject2]);
//   } else {
//     $('#subject').text(subjectList[randomSubject]);
//   }
// }

let accent;
let input;

//アクサン表からクリック入力
$(function() {
  $('td').on('click', function() {
    accent = $(this).text();
    input = String($('#input').val());
    $('#input').val(input + accent);
    $('#input').focus();
  });
});

//1問目の表示
verb.textContent = verbList[Math.floor(Math.random() * verbList.length)];
//il限定の動詞の場合
//falloirまたはpleuvoirの場合
if (this.verb.textContent === 'falloir' || this.verb.textContent === 'pleuvoir') {
  type.textContent = typeList2[Math.floor(Math.random() * typeList2.length)];
  subject.textContent = 'il';
  if (type.textContent != '直接法') {
    tense.textContent = ('現在');
  } else {
    tense.textContent = tenseList[Math.floor(Math.random() * tenseList.length)];
  }
//一般動詞の場合
} else {
  type.textContent = typeList[Math.floor(Math.random() * typeList.length)];
  if (this.type.textContent === '命令法') {
    subject.textContent = subjectList2[Math.floor(Math.random() * subjectList2.length)];
  } else {
    subject.textContent = subjectList[Math.floor(Math.random() * subjectList.length)];
  }
  if (type.textContent != '直接法') {
    tense.textContent = ('現在');
  } else {
    tense.textContent = tenseList[Math.floor(Math.random() * tenseList.length)];
  }
}

const num = document.getElementById('num');
let qnumber = 1;

//変数宣言
let correctAns;
let score = 0;

//正解判定
function pass() {
  score++;
  $('.result').text('正解');
  $('.wrong').text('');
};
//正解表示
function showCorrect() {
  $('.result').text('不正解');
  $('.wrong').text('正解は: ' + correctAns);
};

//解答ボタンを押したときの処理
$(function() {
  $('#answer').on('click', function() {
    correctAns = getCorrect();
    console.log($('#input').val());
    console.log(correctAns);
    console.log(verb.textContent );
    console.log(subject.textContent);
    console.log(type.textContent);
    console.log(tense.textContent)
    if (type.textContent === '命令法') {
      if (subject.textContent === 'tu') {
        if ($('#input').val().toLowerCase() === correctAns ||
          $('#input').val().toLowerCase() === `${correctAns}-toi`) {
          pass();
        } else {
          showCorrect();
        }
      } else {
        if ($('#input').val().toLowerCase() === correctAns ||
          $('#input').val().toLowerCase() === `${correctAns}-${subject.textContent}`) {
          pass();
        } else {
          showCorrect();
        }
      }
    } else {
      if ($('#input').val().toLowerCase() === correctAns) {
        pass();
      } else {
        showCorrect();
      }
    }
    if (qnumber === 20) {
      $('#answer').css('display', 'none');
      $('#next').css('display', 'none');
      $('#score').text(`20問中${score}問正解`);
      $('#reload').css('display', 'block');
    }
  });
});

//次の問題ボタンを押したときの処理
$(function() {
  $('#next').on('click', function() {
    if (qnumber < 20) {
      qnumber++;
      num.textContent = qnumber;
      $('#change').fadeOut();
      setTimeout(function() {
        verb.textContent = verbList[Math.floor(Math.random() * verbList.length)];
        //il限定の動詞の場合
        //falloirまたはpleuvoirの場合
        if (this.verb.textContent === 'falloir' || this.verb.textContent === 'pleuvoir') {
          type.textContent = typeList2[Math.floor(Math.random() * typeList2.length)];
          subject.textContent = 'il';
          if (type.textContent != '直接法') {
            tense.textContent = ('現在');
          } else {
            tense.textContent = tenseList[Math.floor(Math.random() * tenseList.length)];
          }
        //一般動詞の場合
        } else {
          type.textContent = typeList[Math.floor(Math.random() * typeList.length)];
          if (type.textContent === '命令法') {
            subject.textContent = subjectList2[Math.floor(Math.random() * subjectList2.length)];
          } else {
            subject.textContent = subjectList[Math.floor(Math.random() * subjectList.length)];
          }
          if (type.textContent != '直接法') {
            tense.textContent = ('現在');
          } else {
            tense.textContent = tenseList[Math.floor(Math.random() * tenseList.length)];
          }
        }
      },400);
      $('#change').fadeIn();
      $('.result').text('');
      $('.wrong').text('');
      $('#input').val('');
      $('#input').focus();
    }
  });
});
