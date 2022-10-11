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
        return 'que tu mange';
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
          return 'Je suis rentré';
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
          return 'Je suis parti';
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
  } else {
    return 'error';
  }
};

window.globalFunction = {};
window.globalFunction.getCorrect = getCorrect;
