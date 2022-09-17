const verbList = [
  'avoir','être','faire','prendre','finir','regarder','devoir','aller',
  'arriver','rester','parler'
];
const verbList_backup = [
  'savoir', 'manger', 'comprendre','dormir',
  'marcher', 'apprendre', 'rentrer', 'revenir', 'tomber'
];
const subjectList = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
const subjectList2 = ['tu', 'nous', 'vous'];
const typeList = ['直接法', '条件法', '接続法(queから入力)', '命令法'];
const tenseList = ['現在', '複合過去', '半過去', '大過去', '単純未来'];

let randomVerb = Math.floor(Math.random() * verbList.length);
let randomSubject = Math.floor(Math.random() * subjectList.length);
let randomSubject2 = Math.floor(Math.random() * subjectList2.length);
let randomType = Math.floor(Math.random() * typeList.length); 
let randomTense = Math.floor(Math.random() * tenseList.length);

// const verb = document.getElementById('verb');
// const subject = document.getElementById('subject');
// const type = document.getElementById('type');
// const tense = document.getElementById('tense');
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

const num = document.getElementById('num');
let qnumber = 1;

//正解の組み合わせ
function getCorrect() {
  //avoir
  if (verb.textContent === 'avoir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'ai';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai eu';
        } else if (tense.textContent === '半過去') {
          return 'j\'avais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais eu';
        } else if (tense.textContent === '単純未来') {
          return 'j\'aurai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'aie';
      } else if (type.textContent === '条件法') {
        return 'j\'aurais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu as';
        } else if (tense.textContent === '複合過去') {
          return 'tu as eu';
        } else if (tense.textContent === '半過去') {
          return 'tu avais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais eu';
        } else if (tense.textContent === '単純未来') {
          return 'tu auras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu aies';
      } else if (type.textContent === '条件法') {
        return 'tu aurais';
      } else if (type.textContent === '命令法') {
        return 'aie'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il a';
        } else if (tense.textContent === '複合過去') {
          return 'il a eu';
        } else if (tense.textContent === '半過去') {
          return 'il avait';
        } else if (tense.textContent === '大過去') {
          return 'il avait eu';
        } else if (tense.textContent === '単純未来') {
          return 'il aura';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il ait';
      } else if (type.textContent === '条件法') {
        return 'il aurait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous avons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons eu';
        } else if (tense.textContent === '半過去') {
          return 'nous avions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions eu';
        } else if (tense.textContent === '単純未来') {
          return 'nous aurons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous ayons';
      } else if (type.textContent === '条件法') {
        return 'nous aurions';
      } else if (type.textContent === '命令法') {
        return 'ayons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous avez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez eu';
        } else if (tense.textContent === '半過去') {
          return 'vous aviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez eu';
        } else if (tense.textContent === '単純未来') {
          return 'vous aurez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous ayez';
      } else if (type.textContent === '条件法') {
        return 'vous auriez';
      } else if (type.textContent === '命令法') {
        return 'ayez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils ont';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont eu';
        } else if (tense.textContent === '半過去') {
          return 'ils avaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient eu';
        } else if (tense.textContent === '単純未来') {
          return 'ils auront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils aient';
      } else if (type.textContent === '条件法') {
        return 'ils auraient';
      }
    }
  //être
  } else if (verb.textContent === 'être') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je suis';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai été';
        } else if (tense.textContent === '半過去') {
          return 'j\'étais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais été';
        } else if (tense.textContent === '単純未来') {
          return 'je serai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je sois';
      } else if (type.textContent === '条件法') {
        return 'je serais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu es';
        } else if (tense.textContent === '複合過去') {
          return 'tu as été';
        } else if (tense.textContent === '半過去') {
          return 'tu étais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais été';
        } else if (tense.textContent === '単純未来') {
          return 'tu seras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu sois';
      } else if (type.textContent === '条件法') {
        return 'tu serais';
      } else if (type.textContent === '命令法') {
        return 'sois'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il est';
        } else if (tense.textContent === '複合過去') {
          return 'il a été';
        } else if (tense.textContent === '半過去') {
          return 'il était';
        } else if (tense.textContent === '大過去') {
          return 'il avait été';
        } else if (tense.textContent === '単純未来') {
          return 'il sera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il soit';
      } else if (type.textContent === '条件法') {
        return 'il serait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous sommes';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons été';
        } else if (tense.textContent === '半過去') {
          return 'nous étions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions été';
        } else if (tense.textContent === '単純未来') {
          return 'nous serons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous soyons';
      } else if (type.textContent === '条件法') {
        return 'nous serions';
      } else if (type.textContent === '命令法') {
        return 'soyons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous êtes';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez été';
        } else if (tense.textContent === '半過去') {
          return 'vous étiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez été';
        } else if (tense.textContent === '単純未来') {
          return 'vous serez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous soyez';
      } else if (type.textContent === '条件法') {
        return 'vous seriez';
      } else if (type.textContent === '命令法') {
        return 'soyez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils sont';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont été';
        } else if (tense.textContent === '半過去') {
          return 'ils étaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient été';
        } else if (tense.textContent === '単純未来') {
          return 'ils seront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils soient';
      } else if (type.textContent === '条件法') {
        return 'ils seraient';
      }
    }
  //faire
  } else if (verb.textContent === 'faire') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je fais';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai fait';
        } else if (tense.textContent === '半過去') {
          return 'je faisais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais fait';
        } else if (tense.textContent === '単純未来') {
          return 'je ferai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je fasse';
      } else if (type.textContent === '条件法') {
        return 'je ferais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu fais';
        } else if (tense.textContent === '複合過去') {
          return 'tu as fait';
        } else if (tense.textContent === '半過去') {
          return 'tu faisais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais fait';
        } else if (tense.textContent === '単純未来') {
          return 'tu feras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu fasses';
      } else if (type.textContent === '条件法') {
        return 'tu ferais';
      } else if (type.textContent === '命令法') {
        return 'fais'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il fait';
        } else if (tense.textContent === '複合過去') {
          return 'il a fait';
        } else if (tense.textContent === '半過去') {
          return 'il faisait';
        } else if (tense.textContent === '大過去') {
          return 'il avait fait';
        } else if (tense.textContent === '単純未来') {
          return 'il fera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il fasse';
      } else if (type.textContent === '条件法') {
        return 'il ferait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous faisons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons fait';
        } else if (tense.textContent === '半過去') {
          return 'nous faisions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions fait';
        } else if (tense.textContent === '単純未来') {
          return 'nous ferons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous fassions';
      } else if (type.textContent === '条件法') {
        return 'nous ferions';
      } else if (type.textContent === '命令法') {
        return 'faisons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous faites';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez fait';
        } else if (tense.textContent === '半過去') {
          return 'vous faisiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez fait';
        } else if (tense.textContent === '単純未来') {
          return 'vous ferez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous fassiez';
      } else if (type.textContent === '条件法') {
        return 'vous feriez';
      } else if (type.textContent === '命令法') {
        return 'faites'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils font';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont fait';
        } else if (tense.textContent === '半過去') {
          return 'ils faisaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient fait';
        } else if (tense.textContent === '単純未来') {
          return 'ils feront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils fassent';
      } else if (type.textContent === '条件法') {
        return 'ils feraient';
      }
    }
  //prendre
  } else if (verb.textContent === 'prendre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je prends';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai pris';
        } else if (tense.textContent === '半過去') {
          return 'je prenais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais pris';
        } else if (tense.textContent === '単純未来') {
          return 'je prendrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je prenne';
      } else if (type.textContent === '条件法') {
        return 'je prendrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu prends';
        } else if (tense.textContent === '複合過去') {
          return 'tu as pris';
        } else if (tense.textContent === '半過去') {
          return 'tu prenais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais pris';
        } else if (tense.textContent === '単純未来') {
          return 'tu prendras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu prennes';
      } else if (type.textContent === '条件法') {
        return 'tu prendrais';
      } else if (type.textContent === '命令法') {
        return 'prends'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il prend';
        } else if (tense.textContent === '複合過去') {
          return 'il a pris';
        } else if (tense.textContent === '半過去') {
          return 'il prenait';
        } else if (tense.textContent === '大過去') {
          return 'il avait pris';
        } else if (tense.textContent === '単純未来') {
          return 'il prendra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il prenne';
      } else if (type.textContent === '条件法') {
        return 'il prendrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous prenons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons pris';
        } else if (tense.textContent === '半過去') {
          return 'nous prenions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions pris';
        } else if (tense.textContent === '単純未来') {
          return 'nous prendrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous prenions';
      } else if (type.textContent === '条件法') {
        return 'nous prendrions';
      } else if (type.textContent === '命令法') {
        return 'prenons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous prenez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez pris';
        } else if (tense.textContent === '半過去') {
          return 'vous preniez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez pris';
        } else if (tense.textContent === '単純未来') {
          return 'vous prendrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous preniez';
      } else if (type.textContent === '条件法') {
        return 'vous prendriez';
      } else if (type.textContent === '命令法') {
        return 'prenez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils prennent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont pris';
        } else if (tense.textContent === '半過去') {
          return 'ils prenions';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient pris';
        } else if (tense.textContent === '単純未来') {
          return 'ils prendront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils prennent';
      } else if (type.textContent === '条件法') {
        return 'ils prendraient';
      }
    }
  //finir
  } else if (verb.textContent === 'finir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je finis';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai fini';
        } else if (tense.textContent === '半過去') {
          return 'je finissais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais fini';
        } else if (tense.textContent === '単純未来') {
          return 'je finirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je finisse';
      } else if (type.textContent === '条件法') {
        return 'je finirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu finis';
        } else if (tense.textContent === '複合過去') {
          return 'tu as fini';
        } else if (tense.textContent === '半過去') {
          return 'tu finissais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais fini';
        } else if (tense.textContent === '単純未来') {
          return 'tu finiras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu finisses';
      } else if (type.textContent === '条件法') {
        return 'tu finirais';
      } else if (type.textContent === '命令法') {
        return 'finis'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il finit';
        } else if (tense.textContent === '複合過去') {
          return 'il a fini';
        } else if (tense.textContent === '半過去') {
          return 'il finissait';
        } else if (tense.textContent === '大過去') {
          return 'il avait fini';
        } else if (tense.textContent === '単純未来') {
          return 'il finira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il finisse';
      } else if (type.textContent === '条件法') {
        return 'il finirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous finissons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons fini';
        } else if (tense.textContent === '半過去') {
          return 'nous finissions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions fini';
        } else if (tense.textContent === '単純未来') {
          return 'nous finirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous finissions';
      } else if (type.textContent === '条件法') {
        return 'nous finirions';
      } else if (type.textContent === '命令法') {
        return 'finissons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous finissez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez fini';
        } else if (tense.textContent === '半過去') {
          return 'vous finissiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez fini';
        } else if (tense.textContent === '単純未来') {
          return 'vous finirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous finissiez';
      } else if (type.textContent === '条件法') {
        return 'vous finiriez';
      } else if (type.textContent === '命令法') {
        return 'finissez';
      } else if (type.textContent === '命令法') {
        return 'finissez-vous';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils finissent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont fini';
        } else if (tense.textContent === '半過去') {
          return 'ils finissaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient fini';
        } else if (tense.textContent === '単純未来') {
          return 'ils finiront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils finissent';
      } else if (type.textContent === '条件法') {
        return 'ils finiraient';
      }
    }
  //regarder
  } else if (verb.textContent === 'regarder') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je regarde';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai regardé';
        } else if (tense.textContent === '半過去') {
          return 'je regardais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais regardé';
        } else if (tense.textContent === '単純未来') {
          return 'je regarderai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je regarde';
      } else if (type.textContent === '条件法') {
        return 'je regarderais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu regardes';
        } else if (tense.textContent === '複合過去') {
          return 'tu as regardé';
        } else if (tense.textContent === '半過去') {
          return 'tu regardais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais regardé';
        } else if (tense.textContent === '単純未来') {
          return 'tu regarderas';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu regardes';
      } else if (type.textContent === '条件法') {
        return 'tu regarderais';
      } else if (type.textContent === '命令法') {
        return 'regarde'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il regarde';
        } else if (tense.textContent === '複合過去') {
          return 'il a regardé';
        } else if (tense.textContent === '半過去') {
          return 'il regardait';
        } else if (tense.textContent === '大過去') {
          return 'il avait regardé';
        } else if (tense.textContent === '単純未来') {
          return 'il regardera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il regarde';
      } else if (type.textContent === '条件法') {
        return 'il regarderait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous regardons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons regardé';
        } else if (tense.textContent === '半過去') {
          return 'nous regardions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions regardé';
        } else if (tense.textContent === '単純未来') {
          return 'nous regarderons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous regardions';
      } else if (type.textContent === '条件法') {
        return 'nous regarderions';
      } else if (type.textContent === '命令法') {
        return 'regardons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous regardez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez regardé';
        } else if (tense.textContent === '半過去') {
          return 'vous regardiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez regardé';
        } else if (tense.textContent === '単純未来') {
          return 'vous regarderez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous regardiez';
      } else if (type.textContent === '条件法') {
        return 'vous regarderiez';
      } else if (type.textContent === '命令法') {
        return 'regardez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils fregardent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont regardé';
        } else if (tense.textContent === '半過去') {
          return 'ils regardaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient regardé';
        } else if (tense.textContent === '単純未来') {
          return 'ils regarderont';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils regardent';
      } else if (type.textContent === '条件法') {
        return 'ils regarderaient';
      }
    }
  //devoir
  } else if (verb.textContent === 'devoir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je dois';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai dû';
        } else if (tense.textContent === '半過去') {
          return 'je devais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais dû';
        } else if (tense.textContent === '単純未来') {
          return 'je devrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je doive';
      } else if (type.textContent === '条件法') {
        return 'je devrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu dois';
        } else if (tense.textContent === '複合過去') {
          return 'tu as dû';
        } else if (tense.textContent === '半過去') {
          return 'tu devais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais dû';
        } else if (tense.textContent === '単純未来') {
          return 'tu devras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu doives';
      } else if (type.textContent === '条件法') {
        return 'tu devrais';
      } else if (type.textContent === '命令法') {
        return 'dois'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il doit';
        } else if (tense.textContent === '複合過去') {
          return 'il a dû';
        } else if (tense.textContent === '半過去') {
          return 'il devait';
        } else if (tense.textContent === '大過去') {
          return 'il avait dû';
        } else if (tense.textContent === '単純未来') {
          return 'il devra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il doive';
      } else if (type.textContent === '条件法') {
        return 'il devrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous devons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons dû';
        } else if (tense.textContent === '半過去') {
          return 'nous devions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions dû';
        } else if (tense.textContent === '単純未来') {
          return 'nous devrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous devions';
      } else if (type.textContent === '条件法') {
        return 'nous devrions';
      } else if (type.textContent === '命令法') {
        return 'devons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous devez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez dû';
        } else if (tense.textContent === '半過去') {
          return 'vous deviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez dû';
        } else if (tense.textContent === '単純未来') {
          return 'vous devrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous deviez';
      } else if (type.textContent === '条件法') {
        return 'vous devriez';
      } else if (type.textContent === '命令法') {
        return 'devez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils doivent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont dû';
        } else if (tense.textContent === '半過去') {
          return 'ils devaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient dû';
        } else if (tense.textContent === '単純未来') {
          return 'ils devront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils doivent';
      } else if (type.textContent === '条件法') {
        return 'ils devraient';
      }
    }
  //aller
  } else if (verb.textContent === 'aller') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je vais';
        } else if (tense.textContent === '複合過去') {
          return 'jesuis allé';
        } else if (tense.textContent === '半過去') {
          return 'j\'allais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais allé';
        } else if (tense.textContent === '単純未来') {
          return 'j\'irai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'aille';
      } else if (type.textContent === '条件法') {
        return 'j\'irais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu vas';
        } else if (tense.textContent === '複合過去') {
          return 'tu es allé';
        } else if (tense.textContent === '半過去') {
          return 'tu allais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais allé';
        } else if (tense.textContent === '単純未来') {
          return 'tu iras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu ailles';
      } else if (type.textContent === '条件法') {
        return 'tu irais';
      } else if (type.textContent === '命令法') {
        return 'va'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il va';
        } else if (tense.textContent === '複合過去') {
          return 'il est allé';
        } else if (tense.textContent === '半過去') {
          return 'il allait';
        } else if (tense.textContent === '大過去') {
          return 'il était allé';
        } else if (tense.textContent === '単純未来') {
          return 'il ira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il aille';
      } else if (type.textContent === '条件法') {
        return 'il irait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous allons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes allés';
        } else if (tense.textContent === '半過去') {
          return 'nous allions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions allés';
        } else if (tense.textContent === '単純未来') {
          return 'nous irons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous allions';
      } else if (type.textContent === '条件法') {
        return 'nous irions';
      } else if (type.textContent === '命令法') {
        return 'allons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous allez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes allé';
        } else if (tense.textContent === '半過去') {
          return 'vous alliez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez allé';
        } else if (tense.textContent === '単純未来') {
          return 'vous irez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous alliez';
      } else if (type.textContent === '条件法') {
        return 'vous iriez';
      } else if (type.textContent === '命令法') {
        return 'allez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils vont';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont allés';
        } else if (tense.textContent === '半過去') {
          return 'ils allaient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient allés';
        } else if (tense.textContent === '単純未来') {
          return 'ils iront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils aillent';
      } else if (type.textContent === '条件法') {
        return 'ils iraient';
      }
    }
  //arriver
  } else if (verb.textContent === 'arriver') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'arrive';
        } else if (tense.textContent === '複合過去') {
          return 'je suis arrivé';
        } else if (tense.textContent === '半過去') {
          return 'j\'arrivais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais arrivé';
        } else if (tense.textContent === '単純未来') {
          return 'j\'arriverai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'arrive';
      } else if (type.textContent === '条件法') {
        return 'j\'arriverais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu arrives';
        } else if (tense.textContent === '複合過去') {
          return 'tu es arrivé';
        } else if (tense.textContent === '半過去') {
          return 'tu arrivais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais arrivé';
        } else if (tense.textContent === '単純未来') {
          return 'tu arriveras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu arrives';
      } else if (type.textContent === '条件法') {
        return 'tu arriverais';
      } else if (type.textContent === '命令法') {
        return 'arrive'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il arrive';
        } else if (tense.textContent === '複合過去') {
          return 'il est arrivé';
        } else if (tense.textContent === '半過去') {
          return 'il arrivait';
        } else if (tense.textContent === '大過去') {
          return 'il était arrivé';
        } else if (tense.textContent === '単純未来') {
          return 'il arrivera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il arrive';
      } else if (type.textContent === '条件法') {
      return 'il arriverait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous arrivons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes arrivés';
        } else if (tense.textContent === '半過去') {
          return 'nous arrivions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions arrivés';
        } else if (tense.textContent === '単純未来') {
          return 'nous arriverons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous arrivions';
      } else if (type.textContent === '条件法') {
        return 'nous arriverions';
      } else if (type.textContent === '命令法') {
        return 'arrivons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous arrivez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes arrivé';
        } else if (tense.textContent === '半過去') {
          return 'vous arriviez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez arrivé';
        } else if (tense.textContent === '単純未来') {
          return 'vous arriverez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous arriviez';
      } else if (type.textContent === '条件法') {
        return 'vous arriveriez';
      } else if (type.textContent === '命令法') {
        return 'arrivez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils arrivent';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont arrivés';
        } else if (tense.textContent === '半過去') {
          return 'ils arrivaient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient arrivés';
        } else if (tense.textContent === '単純未来') {
          return 'ils arriveront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils arrivent';
      } else if (type.textContent === '条件法') {
        return 'ils arriveraient';
      }
    }
  //rester
  } else if (verb.textContent === 'rester') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je reste';
        } else if (tense.textContent === '複合過去') {
          return 'Je suis resté';
        } else if (tense.textContent === '半過去') {
          return 'je restais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais resté';
        } else if (tense.textContent === '単純未来') {
          return 'je resterai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je reste';
      } else if (type.textContent === '条件法') {
        return 'je resterais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu restes';
        } else if (tense.textContent === '複合過去') {
          return 'tu es resté';
        } else if (tense.textContent === '半過去') {
          return 'tu restais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais resté';
        } else if (tense.textContent === '単純未来') {
          return 'tu resteras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu restes';
      } else if (type.textContent === '条件法') {
        return 'tu resterais';
      } else if (type.textContent === '命令法') {
        return 'reste'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il reste';
        } else if (tense.textContent === '複合過去') {
          return 'il est resté';
        } else if (tense.textContent === '半過去') {
          return 'il restait';
        } else if (tense.textContent === '大過去') {
          return 'il était resté';
        } else if (tense.textContent === '単純未来') {
          return 'il restera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il reste';
      } else if (type.textContent === '条件法') {
        return 'il resterait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous restons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes restés';
        } else if (tense.textContent === '半過去') {
          return 'nous restions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions restés';
        } else if (tense.textContent === '単純未来') {
          return 'nous resteront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous restions';
      } else if (type.textContent === '条件法') {
        return 'nous resterions';
      } else if (type.textContent === '命令法') {
        return 'restons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous restez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes resté';
        } else if (tense.textContent === '半過去') {
          return 'vous restiez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez resté';
        } else if (tense.textContent === '単純未来') {
          return 'vous resterez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous restiez';
      } else if (type.textContent === '条件法') {
        return 'vous resteriez';
      } else if (type.textContent === '命令法') {
        return 'restez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils restent';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont restés';
        } else if (tense.textContent === '半過去') {
          return 'ils restaient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient restés';
        } else if (tense.textContent === '単純未来') {
          return 'ils resteront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils restent';
      } else if (type.textContent === '条件法') {
        return 'ils resteraient';
      }
    }
  //parler
  } else if (verb.textContent === 'parler') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je parle';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai parlé';
        } else if (tense.textContent === '半過去') {
          return 'je parlais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais parlé';
        } else if (tense.textContent === '単純未来') {
          return 'je parlerai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je parle';
      } else if (type.textContent === '条件法') {
        return 'je parlerais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu parles';
        } else if (tense.textContent === '複合過去') {
          return 'tu as parlé';
        } else if (tense.textContent === '半過去') {
          return 'tu parlais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais parlé';
        } else if (tense.textContent === '単純未来') {
          return 'tu parleras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu parles';
      } else if (type.textContent === '条件法') {
        return 'tu parlerais';
      } else if (type.textContent === '命令法') {
        return 'parle'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il parle';
        } else if (tense.textContent === '複合過去') {
          return 'il a parlé';
        } else if (tense.textContent === '半過去') {
          return 'il parlait';
        } else if (tense.textContent === '大過去') {
          return 'il avait parlé';
        } else if (tense.textContent === '単純未来') {
          return 'il parlera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il parle';
      } else if (type.textContent === '条件法') {
        return 'il parlerait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous parlons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons parlé';
        } else if (tense.textContent === '半過去') {
          return 'nous parlions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions parlé';
        } else if (tense.textContent === '単純未来') {
          return 'nous parlerons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous parlions';
      } else if (type.textContent === '条件法') {
        return 'nous parlerions';
      } else if (type.textContent === '命令法') {
        return 'parlons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous parlez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez parlé';
        } else if (tense.textContent === '半過去') {
          return 'vous parliez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez parlé';
        } else if (tense.textContent === '単純未来') {
          return 'vous parlerez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous parliez';
      } else if (type.textContent === '条件法') {
        return 'vous parleriez';
      } else if (type.textContent === '命令法') {
        return 'parlez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils parlent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont parlé';
        } else if (tense.textContent === '半過去') {
          return 'ils parlaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient parlé';
        } else if (tense.textContent === '単純未来') {
          return 'ils parleront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils parlent';
      } else if (type.textContent === '条件法') {
        return 'ils parleraient';
      }
    }
  } else {
    return 'error';
  }
};

//変数 correctAns の定義
let correctAns = getCorrect();
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
      },400);
      $('#change').fadeIn();
      $('.result').text('');
      $('.wrong').text('');
      $('#input').val('');  
      $('#input').focus(); 
    }
  });
});
