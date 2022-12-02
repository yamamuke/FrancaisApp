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
          return 'ils prenaient';
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
          return 'je suis allé';
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
          return 'je suis resté';
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
  //venir
  } else if (verb.textContent === 'venir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je viens';
        } else if (tense.textContent === '複合過去') {
          return 'je suis venu';
        } else if (tense.textContent === '半過去') {
          return 'je venais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais venu';
        } else if (tense.textContent === '単純未来') {
          return 'je viendrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je vienne';
      } else if (type.textContent === '条件法') {
        return 'je viendrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu viens';
        } else if (tense.textContent === '複合過去') {
          return 'tu es venu';
        } else if (tense.textContent === '半過去') {
          return 'tu venais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais venu';
        } else if (tense.textContent === '単純未来') {
          return 'tu viendras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu viennes';
      } else if (type.textContent === '条件法') {
        return 'tu viendrais';
      } else if (type.textContent === '命令法') {
        return 'viens'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il vient';
        } else if (tense.textContent === '複合過去') {
          return 'il est venu';
        } else if (tense.textContent === '半過去') {
          return 'il venait';
        } else if (tense.textContent === '大過去') {
          return 'il était venu';
        } else if (tense.textContent === '単純未来') {
          return 'il viendra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il vienne';
      } else if (type.textContent === '条件法') {
        return 'il viendrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous venons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes venus';
        } else if (tense.textContent === '半過去') {
          return 'nous venions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions venus';
        } else if (tense.textContent === '単純未来') {
          return 'nous viendrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous venions';
      } else if (type.textContent === '条件法') {
        return 'nous viendrions';
      } else if (type.textContent === '命令法') {
        return 'venons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous venez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes venu';
        } else if (tense.textContent === '半過去') {
          return 'vous veniez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez venu';
        } else if (tense.textContent === '単純未来') {
          return 'vous viendrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous veniez';
      } else if (type.textContent === '条件法') {
        return 'vous viendriez';
      } else if (type.textContent === '命令法') {
        return 'venez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils viennent';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont venus';
        } else if (tense.textContent === '半過去') {
          return 'ils venaient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient venus';
        } else if (tense.textContent === '単純未来') {
          return 'ils viendront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils viennent';
      } else if (type.textContent === '条件法') {
        return 'ils viendraient';
      }
    }
  //s'asseoir
  } else if (verb.textContent === 's\'asseoir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je m\'assois';
        } else if (tense.textContent === '複合過去') {
          return 'je me suis assis';
        } else if (tense.textContent === '半過去') {
          return 'je m\'assoyais';
        } else if (tense.textContent === '大過去') {
          return 'je m\'étais assis';
        } else if (tense.textContent === '単純未来') {
          return 'je m\'assoirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je m\'assoie';
      } else if (type.textContent === '条件法') {
        return 'je m\'assoirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu t\'assois';
        } else if (tense.textContent === '複合過去') {
          return 'tu t\'es assis';
        } else if (tense.textContent === '半過去') {
          return 'tu  t\'assoyais';
        } else if (tense.textContent === '大過去') {
          return 'tu t\'étais assis';
        } else if (tense.textContent === '単純未来') {
          return 'tu t\'assoiras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu t\'assoies';
      } else if (type.textContent === '条件法') {
        return 'tu t\'assoirais';
      } else if (type.textContent === '命令法') {
        return 'assois-toi'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il s\'assoit';
        } else if (tense.textContent === '複合過去') {
          return 'il s\'est assis';
        } else if (tense.textContent === '半過去') {
          return 'il s\'assoyait';
        } else if (tense.textContent === '大過去') {
          return 'il s\'était assis';
        } else if (tense.textContent === '単純未来') {
          return 'il s\'assoira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il s\'assoie';
      } else if (type.textContent === '条件法') {
        return 'il s\'assoirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous nous assoyons';
        } else if (tense.textContent === '複合過去') {
          return 'nous nous sommes assis';
        } else if (tense.textContent === '半過去') {
          return 'nous nous assoyions';
        } else if (tense.textContent === '大過去') {
          return 'nous nous étions assis';
        } else if (tense.textContent === '単純未来') {
          return 'nous nous assoirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous nous assoyions';
      } else if (type.textContent === '条件法') {
        return 'nous nous assoirions';
      } else if (type.textContent === '命令法') {
        return 'assoyons-nous'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous vous assoyez';
        } else if (tense.textContent === '複合過去') {
          return 'vous vous êtes assis';
        } else if (tense.textContent === '半過去') {
          return 'vous vous assoyiez';
        } else if (tense.textContent === '大過去') {
          return 'vous vous étiez assis';
        } else if (tense.textContent === '単純未来') {
          return 'vous vous assoirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous vous assoyiez';
      } else if (type.textContent === '条件法') {
        return 'vous vous assoiriez';
      } else if (type.textContent === '命令法') {
        return 'assoyez-vous'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils s\'assoient';
        } else if (tense.textContent === '複合過去') {
          return 'ils se sont assis';
        } else if (tense.textContent === '半過去') {
          return 'ils s\'assoyaient';
        } else if (tense.textContent === '大過去') {
          return 'ils s\'étaient assis';
        } else if (tense.textContent === '単純未来') {
          return 'ils s\'assoiront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils s\'assoient';
      } else if (type.textContent === '条件法') {
        return 'ils s\'assoiraient';
      }
    }
  //manger
  } else if (verb.textContent === 'manger') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je mange';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai mangé';
        } else if (tense.textContent === '半過去') {
          return 'je mangeais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais mangé';
        } else if (tense.textContent === '単純未来') {
          return 'je mangerai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je mange';
      } else if (type.textContent === '条件法') {
        return 'je mangerais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu manges';
        } else if (tense.textContent === '複合過去') {
          return 'tu as mangé';
        } else if (tense.textContent === '半過去') {
          return 'tu mangeais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais mangé';
        } else if (tense.textContent === '単純未来') {
          return 'tu mangeras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu manges';
      } else if (type.textContent === '条件法') {
        return 'tu mangerais';
      } else if (type.textContent === '命令法') {
        return 'mange'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il mange';
        } else if (tense.textContent === '複合過去') {
          return 'il a mangé';
        } else if (tense.textContent === '半過去') {
          return 'il mangeait';
        } else if (tense.textContent === '大過去') {
          return 'il avait mangé';
        } else if (tense.textContent === '単純未来') {
          return 'il mangera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il mange';
      } else if (type.textContent === '条件法') {
        return 'il mangerait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous mangeons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons mangé';
        } else if (tense.textContent === '半過去') {
          return 'nous mangions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions mangé';
        } else if (tense.textContent === '単純未来') {
          return 'nous mangerons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous mangions';
      } else if (type.textContent === '条件法') {
        return 'nous mangerions';
      } else if (type.textContent === '命令法') {
        return 'mangeons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous mangez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez mangé';
        } else if (tense.textContent === '半過去') {
          return 'vous mangiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez mangé';
        } else if (tense.textContent === '単純未来') {
          return 'vous mangerez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous mangiez';
      } else if (type.textContent === '条件法') {
        return 'vous mangeriez';
      } else if (type.textContent === '命令法') {
        return 'mangez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils mangent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont mangé';
        } else if (tense.textContent === '半過去') {
          return 'ils mangeaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient mangé';
        } else if (tense.textContent === '単純未来') {
          return 'ils mangeront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils mangent';
      } else if (type.textContent === '条件法') {
        return 'ils mangeraient';
      }
    }
  //se réveiller
  } else if (verb.textContent === 'se réveiller') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je me réveille';
        } else if (tense.textContent === '複合過去') {
          return 'je me suis réveillé';
        } else if (tense.textContent === '半過去') {
          return 'je me réveillais';
        } else if (tense.textContent === '大過去') {
          return 'je m\'étais réveillé';
        } else if (tense.textContent === '単純未来') {
          return 'je me réveillerai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je me réveille';
      } else if (type.textContent === '条件法') {
        return 'je me réveillerais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu te réveilles';
        } else if (tense.textContent === '複合過去') {
          return 'tu t\'es réveillé';
        } else if (tense.textContent === '半過去') {
          return 'tu te réveillais';
        } else if (tense.textContent === '大過去') {
          return 'tu t\'étais réveillé';
        } else if (tense.textContent === '単純未来') {
          return 'tu te réveilleras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu te réveilles';
      } else if (type.textContent === '条件法') {
        return 'tu te réveillerais';
      } else if (type.textContent === '命令法') {
        return 'réveille-toi'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il se réveille';
        } else if (tense.textContent === '複合過去') {
          return 'il s\'est réveillé';
        } else if (tense.textContent === '半過去') {
          return 'il se réveillait';
        } else if (tense.textContent === '大過去') {
          return 'il s\'était réveillé';
        } else if (tense.textContent === '単純未来') {
          return 'il se réveillera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il se réveille';
      } else if (type.textContent === '条件法') {
        return 'il se réveillerait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous nous réveillons';
        } else if (tense.textContent === '複合過去') {
          return 'nous nous sommes réveillés';
        } else if (tense.textContent === '半過去') {
          return 'nous nous réveillions';
        } else if (tense.textContent === '大過去') {
          return 'nous nous étions réveillés';
        } else if (tense.textContent === '単純未来') {
          return 'nous nous réveillerons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous nous réveillions';
      } else if (type.textContent === '条件法') {
        return 'nous nous réveillerions';
      } else if (type.textContent === '命令法') {
        return 'réveillons-nous'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous vous réveillez';
        } else if (tense.textContent === '複合過去') {
          return 'vous vous êtes réveillé';
        } else if (tense.textContent === '半過去') {
          return 'vous vous réveilliez';
        } else if (tense.textContent === '大過去') {
          return 'vous vous étiez réveillé';
        } else if (tense.textContent === '単純未来') {
          return 'vous vous réveillerez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous vous réveilliez';
      } else if (type.textContent === '条件法') {
        return 'vous vous réveilleriez';
      } else if (type.textContent === '命令法') {
        return 'réveillez-vous'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils se réveillent';
        } else if (tense.textContent === '複合過去') {
          return 'ils se sont réveillés';
        } else if (tense.textContent === '半過去') {
          return 'ils se réveillaient';
        } else if (tense.textContent === '大過去') {
          return 'ils s\'étaient réveillés';
        } else if (tense.textContent === '単純未来') {
          return 'ils se réveilleront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils se réveillent';
      } else if (type.textContent === '条件法') {
        return 'ils se réveilleraient';
      }
    }
  //appeler
  } else if (verb.textContent === 'appeler') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'appelle';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai appelé';
        } else if (tense.textContent === '半過去') {
          return 'j\'appelais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais appelé';
        } else if (tense.textContent === '単純未来') {
          return 'j\'appellerai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'appelle';
      } else if (type.textContent === '条件法') {
        return 'j\'appellerais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu appelles';
        } else if (tense.textContent === '複合過去') {
          return 'tu as appelé';
        } else if (tense.textContent === '半過去') {
          return 'tu appelais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais appelé';
        } else if (tense.textContent === '単純未来') {
          return 'tu appelleras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu appelles';
      } else if (type.textContent === '条件法') {
        return 'tu appellerais';
      } else if (type.textContent === '命令法') {
        return 'appelle'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il appelle';
        } else if (tense.textContent === '複合過去') {
          return 'il a appelé';
        } else if (tense.textContent === '半過去') {
          return 'il appelait';
        } else if (tense.textContent === '大過去') {
          return 'il avait appelé';
        } else if (tense.textContent === '単純未来') {
          return 'il appellera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il appelle';
      } else if (type.textContent === '条件法') {
        return 'il appellerait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous appelons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons appelé';
        } else if (tense.textContent === '半過去') {
          return 'nous appelions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions appelé';
        } else if (tense.textContent === '単純未来') {
          return 'nous appellerons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous appelions';
      } else if (type.textContent === '条件法') {
        return 'nous appellerions';
      } else if (type.textContent === '命令法') {
        return 'appelons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous appelez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez appelé';
        } else if (tense.textContent === '半過去') {
          return 'vous appeliez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez appelé';
        } else if (tense.textContent === '単純未来') {
          return 'vous appellerez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous appeliez';
      } else if (type.textContent === '条件法') {
        return 'vous appelleriez';
      } else if (type.textContent === '命令法') {
        return 'appelez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils appellent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont appelé';
        } else if (tense.textContent === '半過去') {
          return 'ils appelaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient appelé';
        } else if (tense.textContent === '単純未来') {
          return 'ils appelleront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils appellent';
      } else if (type.textContent === '条件法') {
        return 'ils appelleraient';
      }
    }
  //acheter
  } else if (verb.textContent === 'acheter') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'achète';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai acheté';
        } else if (tense.textContent === '半過去') {
          return 'j\'achetais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais acheté';
        } else if (tense.textContent === '単純未来') {
          return 'j\'achèterai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'achète';
      } else if (type.textContent === '条件法') {
        return 'j\'achèterais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu achètes';
        } else if (tense.textContent === '複合過去') {
          return 'tu as acheté';
        } else if (tense.textContent === '半過去') {
          return 'tu achetais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais acheté';
        } else if (tense.textContent === '単純未来') {
          return 'tu achèteras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu achètes';
      } else if (type.textContent === '条件法') {
        return 'tu achèterais';
      } else if (type.textContent === '命令法') {
        return 'achète'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il achète';
        } else if (tense.textContent === '複合過去') {
          return 'il a acheté';
        } else if (tense.textContent === '半過去') {
          return 'il achetait';
        } else if (tense.textContent === '大過去') {
          return 'il avait acheté';
        } else if (tense.textContent === '単純未来') {
          return 'il achètera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il achète';
      } else if (type.textContent === '条件法') {
        return 'il achèterait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous achetons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons acheté';
        } else if (tense.textContent === '半過去') {
          return 'nous achetions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions acheté';
        } else if (tense.textContent === '単純未来') {
          return 'nous achèterons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous achetions';
      } else if (type.textContent === '条件法') {
        return 'nous achèterions';
      } else if (type.textContent === '命令法') {
        return 'achetons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous achetez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez acheté';
        } else if (tense.textContent === '半過去') {
          return 'vous achetiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez acheté';
        } else if (tense.textContent === '単純未来') {
          return 'vous achèterez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous achetiez';
      } else if (type.textContent === '条件法') {
        return 'vous achèteriez';
      } else if (type.textContent === '命令法') {
        return 'achetez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils achètent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont acheté';
        } else if (tense.textContent === '半過去') {
          return 'ils achetaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient acheté';
        } else if (tense.textContent === '単純未来') {
          return 'ils achèteront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils achètent';
      } else if (type.textContent === '条件法') {
        return 'ils achèteraient';
      }
    }
  //créer
  } else if (verb.textContent === 'créer') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je crée';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai créé';
        } else if (tense.textContent === '半過去') {
          return 'je créais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais créé';
        } else if (tense.textContent === '単純未来') {
          return 'je créerai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je crée';
      } else if (type.textContent === '条件法') {
        return 'je créerais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu crées';
        } else if (tense.textContent === '複合過去') {
          return 'tu as créé';
        } else if (tense.textContent === '半過去') {
          return 'tu créais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais créé';
        } else if (tense.textContent === '単純未来') {
          return 'tu créeras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu crées';
      } else if (type.textContent === '条件法') {
        return 'tu créerais';
      } else if (type.textContent === '命令法') {
        return 'crée'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il crée';
        } else if (tense.textContent === '複合過去') {
          return 'il a créé';
        } else if (tense.textContent === '半過去') {
          return 'il créait';
        } else if (tense.textContent === '大過去') {
          return 'il avait créé';
        } else if (tense.textContent === '単純未来') {
          return 'il créera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il crée';
      } else if (type.textContent === '条件法') {
        return 'il créerait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous créons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons créé';
        } else if (tense.textContent === '半過去') {
          return 'nous créions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions créé';
        } else if (tense.textContent === '単純未来') {
          return 'nous créerons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous créions';
      } else if (type.textContent === '条件法') {
        return 'nous créerions';
      } else if (type.textContent === '命令法') {
        return 'créons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous créez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez créé';
        } else if (tense.textContent === '半過去') {
          return 'vous créiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez créé';
        } else if (tense.textContent === '単純未来') {
          return 'vous créerez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous créiez';
      } else if (type.textContent === '条件法') {
        return 'vous créeriez';
      } else if (type.textContent === '命令法') {
        return 'créez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils créent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont créé';
        } else if (tense.textContent === '半過去') {
          return 'ils créaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient créé';
        } else if (tense.textContent === '単純未来') {
          return 'ils créeront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils créent';
      } else if (type.textContent === '条件法') {
        return 'ils créeraient';
      }
    }
  //lire
  } else if (verb.textContent === 'lire') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je lis';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai lu';
        } else if (tense.textContent === '半過去') {
          return 'je lisais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais lu';
        } else if (tense.textContent === '単純未来') {
          return 'je lirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je lise';
      } else if (type.textContent === '条件法') {
        return 'je lirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu lis';
        } else if (tense.textContent === '複合過去') {
          return 'tu as lu';
        } else if (tense.textContent === '半過去') {
          return 'tu lisais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais lu';
        } else if (tense.textContent === '単純未来') {
          return 'tu liras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu lises';
      } else if (type.textContent === '条件法') {
        return 'tu lirais';
      } else if (type.textContent === '命令法') {
        return 'lis'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il lit';
        } else if (tense.textContent === '複合過去') {
          return 'il a lu';
        } else if (tense.textContent === '半過去') {
          return 'il lisait';
        } else if (tense.textContent === '大過去') {
          return 'il avait lu';
        } else if (tense.textContent === '単純未来') {
          return 'il lira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il lise';
      } else if (type.textContent === '条件法') {
        return 'il lirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous lisons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons lu';
        } else if (tense.textContent === '半過去') {
          return 'nous lisions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions lu';
        } else if (tense.textContent === '単純未来') {
          return 'nous lirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous lisions';
      } else if (type.textContent === '条件法') {
        return 'nous lirions';
      } else if (type.textContent === '命令法') {
        return 'lisons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous lisez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez lu';
        } else if (tense.textContent === '半過去') {
          return 'vous lisiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez lu';
        } else if (tense.textContent === '単純未来') {
          return 'vous lirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous lisiez';
      } else if (type.textContent === '条件法') {
        return 'vous liriez';
      } else if (type.textContent === '命令法') {
        return 'lisez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils lisent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont lu';
        } else if (tense.textContent === '半過去') {
          return 'ils lisaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient lu';
        } else if (tense.textContent === '単純未来') {
          return 'ils liront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils lisent';
      } else if (type.textContent === '条件法') {
        return 'ils liraient';
      }
    }
  //mettre
  } else if (verb.textContent === 'mettre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je mets';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai mis';
        } else if (tense.textContent === '半過去') {
          return 'je mettais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais mis';
        } else if (tense.textContent === '単純未来') {
          return 'je mettrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je mette';
      } else if (type.textContent === '条件法') {
        return 'je mettrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu mets';
        } else if (tense.textContent === '複合過去') {
          return 'tu as mis';
        } else if (tense.textContent === '半過去') {
          return 'tu mettais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais mis';
        } else if (tense.textContent === '単純未来') {
          return 'tu mettras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu mettes';
      } else if (type.textContent === '条件法') {
        return 'tu mettrais';
      } else if (type.textContent === '命令法') {
        return 'mets'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il met';
        } else if (tense.textContent === '複合過去') {
          return 'il a mis';
        } else if (tense.textContent === '半過去') {
          return 'il mettait';
        } else if (tense.textContent === '大過去') {
          return 'il avait mis';
        } else if (tense.textContent === '単純未来') {
          return 'il mettra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il mette';
      } else if (type.textContent === '条件法') {
        return 'il mettrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous mettons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons mis';
        } else if (tense.textContent === '半過去') {
          return 'nous mettions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions mis';
        } else if (tense.textContent === '単純未来') {
          return 'nous mettrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous mettions';
      } else if (type.textContent === '条件法') {
        return 'nous mettrions';
      } else if (type.textContent === '命令法') {
        return 'mettons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous mettez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez mis';
        } else if (tense.textContent === '半過去') {
          return 'vous mettiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez mis';
        } else if (tense.textContent === '単純未来') {
          return 'vous mettrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous mettiez';
      } else if (type.textContent === '条件法') {
        return 'vous mettriez';
      } else if (type.textContent === '命令法') {
        return 'mettez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils mettent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont mis';
        } else if (tense.textContent === '半過去') {
          return 'ils mettaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient mis';
        } else if (tense.textContent === '単純未来') {
          return 'ils mettront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils mettent';
      } else if (type.textContent === '条件法') {
        return 'ils mettraient';
      }
    }
  //voir
  } else if (verb.textContent === 'voir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je vois';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai vu';
        } else if (tense.textContent === '半過去') {
          return 'je voyais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais vu';
        } else if (tense.textContent === '単純未来') {
          return 'je verrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je voie';
      } else if (type.textContent === '条件法') {
        return 'je verrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu vois';
        } else if (tense.textContent === '複合過去') {
          return 'tu as vu';
        } else if (tense.textContent === '半過去') {
          return 'tu voyais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais vu';
        } else if (tense.textContent === '単純未来') {
          return 'tu verras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu voies';
      } else if (type.textContent === '条件法') {
        return 'tu verrais';
      } else if (type.textContent === '命令法') {
        return 'vois';
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il voit';
        } else if (tense.textContent === '複合過去') {
          return 'il a vu';
        } else if (tense.textContent === '半過去') {
          return 'il voyait';
        } else if (tense.textContent === '大過去') {
          return 'il avait vu';
        } else if (tense.textContent === '単純未来') {
          return 'il verra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il voie';
      } else if (type.textContent === '条件法') {
        return 'il verrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous voyons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons vu';
        } else if (tense.textContent === '半過去') {
          return 'nous voyions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions vu';
        } else if (tense.textContent === '単純未来') {
          return 'nous verrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous voyions';
      } else if (type.textContent === '条件法') {
        return 'nous verrions';
      } else if (type.textContent === '命令法') {
        return 'voyons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous voyez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez vu';
        } else if (tense.textContent === '半過去') {
          return 'vous voyiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez vu';
        } else if (tense.textContent === '単純未来') {
          return 'vous verrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous voyiez';
      } else if (type.textContent === '条件法') {
        return 'vous verriez';
      } else if (type.textContent === '命令法') {
        return 'voyez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils voient';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont vu';
        } else if (tense.textContent === '半過去') {
          return 'ils voyaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient vu';
        } else if (tense.textContent === '単純未来') {
          return 'ils verront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils voient';
      } else if (type.textContent === '条件法') {
        return 'ils verraient';
      }
    }
  //boire
  } else if (verb.textContent === 'boire') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je bois';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai bu';
        } else if (tense.textContent === '半過去') {
          return 'je buvais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais bu';
        } else if (tense.textContent === '単純未来') {
          return 'je boirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je boive';
      } else if (type.textContent === '条件法') {
        return 'je boirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu bois';
        } else if (tense.textContent === '複合過去') {
          return 'tu as bu';
        } else if (tense.textContent === '半過去') {
          return 'tu buvais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais bu';
        } else if (tense.textContent === '単純未来') {
          return 'tu boiras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu boives';
      } else if (type.textContent === '条件法') {
        return 'tu boirais';
      } else if (type.textContent === '命令法') {
        return 'bois'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il boit';
        } else if (tense.textContent === '複合過去') {
          return 'il a bu';
        } else if (tense.textContent === '半過去') {
          return 'il buvait';
        } else if (tense.textContent === '大過去') {
          return 'il avait bu';
        } else if (tense.textContent === '単純未来') {
          return 'il boira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il boive';
      } else if (type.textContent === '条件法') {
        return 'il boirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous buvons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons bu';
        } else if (tense.textContent === '半過去') {
          return 'nous buvions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions bu';
        } else if (tense.textContent === '単純未来') {
          return 'nous boirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous buvions';
      } else if (type.textContent === '条件法') {
        return 'nous boirions';
      } else if (type.textContent === '命令法') {
        return 'buvons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous buvez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez bu';
        } else if (tense.textContent === '半過去') {
          return 'vous buviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez bu';
        } else if (tense.textContent === '単純未来') {
          return 'vous boirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous buviez';
      } else if (type.textContent === '条件法') {
        return 'vous boiriez';
      } else if (type.textContent === '命令法') {
        return 'buvez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils boivent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont bu';
        } else if (tense.textContent === '半過去') {
          return 'ils buvaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient bu';
        } else if (tense.textContent === '単純未来') {
          return 'ils boiront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils boivent';
      } else if (type.textContent === '条件法') {
        return 'ils boiraient';
      }
    }
  //savoir
  } else if (verb.textContent === 'savoir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je sais';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai su';
        } else if (tense.textContent === '半過去') {
          return 'je savais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais su';
        } else if (tense.textContent === '単純未来') {
          return 'je saurai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je sache';
      } else if (type.textContent === '条件法') {
        return 'je saurais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu sais';
        } else if (tense.textContent === '複合過去') {
          return 'tu as su';
        } else if (tense.textContent === '半過去') {
          return 'tu savais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais su';
        } else if (tense.textContent === '単純未来') {
          return 'tu sauras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu saches';
      } else if (type.textContent === '条件法') {
        return 'tu saurais';
      } else if (type.textContent === '命令法') {
        return 'sache';
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il sait';
        } else if (tense.textContent === '複合過去') {
          return 'il a su';
        } else if (tense.textContent === '半過去') {
          return 'il savait';
        } else if (tense.textContent === '大過去') {
          return 'il avait su';
        } else if (tense.textContent === '単純未来') {
          return 'il saura';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il sache';
      } else if (type.textContent === '条件法') {
        return 'il saurait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous savons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons su';
        } else if (tense.textContent === '半過去') {
          return 'nous savions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions su';
        } else if (tense.textContent === '単純未来') {
          return 'nous saurons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous sachions';
      } else if (type.textContent === '条件法') {
        return 'nous saurions';
      } else if (type.textContent === '命令法') {
        return 'sachons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous savez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez su';
        } else if (tense.textContent === '半過去') {
          return 'vous saviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez su';
        } else if (tense.textContent === '単純未来') {
          return 'vous saurez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous sachiez';
      } else if (type.textContent === '条件法') {
        return 'vous sauriez';
      } else if (type.textContent === '命令法') {
        return 'sachez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils savent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont su';
        } else if (tense.textContent === '半過去') {
          return 'ils savaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient su';
        } else if (tense.textContent === '単純未来') {
          return 'ils sauront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils sachent';
      } else if (type.textContent === '条件法') {
        return 'ils sauraient';
      }
    }
  //écrire
  } else if (verb.textContent === 'écrire') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'écris';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai écrit';
        } else if (tense.textContent === '半過去') {
          return 'j\'écrivais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais écrit';
        } else if (tense.textContent === '単純未来') {
          return 'j\'écrirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'écrive';
      } else if (type.textContent === '条件法') {
        return 'j\'écrirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu écris';
        } else if (tense.textContent === '複合過去') {
          return 'tu as écrit';
        } else if (tense.textContent === '半過去') {
          return 'tu écrivais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais écrit';
        } else if (tense.textContent === '単純未来') {
          return 'tu écriras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu écrives';
      } else if (type.textContent === '条件法') {
        return 'tu écrirais';
      } else if (type.textContent === '命令法') {
        return 'écris'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il écrit';
        } else if (tense.textContent === '複合過去') {
          return 'il a écrit';
        } else if (tense.textContent === '半過去') {
          return 'il écrivait';
        } else if (tense.textContent === '大過去') {
          return 'il avait écrit';
        } else if (tense.textContent === '単純未来') {
          return 'il écrira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il écrive';
      } else if (type.textContent === '条件法') {
        return 'il écrirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous écrivons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons écrit';
        } else if (tense.textContent === '半過去') {
          return 'nous écrivions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions écrit';
        } else if (tense.textContent === '単純未来') {
          return 'nous écrirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous écrivions';
      } else if (type.textContent === '条件法') {
        return 'nous écririons';
      } else if (type.textContent === '命令法') {
        return 'écrivons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous écrivez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez écrit';
        } else if (tense.textContent === '半過去') {
          return 'vous écriviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez écrit';
        } else if (tense.textContent === '単純未来') {
          return 'vous écrirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous écriviez';
      } else if (type.textContent === '条件法') {
        return 'vous écririez';
      } else if (type.textContent === '命令法') {
        return 'écrivez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils écrivent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont écrit';
        } else if (tense.textContent === '半過去') {
          return 'ils écrivaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient écrit';
        } else if (tense.textContent === '単純未来') {
          return 'ils écriront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils écrivent';
      } else if (type.textContent === '条件法') {
        return 'ils écriraient';
      }
    }
  //rentrer
  } else if (verb.textContent === 'rentrer') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je rentre';
        } else if (tense.textContent === '複合過去') {
          return 'je suis rentré';
        } else if (tense.textContent === '半過去') {
          return 'je rentrais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais rentré';
        } else if (tense.textContent === '単純未来') {
          return 'je rentrerai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je rentre';
      } else if (type.textContent === '条件法') {
        return 'je rentrerais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu rentres';
        } else if (tense.textContent === '複合過去') {
          return 'tu es rentré';
        } else if (tense.textContent === '半過去') {
          return 'tu rentrais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais rentré';
        } else if (tense.textContent === '単純未来') {
          return 'tu rentreras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu rentres';
      } else if (type.textContent === '条件法') {
        return 'tu rentrerais';
      } else if (type.textContent === '命令法') {
        return 'rentre'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il rentre';
        } else if (tense.textContent === '複合過去') {
          return 'il est rentré';
        } else if (tense.textContent === '半過去') {
          return 'il rentrait';
        } else if (tense.textContent === '大過去') {
          return 'il était rentré';
        } else if (tense.textContent === '単純未来') {
          return 'il rentrera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il rentre';
      } else if (type.textContent === '条件法') {
        return 'il rentrerait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous rentrons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes rentrés';
        } else if (tense.textContent === '半過去') {
          return 'nous rentrions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions rentrés';
        } else if (tense.textContent === '単純未来') {
          return 'nous rentrerons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous rentrions';
      } else if (type.textContent === '条件法') {
        return 'nous rentrerions';
      } else if (type.textContent === '命令法') {
        return 'rentrons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous rentrez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes rentré';
        } else if (tense.textContent === '半過去') {
          return 'vous rentriez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez rentré';
        } else if (tense.textContent === '単純未来') {
          return 'vous rentrerez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous rentriez';
      } else if (type.textContent === '条件法') {
        return 'vous rentreriez';
      } else if (type.textContent === '命令法') {
        return 'rentrez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils rentrent';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont rentrés';
        } else if (tense.textContent === '半過去') {
          return 'ils rentraient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient rentrés';
        } else if (tense.textContent === '単純未来') {
          return 'ils rentreront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils rentrent';
      } else if (type.textContent === '条件法') {
        return 'ils rentreraient';
      }
    }
  //dormir
  } else if (verb.textContent === 'dormir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je dors';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai dormi';
        } else if (tense.textContent === '半過去') {
          return 'je dormais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais dormi';
        } else if (tense.textContent === '単純未来') {
          return 'je dormirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je dorme';
      } else if (type.textContent === '条件法') {
        return 'je dormirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu dors';
        } else if (tense.textContent === '複合過去') {
          return 'tu as dormi';
        } else if (tense.textContent === '半過去') {
          return 'tu dormais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais dormi';
        } else if (tense.textContent === '単純未来') {
          return 'tu dormiras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu dormes';
      } else if (type.textContent === '条件法') {
        return 'tu dormirais';
      } else if (type.textContent === '命令法') {
        return 'dors'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il dort';
        } else if (tense.textContent === '複合過去') {
          return 'il a dormi';
        } else if (tense.textContent === '半過去') {
          return 'il dormait';
        } else if (tense.textContent === '大過去') {
          return 'il avait dormi';
        } else if (tense.textContent === '単純未来') {
          return 'il dormira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il dorme';
      } else if (type.textContent === '条件法') {
        return 'il dormirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous dormons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons dormi';
        } else if (tense.textContent === '半過去') {
          return 'nous dormions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions dormi';
        } else if (tense.textContent === '単純未来') {
          return 'nous dormirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous dormions';
      } else if (type.textContent === '条件法') {
        return 'nous dormirions';
      } else if (type.textContent === '命令法') {
        return 'dormons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous dormez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez dormi';
        } else if (tense.textContent === '半過去') {
          return 'vous dormiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez dormi';
        } else if (tense.textContent === '単純未来') {
          return 'vous dormirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous dormiez';
      } else if (type.textContent === '条件法') {
        return 'vous dormiriez';
      } else if (type.textContent === '命令法') {
        return 'dormez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils dorment';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont dormi';
        } else if (tense.textContent === '半過去') {
          return 'ils dormaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient dormi';
        } else if (tense.textContent === '単純未来') {
          return 'ils dormiront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils dorment';
      } else if (type.textContent === '条件法') {
        return 'ils dormiraient';
      }
    }
  //partir
  } else if (verb.textContent === 'partir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je pars';
        } else if (tense.textContent === '複合過去') {
          return 'je suis parti';
        } else if (tense.textContent === '半過去') {
          return 'je partais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais parti';
        } else if (tense.textContent === '単純未来') {
          return 'je partirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je parte';
      } else if (type.textContent === '条件法') {
        return 'je partirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu pars';
        } else if (tense.textContent === '複合過去') {
          return 'tu es parti';
        } else if (tense.textContent === '半過去') {
          return 'tu partais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais parti';
        } else if (tense.textContent === '単純未来') {
          return 'tu partiras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu partes';
      } else if (type.textContent === '条件法') {
        return 'tu partirais';
      } else if (type.textContent === '命令法') {
        return 'pars'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il part';
        } else if (tense.textContent === '複合過去') {
          return 'il est parti';
        } else if (tense.textContent === '半過去') {
          return 'il partait';
        } else if (tense.textContent === '大過去') {
          return 'il était parti';
        } else if (tense.textContent === '単純未来') {
          return 'il partira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il parte';
      } else if (type.textContent === '条件法') {
        return 'il partirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous partons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes partis';
        } else if (tense.textContent === '半過去') {
          return 'nous partions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions partis';
        } else if (tense.textContent === '単純未来') {
          return 'nous partirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous partions';
      } else if (type.textContent === '条件法') {
        return 'nous partirions';
      } else if (type.textContent === '命令法') {
        return 'partons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous partez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes parti';
        } else if (tense.textContent === '半過去') {
          return 'vous partiez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez parti';
        } else if (tense.textContent === '単純未来') {
          return 'vous partirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous partiez';
      } else if (type.textContent === '条件法') {
        return 'vous partiriez';
      } else if (type.textContent === '命令法') {
        return 'partez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils partent';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont partis';
        } else if (tense.textContent === '半過去') {
          return 'ils partaient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient partis';
        } else if (tense.textContent === '単純未来') {
          return 'ils partiront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils partent';
      } else if (type.textContent === '条件法') {
        return 'ils partiraient';
      }
    }
  //ouvrir
  } else if (verb.textContent === 'ouvrir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'ouvre';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai ouvert';
        } else if (tense.textContent === '半過去') {
          return 'j\'ouvrais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais ouvert';
        } else if (tense.textContent === '単純未来') {
          return 'j\'ouvrirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'ouvre';
      } else if (type.textContent === '条件法') {
        return 'j\'ouvrirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu ouvres';
        } else if (tense.textContent === '複合過去') {
          return 'tu as ouvert';
        } else if (tense.textContent === '半過去') {
          return 'tu ouvrais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais ouvert';
        } else if (tense.textContent === '単純未来') {
          return 'tu ouvriras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu ouvres';
      } else if (type.textContent === '条件法') {
        return 'tu ouvrirais';
      } else if (type.textContent === '命令法') {
        return 'ouvre'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il ouvre';
        } else if (tense.textContent === '複合過去') {
          return 'il a ouvert';
        } else if (tense.textContent === '半過去') {
          return 'il ouvrait';
        } else if (tense.textContent === '大過去') {
          return 'il avait ouvert';
        } else if (tense.textContent === '単純未来') {
          return 'il ouvrira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il ouvre';
      } else if (type.textContent === '条件法') {
        return 'il ouvrirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous ouvrons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons ouvert';
        } else if (tense.textContent === '半過去') {
          return 'nous ouvrions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions ouvert';
        } else if (tense.textContent === '単純未来') {
          return 'nous ouvrirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous ouvrions';
      } else if (type.textContent === '条件法') {
        return 'nous ouvririons';
      } else if (type.textContent === '命令法') {
        return 'ouvrons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous ouvrez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez ouvert';
        } else if (tense.textContent === '半過去') {
          return 'vous ouvriez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez ouvert';
        } else if (tense.textContent === '単純未来') {
          return 'vous ouvrirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous ouvriez';
      } else if (type.textContent === '条件法') {
        return 'vous ouvririez';
      } else if (type.textContent === '命令法') {
        return 'ouvrez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils ouvrent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont ouvert';
        } else if (tense.textContent === '半過去') {
          return 'ils ouvraient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient ouvert';
        } else if (tense.textContent === '単純未来') {
          return 'ils ouvriront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils ouvrent';
      } else if (type.textContent === '条件法') {
        return 'ils ouvriraient';
      }
    }
  //apprendre
  } else if (verb.textContent === 'apprendre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'apprends';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai appris';
        } else if (tense.textContent === '半過去') {
          return 'j\'apprenais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais appris';
        } else if (tense.textContent === '単純未来') {
          return 'j\'apprendrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'apprenne';
      } else if (type.textContent === '条件法') {
        return 'j\'apprendrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu apprends';
        } else if (tense.textContent === '複合過去') {
          return 'tu as appris';
        } else if (tense.textContent === '半過去') {
          return 'tu apprenais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais appris';
        } else if (tense.textContent === '単純未来') {
          return 'tu apprendras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu apprennes';
      } else if (type.textContent === '条件法') {
        return 'tu apprendrais';
      } else if (type.textContent === '命令法') {
        return 'apprends'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il apprend';
        } else if (tense.textContent === '複合過去') {
          return 'il a appris';
        } else if (tense.textContent === '半過去') {
          return 'il apprenait';
        } else if (tense.textContent === '大過去') {
          return 'il avait appris';
        } else if (tense.textContent === '単純未来') {
          return 'il apprendra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il apprenne';
      } else if (type.textContent === '条件法') {
        return 'il apprendrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous apprenons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons appris';
        } else if (tense.textContent === '半過去') {
          return 'nous apprenions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions appris';
        } else if (tense.textContent === '単純未来') {
          return 'nous apprendrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous apprenions';
      } else if (type.textContent === '条件法') {
        return 'nous apprendrions';
      } else if (type.textContent === '命令法') {
        return 'apprenons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous apprenez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez appris';
        } else if (tense.textContent === '半過去') {
          return 'vous appreniez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez appris';
        } else if (tense.textContent === '単純未来') {
          return 'vous apprendrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous appreniez';
      } else if (type.textContent === '条件法') {
        return 'vous apprendriez';
      } else if (type.textContent === '命令法') {
        return 'apprenez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils apprennent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont appris';
        } else if (tense.textContent === '半過去') {
          return 'ils apprenaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient appris';
        } else if (tense.textContent === '単純未来') {
          return 'ils apprendront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils apprennent';
      } else if (type.textContent === '条件法') {
        return 'ils apprendraient';
      }
    }
  //sortir
  } else if (verb.textContent === 'sortir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je sors';
        } else if (tense.textContent === '複合過去') {
          return 'je suis sorti';
        } else if (tense.textContent === '半過去') {
          return 'je sortais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais sorti';
        } else if (tense.textContent === '単純未来') {
          return 'je sortirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je sorte';
      } else if (type.textContent === '条件法') {
        return 'je sortirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu sors';
        } else if (tense.textContent === '複合過去') {
          return 'tu es sorti';
        } else if (tense.textContent === '半過去') {
          return 'tu sortais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais sorti';
        } else if (tense.textContent === '単純未来') {
          return 'tu sortiras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu sortes';
      } else if (type.textContent === '条件法') {
        return 'tu sortirais';
      } else if (type.textContent === '命令法') {
        return 'sors'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il sort';
        } else if (tense.textContent === '複合過去') {
          return 'il est sorti';
        } else if (tense.textContent === '半過去') {
          return 'il sortait';
        } else if (tense.textContent === '大過去') {
          return 'il était sorti';
        } else if (tense.textContent === '単純未来') {
          return 'il sortira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il sorte';
      } else if (type.textContent === '条件法') {
        return 'il sortirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous sortons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes sortis';
        } else if (tense.textContent === '半過去') {
          return 'nous sortions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions sortis';
        } else if (tense.textContent === '単純未来') {
          return 'nous sortirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous sortions';
      } else if (type.textContent === '条件法') {
        return 'nous sortirions';
      } else if (type.textContent === '命令法') {
        return 'sortons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous sortez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes sorti';
        } else if (tense.textContent === '半過去') {
          return 'vous sortiez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez sorti';
        } else if (tense.textContent === '単純未来') {
          return 'vous sortirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous sortiez';
      } else if (type.textContent === '条件法') {
        return 'vous sortiriez';
      } else if (type.textContent === '命令法') {
        return 'sortez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils sortent';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont sortis';
        } else if (tense.textContent === '半過去') {
          return 'ils sortaient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient sortis';
        } else if (tense.textContent === '単純未来') {
          return 'ils sortiront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils sortent';
      } else if (type.textContent === '条件法') {
        return 'ils sortiraient';
      }
    }
  //vouloir
  } else if (verb.textContent === 'vouloir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je veux';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai voulu';
        } else if (tense.textContent === '半過去') {
          return 'je voulais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais voulu';
        } else if (tense.textContent === '単純未来') {
          return 'je voudrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je veuille';
      } else if (type.textContent === '条件法') {
        return 'je voudrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu veux';
        } else if (tense.textContent === '複合過去') {
          return 'tu as voulu';
        } else if (tense.textContent === '半過去') {
          return 'tu voulais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais voulu';
        } else if (tense.textContent === '単純未来') {
          return 'tu voudras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu veuilles';
      } else if (type.textContent === '条件法') {
        return 'tu voudrais';
      } else if (type.textContent === '命令法') {
        return 'veuille'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il veut';
        } else if (tense.textContent === '複合過去') {
          return 'il a voulu';
        } else if (tense.textContent === '半過去') {
          return 'il voulait';
        } else if (tense.textContent === '大過去') {
          return 'il avait voulu';
        } else if (tense.textContent === '単純未来') {
          return 'il voudra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il veuille';
      } else if (type.textContent === '条件法') {
        return 'il voudrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous voulons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons voulu';
        } else if (tense.textContent === '半過去') {
          return 'nous voulions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions voulu';
        } else if (tense.textContent === '単純未来') {
          return 'nous voudrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous voulions';
      } else if (type.textContent === '条件法') {
        return 'nous voudrions';
      } else if (type.textContent === '命令法') {
        return 'veuillons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous voulez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez voulu';
        } else if (tense.textContent === '半過去') {
          return 'vous vouliez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez voulu';
        } else if (tense.textContent === '単純未来') {
          return 'vous voudrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous vouliez';
      } else if (type.textContent === '条件法') {
        return 'vous voudriez';
      } else if (type.textContent === '命令法') {
        return 'veuillez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils veulent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont voulu';
        } else if (tense.textContent === '半過去') {
          return 'ils voulaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient voulu';
        } else if (tense.textContent === '単純未来') {
          return 'ils voudront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils veuillent';
      } else if (type.textContent === '条件法') {
        return 'ils voudraient';
      }
    }
  //pouvoir
  } else if (verb.textContent === 'pouvoir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je peux';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai pu';
        } else if (tense.textContent === '半過去') {
          return 'je pouvais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais pu';
        } else if (tense.textContent === '単純未来') {
          return 'je pourrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je puisse';
      } else if (type.textContent === '条件法') {
        return 'je pourrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu peux';
        } else if (tense.textContent === '複合過去') {
          return 'tu as pu';
        } else if (tense.textContent === '半過去') {
          return 'tu pouvais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais pu';
        } else if (tense.textContent === '単純未来') {
          return 'tu pourras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu puisses';
      } else if (type.textContent === '条件法') {
        return 'tu pourrais';
      } else if (type.textContent === '命令法') {
        return 'peux'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il peut';
        } else if (tense.textContent === '複合過去') {
          return 'il a pu';
        } else if (tense.textContent === '半過去') {
          return 'il pouvait';
        } else if (tense.textContent === '大過去') {
          return 'il avait pu';
        } else if (tense.textContent === '単純未来') {
          return 'il pourra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il puisse';
      } else if (type.textContent === '条件法') {
        return 'il pourrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous pouvons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons pu';
        } else if (tense.textContent === '半過去') {
          return 'nous pouvions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions pu';
        } else if (tense.textContent === '単純未来') {
          return 'nous pourrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous puissions';
      } else if (type.textContent === '条件法') {
        return 'nous pourrions';
      } else if (type.textContent === '命令法') {
        return 'pouvons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous pouvez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez pu';
        } else if (tense.textContent === '半過去') {
          return 'vous pouviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez pu';
        } else if (tense.textContent === '単純未来') {
          return 'vous pourrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous puissiez';
      } else if (type.textContent === '条件法') {
        return 'vous pourriez';
      } else if (type.textContent === '命令法') {
        return 'pouvez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils peuvent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont pu';
        } else if (tense.textContent === '半過去') {
          return 'ils pouvaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient pu';
        } else if (tense.textContent === '単純未来') {
          return 'ils pourront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils puissent';
      } else if (type.textContent === '条件法') {
        return 'ils pourraient';
      }
    }
  //falloir
  } else if (verb.textContent === 'falloir') {
    if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il faut';
        } else if (tense.textContent === '複合過去') {
          return 'il a fallu';
        } else if (tense.textContent === '半過去') {
          return 'il fallait';
        } else if (tense.textContent === '大過去') {
          return 'il avait fallu';
        } else if (tense.textContent === '単純未来') {
          return 'il faudra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il faille';
      } else if (type.textContent === '条件法') {
        return 'il faudrait';
      }
    }
  //tenir
  } else if (verb.textContent === 'tenir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je tiens';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai tenu';
        } else if (tense.textContent === '半過去') {
          return 'je tenais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais tenu';
        } else if (tense.textContent === '単純未来') {
          return 'je tiendrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je tienne';
      } else if (type.textContent === '条件法') {
        return 'je tiendrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu tiens';
        } else if (tense.textContent === '複合過去') {
          return 'tu as tenu';
        } else if (tense.textContent === '半過去') {
          return 'tu tenais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais tenu';
        } else if (tense.textContent === '単純未来') {
          return 'tu tiendras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu tiennes';
      } else if (type.textContent === '条件法') {
        return 'tu tiendrais';
      } else if (type.textContent === '命令法') {
        return 'tiens'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il tient';
        } else if (tense.textContent === '複合過去') {
          return 'il a tenu';
        } else if (tense.textContent === '半過去') {
          return 'il tenait';
        } else if (tense.textContent === '大過去') {
          return 'il avait tenu';
        } else if (tense.textContent === '単純未来') {
          return 'il tiendra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il tienne';
      } else if (type.textContent === '条件法') {
        return 'il tiendrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous tenons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons tenu';
        } else if (tense.textContent === '半過去') {
          return 'nous tenions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions tenu';
        } else if (tense.textContent === '単純未来') {
          return 'nous tiendrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous tenions';
      } else if (type.textContent === '条件法') {
        return 'nous tiendrions';
      } else if (type.textContent === '命令法') {
        return 'tenons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous tenez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez tenu';
        } else if (tense.textContent === '半過去') {
          return 'vous teniez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez tenu';
        } else if (tense.textContent === '単純未来') {
          return 'vous tiendrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous teniez';
      } else if (type.textContent === '条件法') {
        return 'vous tiendriez';
      } else if (type.textContent === '命令法') {
        return 'tenez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils tiennent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont tenu';
        } else if (tense.textContent === '半過去') {
          return 'ils tenaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient tenu';
        } else if (tense.textContent === '単純未来') {
          return 'ils tiendront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils tiennent';
      } else if (type.textContent === '条件法') {
        return 'ils tiendraient';
      }
    }
  //pleuvoir
  } else if (verb.textContent === 'pleuvoir') {
    if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il pleut';
        } else if (tense.textContent === '複合過去') {
          return 'il a plu';
        } else if (tense.textContent === '半過去') {
          return 'il pleuvait';
        } else if (tense.textContent === '大過去') {
          return 'il avait plu';
        } else if (tense.textContent === '単純未来') {
          return 'il pleuvra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il pleuve';
      } else if (type.textContent === '条件法') {
        return 'il pleuvrait';
      }
    }
  //valoir
  } else if (verb.textContent === 'valoir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je vaux';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai valu';
        } else if (tense.textContent === '半過去') {
          return 'je valais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais valu';
        } else if (tense.textContent === '単純未来') {
          return 'je vaudrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je vaille';
      } else if (type.textContent === '条件法') {
        return 'je vaudrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu vaux';
        } else if (tense.textContent === '複合過去') {
          return 'tu as valu';
        } else if (tense.textContent === '半過去') {
          return 'tu valais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais valu';
        } else if (tense.textContent === '単純未来') {
          return 'tu vaudras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu vailles';
      } else if (type.textContent === '条件法') {
        return 'tu vaudrais';
      } else if (type.textContent === '命令法') {
        return 'vaux'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il vaut';
        } else if (tense.textContent === '複合過去') {
          return 'il a valu';
        } else if (tense.textContent === '半過去') {
          return 'il valait';
        } else if (tense.textContent === '大過去') {
          return 'il avait valu';
        } else if (tense.textContent === '単純未来') {
          return 'il vaudra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il vailles';
      } else if (type.textContent === '条件法') {
        return 'il vaudrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous valons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons valu';
        } else if (tense.textContent === '半過去') {
          return 'nous valions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions valu';
        } else if (tense.textContent === '単純未来') {
          return 'nous vaudrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous valions';
      } else if (type.textContent === '条件法') {
        return 'nous vaudrions';
      } else if (type.textContent === '命令法') {
        return 'valons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous valez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez valu';
        } else if (tense.textContent === '半過去') {
          return 'vous valiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez valu';
        } else if (tense.textContent === '単純未来') {
          return 'vous vaudrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous valiez';
      } else if (type.textContent === '条件法') {
        return 'vous vaudriez';
      } else if (type.textContent === '命令法') {
        return 'valez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils valent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont valu';
        } else if (tense.textContent === '半過去') {
          return 'ils valaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient valu';
        } else if (tense.textContent === '単純未来') {
          return 'ils vaudront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils vaillent';
      } else if (type.textContent === '条件法') {
        return 'ils vaudraient';
      }
    }
  //dire
  } else if (verb.textContent === 'dire') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je dis';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai dit';
        } else if (tense.textContent === '半過去') {
          return 'je disais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais dit';
        } else if (tense.textContent === '単純未来') {
          return 'je dirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je dise';
      } else if (type.textContent === '条件法') {
        return 'je dirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu dis';
        } else if (tense.textContent === '複合過去') {
          return 'tu as dit';
        } else if (tense.textContent === '半過去') {
          return 'tu disais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais dit';
        } else if (tense.textContent === '単純未来') {
          return 'tu diras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu dises';
      } else if (type.textContent === '条件法') {
        return 'tu dirais';
      } else if (type.textContent === '命令法') {
        return 'dis'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il dit';
        } else if (tense.textContent === '複合過去') {
          return 'il a dit';
        } else if (tense.textContent === '半過去') {
          return 'il disait';
        } else if (tense.textContent === '大過去') {
          return 'il avait dit';
        } else if (tense.textContent === '単純未来') {
          return 'il dira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il dise';
      } else if (type.textContent === '条件法') {
        return 'il dirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous disons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons dit';
        } else if (tense.textContent === '半過去') {
          return 'nous disions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions dit';
        } else if (tense.textContent === '単純未来') {
          return 'nous dirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous disions';
      } else if (type.textContent === '条件法') {
        return 'nous dirions';
      } else if (type.textContent === '命令法') {
        return 'disons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous dites';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez dit';
        } else if (tense.textContent === '半過去') {
          return 'vous disiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez dit';
        } else if (tense.textContent === '単純未来') {
          return 'vous direz';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous disiez';
      } else if (type.textContent === '条件法') {
        return 'vous diriez';
      } else if (type.textContent === '命令法') {
        return 'dites';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils disent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont dit';
        } else if (tense.textContent === '半過去') {
          return 'ils disaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient dit';
        } else if (tense.textContent === '単純未来') {
          return 'ils diront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils disent';
      } else if (type.textContent === '条件法') {
        return 'ils diraient';
      }
    }
  //tomber
  } else if (verb.textContent === 'tomber') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je tombe';
        } else if (tense.textContent === '複合過去') {
          return 'je suis tombé';
        } else if (tense.textContent === '半過去') {
          return 'je tombais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais tombé';
        } else if (tense.textContent === '単純未来') {
          return 'je tomberai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je tombe';
      } else if (type.textContent === '条件法') {
        return 'je tomberais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu tombes';
        } else if (tense.textContent === '複合過去') {
          return 'tu es tombé';
        } else if (tense.textContent === '半過去') {
          return 'tu tombais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais tombé(';
        } else if (tense.textContent === '単純未来') {
          return 'tu tomberas';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu tombes';
      } else if (type.textContent === '条件法') {
        return 'tu tomberais';
      } else if (type.textContent === '命令法') {
        return 'tombe'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il tombe';
        } else if (tense.textContent === '複合過去') {
          return 'il est tombé';
        } else if (tense.textContent === '半過去') {
          return 'il tombait';
        } else if (tense.textContent === '大過去') {
          return 'il était tombé';
        } else if (tense.textContent === '単純未来') {
          return 'il tombera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il tombe';
      } else if (type.textContent === '条件法') {
        return 'il tomberait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous tombons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes tombés';
        } else if (tense.textContent === '半過去') {
          return 'nous tombions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions tombés';
        } else if (tense.textContent === '単純未来') {
          return 'nous tomberons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous tombions';
      } else if (type.textContent === '条件法') {
        return 'nous tomberions';
      } else if (type.textContent === '命令法') {
        return 'tombons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous tombez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes tombé';
        } else if (tense.textContent === '半過去') {
          return 'vous tombiez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez tombé';
        } else if (tense.textContent === '単純未来') {
          return 'vous tomberez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous tombiez';
      } else if (type.textContent === '条件法') {
        return 'vous tomberiez';
      } else if (type.textContent === '命令法') {
        return 'tombez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils tombent';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont tombés';
        } else if (tense.textContent === '半過去') {
          return 'ils tombaient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient tombés';
        } else if (tense.textContent === '単純未来') {
          return 'ils tomberont';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils tombent';
      } else if (type.textContent === '条件法') {
        return 'ils tomberaient';
      }
    }
  //rendre
  } else if (verb.textContent === 'rendre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je rends';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai rendu';
        } else if (tense.textContent === '半過去') {
          return 'je rendais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais rendu';
        } else if (tense.textContent === '単純未来') {
          return 'je rendrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je rende';
      } else if (type.textContent === '条件法') {
        return 'je rendrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu rends';
        } else if (tense.textContent === '複合過去') {
          return 'tu as rendu';
        } else if (tense.textContent === '半過去') {
          return 'tu rendais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais rendu';
        } else if (tense.textContent === '単純未来') {
          return 'tu rendras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu rendes';
      } else if (type.textContent === '条件法') {
        return 'tu rendrais';
      } else if (type.textContent === '命令法') {
        return 'rends'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il rend';
        } else if (tense.textContent === '複合過去') {
          return 'il a rendu';
        } else if (tense.textContent === '半過去') {
          return 'il rendait';
        } else if (tense.textContent === '大過去') {
          return 'il avait rendu';
        } else if (tense.textContent === '単純未来') {
          return 'il rendra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il rende';
      } else if (type.textContent === '条件法') {
        return 'il rendrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous rendons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons rendu';
        } else if (tense.textContent === '半過去') {
          return 'nous rendions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions rendu';
        } else if (tense.textContent === '単純未来') {
          return 'nous rendrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous rendions';
      } else if (type.textContent === '条件法') {
        return 'nous rendrions';
      } else if (type.textContent === '命令法') {
        return 'rendons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous rendez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez rendu';
        } else if (tense.textContent === '半過去') {
          return 'vous rendiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez rendu';
        } else if (tense.textContent === '単純未来') {
          return 'vous rendrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous rendiez';
      } else if (type.textContent === '条件法') {
        return 'vous rendriez';
      } else if (type.textContent === '命令法') {
        return 'rendez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils rendent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont rendu';
        } else if (tense.textContent === '半過去') {
          return 'ils rendaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient rendu';
        } else if (tense.textContent === '単純未来') {
          return 'ils rendront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils rendent';
      } else if (type.textContent === '条件法') {
        return 'ils rendraient';
      }
    }
  //suivre
  } else if (verb.textContent === 'suivre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je suis';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai suivi';
        } else if (tense.textContent === '半過去') {
          return 'je suivais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais suivi';
        } else if (tense.textContent === '単純未来') {
          return 'je suivrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je suive';
      } else if (type.textContent === '条件法') {
        return 'je suivrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu suis';
        } else if (tense.textContent === '複合過去') {
          return 'tu as suivi';
        } else if (tense.textContent === '半過去') {
          return 'tu suivais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais suivi';
        } else if (tense.textContent === '単純未来') {
          return 'tu suivras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu suives';
      } else if (type.textContent === '条件法') {
        return 'tu suivrais';
      } else if (type.textContent === '命令法') {
        return 'suis'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il suit';
        } else if (tense.textContent === '複合過去') {
          return 'il a suivi';
        } else if (tense.textContent === '半過去') {
          return 'il suivait';
        } else if (tense.textContent === '大過去') {
          return 'il avait suivi';
        } else if (tense.textContent === '単純未来') {
          return 'il suivra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il suive';
      } else if (type.textContent === '条件法') {
        return 'il suivrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous suivons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons suivi';
        } else if (tense.textContent === '半過去') {
          return 'nous suivions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions suivi';
        } else if (tense.textContent === '単純未来') {
          return 'nous suivrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous suivions';
      } else if (type.textContent === '条件法') {
        return 'nous suivrions';
      } else if (type.textContent === '命令法') {
        return 'suivons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous suivez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez suivi';
        } else if (tense.textContent === '半過去') {
          return 'vous suiviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez suivi';
        } else if (tense.textContent === '単純未来') {
          return 'vous suivrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous suiviez';
      } else if (type.textContent === '条件法') {
        return 'vous suivriez';
      } else if (type.textContent === '命令法') {
        return 'suivez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils suivent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont suivi';
        } else if (tense.textContent === '半過去') {
          return 'ils suivaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient suivi';
        } else if (tense.textContent === '単純未来') {
          return 'ils suivront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils suivent';
      } else if (type.textContent === '条件法') {
        return 'ils suivraient';
      }
    }
  //sentir
  } else if (verb.textContent === 'sentir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je sens';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai senti';
        } else if (tense.textContent === '半過去') {
          return 'je sentais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais senti';
        } else if (tense.textContent === '単純未来') {
          return 'je sentirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je sente';
      } else if (type.textContent === '条件法') {
        return 'je sentirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu sens';
        } else if (tense.textContent === '複合過去') {
          return 'tu as senti';
        } else if (tense.textContent === '半過去') {
          return 'tu sentais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais senti';
        } else if (tense.textContent === '単純未来') {
          return 'tu sentiras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu sentes';
      } else if (type.textContent === '条件法') {
        return 'tu sentirais';
      } else if (type.textContent === '命令法') {
        return 'sens'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il sent';
        } else if (tense.textContent === '複合過去') {
          return 'il a senti';
        } else if (tense.textContent === '半過去') {
          return 'il sentait';
        } else if (tense.textContent === '大過去') {
          return 'il avait senti';
        } else if (tense.textContent === '単純未来') {
          return 'il sentira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il sente';
      } else if (type.textContent === '条件法') {
        return 'il sentirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous sentons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons senti';
        } else if (tense.textContent === '半過去') {
          return 'nous sentions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions senti';
        } else if (tense.textContent === '単純未来') {
          return 'nous sentirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous sentions';
      } else if (type.textContent === '条件法') {
        return 'nous sentirions';
      } else if (type.textContent === '命令法') {
        return 'sentons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous sentez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez senti';
        } else if (tense.textContent === '半過去') {
          return 'vous sentiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez senti';
        } else if (tense.textContent === '単純未来') {
          return 'vous sentirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous sentiez';
      } else if (type.textContent === '条件法') {
        return 'vous sentiriez';
      } else if (type.textContent === '命令法') {
        return 'sentez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils sentent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont senti';
        } else if (tense.textContent === '半過去') {
          return 'ils sentaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient senti';
        } else if (tense.textContent === '単純未来') {
          return 'ils sentiront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils sentent';
      } else if (type.textContent === '条件法') {
        return 'ils sentiraient';
      }
    }
  //croire
  } else if (verb.textContent === 'croire') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je crois';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai cru';
        } else if (tense.textContent === '半過去') {
          return 'je croyais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais cru';
        } else if (tense.textContent === '単純未来') {
          return 'je croirai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je croie';
      } else if (type.textContent === '条件法') {
        return 'je croirais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu crois';
        } else if (tense.textContent === '複合過去') {
          return 'tu as cru';
        } else if (tense.textContent === '半過去') {
          return 'tu croyait';
        } else if (tense.textContent === '大過去') {
          return 'tu avais cru';
        } else if (tense.textContent === '単純未来') {
          return 'tu croiras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu croies';
      } else if (type.textContent === '条件法') {
        return 'tu croirais';
      } else if (type.textContent === '命令法') {
        return 'crois'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il croit';
        } else if (tense.textContent === '複合過去') {
          return 'il a cru';
        } else if (tense.textContent === '半過去') {
          return 'il croyait';
        } else if (tense.textContent === '大過去') {
          return 'il avait cru';
        } else if (tense.textContent === '単純未来') {
          return 'il croira';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il croie';
      } else if (type.textContent === '条件法') {
        return 'il croirait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous croyons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons cru';
        } else if (tense.textContent === '半過去') {
          return 'nous croyions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions cru';
        } else if (tense.textContent === '単純未来') {
          return 'nous croirons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous croyions';
      } else if (type.textContent === '条件法') {
        return 'nous croirions';
      } else if (type.textContent === '命令法') {
        return 'croyons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous croyez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez cru';
        } else if (tense.textContent === '半過去') {
          return 'vous croyiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez cru';
        } else if (tense.textContent === '単純未来') {
          return 'vous croirez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous croyiez';
      } else if (type.textContent === '条件法') {
        return 'vous croiriez';
      } else if (type.textContent === '命令法') {
        return 'croyez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils croient';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont cru';
        } else if (tense.textContent === '半過去') {
          return 'ils croyaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient cru';
        } else if (tense.textContent === '単純未来') {
          return 'ils croiront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils croient';
      } else if (type.textContent === '条件法') {
        return 'ils croiraient';
      }
    }
  //vivre
  } else if (verb.textContent === 'vivre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je vis';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai vécu';
        } else if (tense.textContent === '半過去') {
          return 'je vivais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais vécu';
        } else if (tense.textContent === '単純未来') {
          return 'je vivrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je vive';
      } else if (type.textContent === '条件法') {
        return 'je vivrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu vis';
        } else if (tense.textContent === '複合過去') {
          return 'tu as vécu';
        } else if (tense.textContent === '半過去') {
          return 'tu vivais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais vécu';
        } else if (tense.textContent === '単純未来') {
          return 'tu vivras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu vives';
      } else if (type.textContent === '条件法') {
        return 'tu vivrais';
      } else if (type.textContent === '命令法') {
        return 'vis'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il vit';
        } else if (tense.textContent === '複合過去') {
          return 'il a vécu';
        } else if (tense.textContent === '半過去') {
          return 'il vivait';
        } else if (tense.textContent === '大過去') {
          return 'il avait vécu';
        } else if (tense.textContent === '単純未来') {
          return 'il vivra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il vive';
      } else if (type.textContent === '条件法') {
        return 'il vivrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous vivons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons vécu';
        } else if (tense.textContent === '半過去') {
          return 'nous vivions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions vécu';
        } else if (tense.textContent === '単純未来') {
          return 'nous vivrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous vivions';
      } else if (type.textContent === '条件法') {
        return 'nous vivrions';
      } else if (type.textContent === '命令法') {
        return 'vivons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous vivez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez vécu';
        } else if (tense.textContent === '半過去') {
          return 'vous viviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez vécu';
        } else if (tense.textContent === '単純未来') {
          return 'vous vivrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous viviez';
      } else if (type.textContent === '条件法') {
        return 'vous vivriez';
      } else if (type.textContent === '命令法') {
        return 'vivez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils vivent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont vécu';
        } else if (tense.textContent === '半過去') {
          return 'ils vivaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient vécu';
        } else if (tense.textContent === '単純未来') {
          return 'ils vivront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils vivent';
      } else if (type.textContent === '条件法') {
        return 'ils vivraient';
      }
    }
  //entendre
  } else if (verb.textContent === 'entendre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'entends';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai entendu';
        } else if (tense.textContent === '半過去') {
          return 'j\'entendais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais entendu';
        } else if (tense.textContent === '単純未来') {
          return 'j\'entendrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'entende';
      } else if (type.textContent === '条件法') {
        return 'j\'entendrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu entends';
        } else if (tense.textContent === '複合過去') {
          return 'tu as entendu';
        } else if (tense.textContent === '半過去') {
          return 'tu entendais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais entendu';
        } else if (tense.textContent === '単純未来') {
          return 'tu entendras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu entendes';
      } else if (type.textContent === '条件法') {
        return 'tu entendrais';
      } else if (type.textContent === '命令法') {
        return 'entends';
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il entend';
        } else if (tense.textContent === '複合過去') {
          return 'il a entendu';
        } else if (tense.textContent === '半過去') {
          return 'il entendait';
        } else if (tense.textContent === '大過去') {
          return 'il avait entendu';
        } else if (tense.textContent === '単純未来') {
          return 'il entendra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il entende';
      } else if (type.textContent === '条件法') {
        return 'il entendrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous entendons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons entendu';
        } else if (tense.textContent === '半過去') {
          return 'nous entendions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions entendu';
        } else if (tense.textContent === '単純未来') {
          return 'nous entendrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous entendions';
      } else if (type.textContent === '条件法') {
        return 'nous entendrions';
      } else if (type.textContent === '命令法') {
        return 'entendons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous entendez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez entendu';
        } else if (tense.textContent === '半過去') {
          return 'vous entendiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez entendu';
        } else if (tense.textContent === '単純未来') {
          return 'vous entendrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous entendiez';
      } else if (type.textContent === '条件法') {
        return 'vous entendriez';
      } else if (type.textContent === '命令法') {
        return 'entendez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils entendent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont entendu';
        } else if (tense.textContent === '半過去') {
          return 'ils entendaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient entendu';
        } else if (tense.textContent === '単純未来') {
          return 'ils entendront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils entendent';
      } else if (type.textContent === '条件法') {
        return 'ils entendraient';
      }
    }
  //connaître
  } else if (verb.textContent === 'connaître') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je connais';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai connu';
        } else if (tense.textContent === '半過去') {
          return 'je connaissais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais connu';
        } else if (tense.textContent === '単純未来') {
          return 'je connaîtrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je connaisse';
      } else if (type.textContent === '条件法') {
        return 'je connaîtrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu connais';
        } else if (tense.textContent === '複合過去') {
          return 'tu as connu';
        } else if (tense.textContent === '半過去') {
          return 'tu connaissais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais connu';
        } else if (tense.textContent === '単純未来') {
          return 'tu connaîtras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu connaisses';
      } else if (type.textContent === '条件法') {
        return 'tu connaîtrais';
      } else if (type.textContent === '命令法') {
        return 'connais'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il connaît';
        } else if (tense.textContent === '複合過去') {
          return 'il a connu';
        } else if (tense.textContent === '半過去') {
          return 'il connaissait';
        } else if (tense.textContent === '大過去') {
          return 'il avait connu';
        } else if (tense.textContent === '単純未来') {
          return 'il connaîtra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il connaisse';
      } else if (type.textContent === '条件法') {
        return 'il connaîtrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous connaissons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons connu';
        } else if (tense.textContent === '半過去') {
          return 'nous connaissions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions connu';
        } else if (tense.textContent === '単純未来') {
          return 'nous connaîtrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous connaissions';
      } else if (type.textContent === '条件法') {
        return 'nous connaîtrions';
      } else if (type.textContent === '命令法') {
        return 'connaissons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous connaissez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez connu';
        } else if (tense.textContent === '半過去') {
          return 'vous connaissiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez connu';
        } else if (tense.textContent === '単純未来') {
          return 'vous connaîtrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous connaissiez';
      } else if (type.textContent === '条件法') {
        return 'vous connaîtriez';
      } else if (type.textContent === '命令法') {
        return 'connaissez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils connaissent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont connu';
        } else if (tense.textContent === '半過去') {
          return 'ils connaissaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient connu';
        } else if (tense.textContent === '単純未来') {
          return 'ils connaîtront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils connaissent';
      } else if (type.textContent === '条件法') {
        return 'ils connaîtraient';
      }
    }
  //revenir
  } else if (verb.textContent === 'revenir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je reviens';
        } else if (tense.textContent === '複合過去') {
          return 'je suis revenu';
        } else if (tense.textContent === '半過去') {
          return 'je revenais';
        } else if (tense.textContent === '大過去') {
          return 'j\'étais revenu';
        } else if (tense.textContent === '単純未来') {
          return 'je reviendrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je revienne';
      } else if (type.textContent === '条件法') {
        return 'je reviendrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu reviens';
        } else if (tense.textContent === '複合過去') {
          return 'tu es revenu';
        } else if (tense.textContent === '半過去') {
          return 'tu revenais';
        } else if (tense.textContent === '大過去') {
          return 'tu étais revenu(';
        } else if (tense.textContent === '単純未来') {
          return 'tu reviendras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu reviennes';
      } else if (type.textContent === '条件法') {
        return 'tu reviendrais';
      } else if (type.textContent === '命令法') {
        return 'reviens'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il revient';
        } else if (tense.textContent === '複合過去') {
          return 'il est revenu';
        } else if (tense.textContent === '半過去') {
          return 'il revenait';
        } else if (tense.textContent === '大過去') {
          return 'il était revenu';
        } else if (tense.textContent === '単純未来') {
          return 'il reviendra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il revienne';
      } else if (type.textContent === '条件法') {
        return 'il reviendrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous revenons';
        } else if (tense.textContent === '複合過去') {
          return 'nous sommes revenus';
        } else if (tense.textContent === '半過去') {
          return 'nous revenions';
        } else if (tense.textContent === '大過去') {
          return 'nous étions revenus';
        } else if (tense.textContent === '単純未来') {
          return 'nous reviendrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous revenions';
      } else if (type.textContent === '条件法') {
        return 'nous reviendrions';
      } else if (type.textContent === '命令法') {
        return 'revenons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous revenez';
        } else if (tense.textContent === '複合過去') {
          return 'vous êtes revenu';
        } else if (tense.textContent === '半過去') {
          return 'vous reveniez';
        } else if (tense.textContent === '大過去') {
          return 'vous étiez revenu';
        } else if (tense.textContent === '単純未来') {
          return 'vous reviendrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous reveniez';
      } else if (type.textContent === '条件法') {
        return 'vous reviendriez';
      } else if (type.textContent === '命令法') {
        return 'revenez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils reviennent';
        } else if (tense.textContent === '複合過去') {
          return 'ils sont revenus';
        } else if (tense.textContent === '半過去') {
          return 'ils revenaient';
        } else if (tense.textContent === '大過去') {
          return 'ils étaient revenus';
        } else if (tense.textContent === '単純未来') {
          return 'ils reviendront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils reviennent';
      } else if (type.textContent === '条件法') {
        return 'ils reviendraient';
      }
    }
  //comprendre
  } else if (verb.textContent === 'comprendre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je comprends';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai compris';
        } else if (tense.textContent === '半過去') {
          return 'je comprenais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais compris';
        } else if (tense.textContent === '単純未来') {
          return 'je comprendrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je comprenne';
      } else if (type.textContent === '条件法') {
        return 'je comprendrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu comprends';
        } else if (tense.textContent === '複合過去') {
          return 'tu as compris';
        } else if (tense.textContent === '半過去') {
          return 'tu comprenais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais compris';
        } else if (tense.textContent === '単純未来') {
          return 'tu comprendras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu comprennes';
      } else if (type.textContent === '条件法') {
        return 'tu comprendrais';
      } else if (type.textContent === '命令法') {
        return 'comprends'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il comprend';
        } else if (tense.textContent === '複合過去') {
          return 'il a compris';
        } else if (tense.textContent === '半過去') {
          return 'il comprenait';
        } else if (tense.textContent === '大過去') {
          return 'il avait compris';
        } else if (tense.textContent === '単純未来') {
          return 'il comprendra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il comprenne';
      } else if (type.textContent === '条件法') {
        return 'il comprendrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous comprenons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons compris';
        } else if (tense.textContent === '半過去') {
          return 'nous comprenions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions compris';
        } else if (tense.textContent === '単純未来') {
          return 'nous comprendrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous comprenions';
      } else if (type.textContent === '条件法') {
        return 'nous comprendrions';
      } else if (type.textContent === '命令法') {
        return 'comprenons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous comprenez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez compris';
        } else if (tense.textContent === '半過去') {
          return 'vous compreniez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez compris';
        } else if (tense.textContent === '単純未来') {
          return 'vous comprendrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous compreniez';
      } else if (type.textContent === '条件法') {
        return 'vous comprendriez';
      } else if (type.textContent === '命令法') {
        return 'comprenez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils comprennent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont compris';
        } else if (tense.textContent === '半過去') {
          return 'ils comprenaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient compris';
        } else if (tense.textContent === '単純未来') {
          return 'ils comprendront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils comprennent';
      } else if (type.textContent === '条件法') {
        return 'ils comprendraient';
      }
    }
  //sembler
  } else if (verb.textContent === 'sembler') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je semble';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai semblé';
        } else if (tense.textContent === '半過去') {
          return 'je semblais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais semblé';
        } else if (tense.textContent === '単純未来') {
          return 'je semblerai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je semble';
      } else if (type.textContent === '条件法') {
        return 'je semblerais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu sembles';
        } else if (tense.textContent === '複合過去') {
          return 'tu as semblé';
        } else if (tense.textContent === '半過去') {
          return 'tu semblais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais semblé';
        } else if (tense.textContent === '単純未来') {
          return 'tu sembleras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu sembles';
      } else if (type.textContent === '条件法') {
        return 'tu semblerais';
      } else if (type.textContent === '命令法') {
        return 'semble'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il semble';
        } else if (tense.textContent === '複合過去') {
          return 'il a semblé';
        } else if (tense.textContent === '半過去') {
          return 'il semblait';
        } else if (tense.textContent === '大過去') {
          return 'il avait semblé';
        } else if (tense.textContent === '単純未来') {
          return 'il semblera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il semble';
      } else if (type.textContent === '条件法') {
        return 'il semblerait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous semblons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons semblé';
        } else if (tense.textContent === '半過去') {
          return 'nous semblions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions semblé';
        } else if (tense.textContent === '単純未来') {
          return 'nous semblerons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous semblions';
      } else if (type.textContent === '条件法') {
        return 'nous semblerions';
      } else if (type.textContent === '命令法') {
        return 'semblons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous semblez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez semblé';
        } else if (tense.textContent === '半過去') {
          return 'vous sembliez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez semblé';
        } else if (tense.textContent === '単純未来') {
          return 'vous semblerez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous sembliez';
      } else if (type.textContent === '条件法') {
        return 'vous sembleriez';
      } else if (type.textContent === '命令法') {
        return 'semblez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils semblent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont semblé';
        } else if (tense.textContent === '半過去') {
          return 'ils semblaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient semblé';
        } else if (tense.textContent === '単純未来') {
          return 'ils sembleront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils semblent';
      } else if (type.textContent === '条件法') {
        return 'ils sembleraient';
      }
    }
  //laisser
  } else if (verb.textContent === 'laisser') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je laisse';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai laissé';
        } else if (tense.textContent === '半過去') {
          return 'je laissais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais laissé';
        } else if (tense.textContent === '単純未来') {
          return 'je laisserai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je laisse';
      } else if (type.textContent === '条件法') {
        return 'je laisserais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu laisses';
        } else if (tense.textContent === '複合過去') {
          return 'tu as laissé';
        } else if (tense.textContent === '半過去') {
          return 'tu laissais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais laissé';
        } else if (tense.textContent === '単純未来') {
          return 'tu laisseras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu laisses';
      } else if (type.textContent === '条件法') {
        return 'tu laisserais';
      } else if (type.textContent === '命令法') {
        return 'laisse'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il laisse';
        } else if (tense.textContent === '複合過去') {
          return 'il a laissé';
        } else if (tense.textContent === '半過去') {
          return 'il laissait';
        } else if (tense.textContent === '大過去') {
          return 'il avait laissé';
        } else if (tense.textContent === '単純未来') {
          return 'il laissera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il laisse';
      } else if (type.textContent === '条件法') {
        return 'il laisserait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous laissons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons laissé';
        } else if (tense.textContent === '半過去') {
          return 'nous laissions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions laissé';
        } else if (tense.textContent === '単純未来') {
          return 'nous laisserons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous laissions';
      } else if (type.textContent === '条件法') {
        return 'nous laisserions';
      } else if (type.textContent === '命令法') {
        return 'laissons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous laissez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez laissé';
        } else if (tense.textContent === '半過去') {
          return 'vous laissiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez laissé';
        } else if (tense.textContent === '単純未来') {
          return 'vous laisserez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous laissiez';
      } else if (type.textContent === '条件法') {
        return 'vous laisseriez';
      } else if (type.textContent === '命令法') {
        return 'laissez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils laissent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont laissé';
        } else if (tense.textContent === '半過去') {
          return 'ils laissaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient laissé';
        } else if (tense.textContent === '単純未来') {
          return 'ils laisseront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils laissent';
      } else if (type.textContent === '条件法') {
        return 'ils laisseraient';
      }
    }
  //répondre
  } else if (verb.textContent === 'répondre') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je réponds';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai répondu';
        } else if (tense.textContent === '半過去') {
          return 'je répondais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais répondu';
        } else if (tense.textContent === '単純未来') {
          return 'je répondrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je réponde';
      } else if (type.textContent === '条件法') {
        return 'je répondrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu réponds';
        } else if (tense.textContent === '複合過去') {
          return 'tu as répondu';
        } else if (tense.textContent === '半過去') {
          return 'tu répondais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais répondu';
        } else if (tense.textContent === '単純未来') {
          return 'tu répondras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu répondes';
      } else if (type.textContent === '条件法') {
        return 'tu répondrais';
      } else if (type.textContent === '命令法') {
        return 'réponds'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il répond';
        } else if (tense.textContent === '複合過去') {
          return 'il a répondu';
        } else if (tense.textContent === '半過去') {
          return 'il répondait';
        } else if (tense.textContent === '大過去') {
          return 'il avait répondu';
        } else if (tense.textContent === '単純未来') {
          return 'il répondra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il réponde';
      } else if (type.textContent === '条件法') {
        return 'il répondrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous répondons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons répondu';
        } else if (tense.textContent === '半過去') {
          return 'nous répondions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions répondu';
        } else if (tense.textContent === '単純未来') {
          return 'nous répondrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous répondions';
      } else if (type.textContent === '条件法') {
        return 'nous répondrions';
      } else if (type.textContent === '命令法') {
        return 'répondons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous répondez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez répondu';
        } else if (tense.textContent === '半過去') {
          return 'vous répondiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez répondu';
        } else if (tense.textContent === '単純未来') {
          return 'vous répondrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous répondiez';
      } else if (type.textContent === '条件法') {
        return 'vous répondriez';
      } else if (type.textContent === '命令法') {
        return 'répondez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils répondent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont répondu';
        } else if (tense.textContent === '半過去') {
          return 'ils répondaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient répondu';
        } else if (tense.textContent === '単純未来') {
          return 'ils répondront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils répondent';
      } else if (type.textContent === '条件法') {
        return 'ils répondraient';
      }
    }
  //penser
  } else if (verb.textContent === 'penser') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je pense';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai pensé';
        } else if (tense.textContent === '半過去') {
          return 'je pensais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais pensé';
        } else if (tense.textContent === '単純未来') {
          return 'je penserai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je pense';
      } else if (type.textContent === '条件法') {
        return 'je penserais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu penses';
        } else if (tense.textContent === '複合過去') {
          return 'tu as pensé';
        } else if (tense.textContent === '半過去') {
          return 'tu pensais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais pensé';
        } else if (tense.textContent === '単純未来') {
          return 'tu penseras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu penses';
      } else if (type.textContent === '条件法') {
        return 'tu penserais';
      } else if (type.textContent === '命令法') {
        return 'pense'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il pense';
        } else if (tense.textContent === '複合過去') {
          return 'il a pensé';
        } else if (tense.textContent === '半過去') {
          return 'il pensait';
        } else if (tense.textContent === '大過去') {
          return 'il avait pensé';
        } else if (tense.textContent === '単純未来') {
          return 'il pensera';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il pense';
      } else if (type.textContent === '条件法') {
        return 'il penserait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous pensons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons pensé';
        } else if (tense.textContent === '半過去') {
          return 'nous pensions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions pensé';
        } else if (tense.textContent === '単純未来') {
          return 'nous penserons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous pensions';
      } else if (type.textContent === '条件法') {
        return 'nous penserions';
      } else if (type.textContent === '命令法') {
        return 'pensons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous pensez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez pensé';
        } else if (tense.textContent === '半過去') {
          return 'vous pensiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez pensé';
        } else if (tense.textContent === '単純未来') {
          return 'vous penserez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous pensiez';
      } else if (type.textContent === '条件法') {
        return 'vous penseriez';
      } else if (type.textContent === '命令法') {
        return 'pensez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils pensent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont pensé';
        } else if (tense.textContent === '半過去') {
          return 'ils pensaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient pensé';
        } else if (tense.textContent === '単純未来') {
          return 'ils penseront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils pensent';
      } else if (type.textContent === '条件法') {
        return 'ils penseraient';
      }
    }
  //envoyer
  } else if (verb.textContent === 'envoyer') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'j\'envoie';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai envoyé';
        } else if (tense.textContent === '半過去') {
          return 'j\'envoyais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais envoyé';
        } else if (tense.textContent === '単純未来') {
          return 'j\'enverrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que j\'envoie';
      } else if (type.textContent === '条件法') {
        return 'j\'enverrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu envoies';
        } else if (tense.textContent === '複合過去') {
          return 'tu as envoyé';
        } else if (tense.textContent === '半過去') {
          return 'tu envoyais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais envoyé';
        } else if (tense.textContent === '単純未来') {
          return 'tu enverras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu envoies';
      } else if (type.textContent === '条件法') {
        return 'tu enverrais';
      } else if (type.textContent === '命令法') {
        return 'envoie';
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il envoie';
        } else if (tense.textContent === '複合過去') {
          return 'il a envoyé';
        } else if (tense.textContent === '半過去') {
          return 'il envoyait';
        } else if (tense.textContent === '大過去') {
          return 'il avait envoyé';
        } else if (tense.textContent === '単純未来') {
          return 'il enverra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il envoie';
      } else if (type.textContent === '条件法') {
        return 'il enverrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous envoyons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons envoyé';
        } else if (tense.textContent === '半過去') {
          return 'nous envoyions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions envoyé';
        } else if (tense.textContent === '単純未来') {
          return 'nous enverrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous envoyions';
      } else if (type.textContent === '条件法') {
        return 'nous enverrions';
      } else if (type.textContent === '命令法') {
        return 'envoyons';
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous envoyez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez envoyé';
        } else if (tense.textContent === '半過去') {
          return 'vous envoyiez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez envoyé';
        } else if (tense.textContent === '単純未来') {
          return 'vous enverrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous envoyiez';
      } else if (type.textContent === '条件法') {
        return 'vous enverriez';
      } else if (type.textContent === '命令法') {
        return 'envoyez';
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils envoient';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont envoyé';
        } else if (tense.textContent === '半過去') {
          return 'ils envoyaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient envoyé';
        } else if (tense.textContent === '単純未来') {
          return 'ils enverront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils envoient';
      } else if (type.textContent === '条件法') {
        return 'ils enverraient';
      }
    }
  //recevoir
  } else if (verb.textContent === 'recevoir') {
    if (subject.textContent === 'je') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'je reçois';
        } else if (tense.textContent === '複合過去') {
          return 'j\'ai reçu';
        } else if (tense.textContent === '半過去') {
          return 'je recevais';
        } else if (tense.textContent === '大過去') {
          return 'j\'avais reçu';
        } else if (tense.textContent === '単純未来') {
          return 'je recevrai';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que je reçoive';
      } else if (type.textContent === '条件法') {
        return 'je recevrais';
      }
    } else if (subject.textContent === 'tu') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'tu reçois';
        } else if (tense.textContent === '複合過去') {
          return 'tu as reçu';
        } else if (tense.textContent === '半過去') {
          return 'tu recevais';
        } else if (tense.textContent === '大過去') {
          return 'tu avais reçu';
        } else if (tense.textContent === '単純未来') {
          return 'tu recevras';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que tu reçoives';
      } else if (type.textContent === '条件法') {
        return 'tu recevrais';
      } else if (type.textContent === '命令法') {
        return 'reçois'
      }
    } else if (subject.textContent === 'il') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'il reçoit';
        } else if (tense.textContent === '複合過去') {
          return 'il a reçu';
        } else if (tense.textContent === '半過去') {
          return 'il recevait';
        } else if (tense.textContent === '大過去') {
          return 'il avait reçu';
        } else if (tense.textContent === '単純未来') {
          return 'il recevra';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'il reçoive';
      } else if (type.textContent === '条件法') {
        return 'il recevrait';
      }
    } else if (subject.textContent === 'nous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'nous recevons';
        } else if (tense.textContent === '複合過去') {
          return 'nous avons reçu';
        } else if (tense.textContent === '半過去') {
          return 'nous recevions';
        } else if (tense.textContent === '大過去') {
          return 'nous avions reçu';
        } else if (tense.textContent === '単純未来') {
          return 'nous recevrons';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que nous recevions';
      } else if (type.textContent === '条件法') {
        return 'nous recevrions';
      } else if (type.textContent === '命令法') {
        return 'recevons'
      }
    } else if (subject.textContent === 'vous') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'vous recevez';
        } else if (tense.textContent === '複合過去') {
          return 'vous avez reçu';
        } else if (tense.textContent === '半過去') {
          return 'vous receviez';
        } else if (tense.textContent === '大過去') {
          return 'vous aviez reçu';
        } else if (tense.textContent === '単純未来') {
          return 'vous recevrez';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'que vous receviez';
      } else if (type.textContent === '条件法') {
        return 'vous recevraient';
      } else if (type.textContent === '命令法') {
        return 'recevez'
      }
    } else if (subject.textContent === 'ils') {
      if (type.textContent === '直接法') {
        if (tense.textContent === '現在') {
          return 'ils reçoivent';
        } else if (tense.textContent === '複合過去') {
          return 'ils ont reçu';
        } else if (tense.textContent === '半過去') {
          return 'ils recevaient';
        } else if (tense.textContent === '大過去') {
          return 'ils avaient reçu';
        } else if (tense.textContent === '単純未来') {
          return 'ils recevront';
        }
      } else if (type.textContent === '接続法(queから入力)') {
        return 'qu\'ils reçoivent';
      } else if (type.textContent === '条件法') {
        return 'ils recevraient';
      }
    }
  } else {
    return 'error';
  }
};

window.globalFunction = {};
window.globalFunction.getCorrect = getCorrect;
