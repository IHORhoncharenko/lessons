'use strict';
(
    () => {

        var targetElementMain = document.getElementsByTagName('body')[0];
        var backgroundObj = {
            'background-color': 'red',
            'background-image': 'url("https://img.freepik.com/free-photo/cute-cat-relaxing-indoors_23-2150692940.jpg")',
            'background-position': 'top',
            'background-size': '/ cover',
            'background-repeat': 'repeat-x',
            'background-attachment': 'scroll',
            'background-origin': 'border-box',
            'background-clip': 'border-box'
        };

        var backgroundObjArr = Object.entries(backgroundObj);

        backgroundObjArr.forEach(([key, value]) => {
            document.getElementsByClassName('properties__result')[0]['style'][key] = value;
        });

        //за какими изменениями у елемента наблюдает обсервер
        var configMain = {
            subtree: true,
            characterData: true
        };

        // 2 Колбэк-функция при срабатывании мутации(первый принимаемый параметр это массив изменений в ДОМ)
        var callbackMain = (mutationsList, observerMain) => {
            console.log(mutationsList);
            (
                () => {
                    var styleText = '';

                    [...document.getElementsByClassName('properties')].forEach((e) => {
                        [...e['children']].forEach((el) => {
                            (el['localName'] === 'h2') && (`
                                ${el['children'][0].addEventListener('click', () => {
                                (el['nextElementSibling']['classList'].contains('properties__content')) && (`
                                        ${el['nextElementSibling']['classList'].toggle('hide')}
                                        ${[...el['children']].forEach((ell) => {
                                    (ell['localName'] === 'i') && (`
                                                ${(
                                            () => {
                                                var classNameEl = el['nextElementSibling']['className'];

                                                switch (classNameEl) {
                                                    case 'properties__content hide':
                                                        (ell['nextElementSibling']['localName'] === 'svg') && (`
                                                                    ${ell['nextElementSibling'].remove()}
                                                                `);
                                                        ell.insertAdjacentHTML('afterend', `
                                                                                    <svg>
                                                                                        <use xlink:href="img/sprite.svg#arrow-up"></use>
                                                                                    </svg>
                                                                                    `)
                                                        break;
                                                    case 'properties__content':
                                                        (ell['nextElementSibling']['localName'] === 'svg') && (`
                                                                                    ${ell['nextElementSibling'].remove()}
                                                                                `);
                                                        ell.insertAdjacentHTML('afterend', `
                                                                                    <svg>
                                                                                        <use xlink:href="img/sprite.svg#arrow-down"></use>
                                                                                    </svg>
                                                                                `)
                                                        break;
                                                    default:
                                                        break;
                                                }
                                            }
                                        )()}
                                            `)
                                })}
                                    `);
                            })}
                            `);
                        });
                    });

                    (
                        () => {

                            (
                                () => {
                                    [...document.getElementsByTagName('select')].forEach((e) => {
                                        (e['dataset']['selected']) && (`
                                            ${e.addEventListener('click', () => {
                                            e['dataset']['selected'] = e['value'];
                                        })}
                                        `);
                                    });

                                }
                            )();

                            var targetElement = document.getElementsByClassName('emulation-group__emulation')[0];

                            var config = {
                                subtree: true,
                                attributeFilter: ['data-selected']
                            };

                            var callback = (mutationsList, observer) => {
                                console.log(mutationsList);

                                mutationsList.forEach((e) => {
                                    backgroundObj[`background-${e['target']['name']}`] = e['target']['value'];
                                });

                                var backgroundObjArr = Object.entries(backgroundObj);

                                backgroundObjArr.forEach(([key, value]) => {
                                    document.getElementsByClassName('properties__result')[0]['style'][key] = value;
                                });

                            };

                            var observer = new MutationObserver(callback);

                            (targetElement) && (observer.observe(targetElement, config));
                        }
                    )();

                    [...document.getElementsByTagName('input')].forEach((e) => {
                        (e['name'] === 'background') && (`
                            ${e['defaultValue'] = `введіть валідне значенння універсальної властивості 'background'...`};
                            ${e['style']['minWidth'] = `${e['defaultValue'].length}ch`};
                            ${e['style']['color'] = `gray`};
                            ${e['style']['borderBottom'] = `2px solid gray`};
                            ${e.addEventListener('click', () => {
                            e['defaultValue'] = '';
                            e.addEventListener('input', (event) => {
                                e['style']['minWidth'] = `${event['target']['value']['length']}ch`;
                                styleText = e['value'];
                                [...document.getElementById('background-prop')['children']].forEach((r) => {
                                    [...r['children']].forEach((t) => {
                                        (t['className'] === 'properties__result') && (`
                                                ${t['style']['background'] = styleText}
                                            `);
                                    });
                                });
                            })
                        })}
                        `)
                    });

                    [...document.getElementsByClassName('emulation-group')[0]['children']].forEach((e) => {
                        (e['className'] === 'emulation-group__check') && (`
                            ${[...e['children'][0]['children']].forEach((el) => {
                            (el['name'] === 'develop') && (`
                                    ${el.addEventListener('change', (event) => {
                                switch (event['target']['checked']) {
                                    case true:
                                        document.getElementsByClassName('emulation-group__emulation')[0]['style']['display'] = 'none';
                                        document.getElementsByClassName('emulation-group__emulation-dev')[0]['style']['display'] = 'block';
                                        break;
                                    case false:
                                        document.getElementsByClassName('emulation-group__emulation')[0]['style']['display'] = 'block';
                                        document.getElementsByClassName('emulation-group__emulation-dev')[0]['style']['display'] = 'none';
                                        break;
                                    default:
                                        break;
                                }
                            })}
                                `);
                        })}
                        `);
                    });

                    [...document.getElementsByClassName('emulation-group__emulation-dev')[0]['children']].forEach((e) => {
                        (e['localName'] === 'svg') && (`
                            ${e.addEventListener('click', () => {
                            e['classList'].toggle('modal');
                        })}
                        `);
                    });
                }
            )();
        };

        // 1. Создаём экземпляр наблюдателя с указанной функцией колбэка
        var observerMain = new MutationObserver(callbackMain);

        // 3. Начинаем наблюдение за настроенными изменениями целевого элемента (targetElement - элемент за которым наблюдаем, config - за какими изменениями в элементе наблюдаем)
        (targetElementMain) && (`
            ${observerMain.observe(targetElementMain, configMain)}
        `);

        (
            () => {
                var correctPath = 'img/';
                var arrObjArticles = [
                    {
                        'name': 'Financial Investment',
                        'img': 'dec-1.jpg',
                        'date': 'Sep 2022'
                    },
                    {
                        'name': 'Marketing Strategy',
                        'img': 'dec-2.jpg',
                        'date': 'Sep 2022'
                    },
                    {
                        'name': 'Business Consulting',
                        'img': 'dec-3.jpg',
                        'date': 'Sep 2022'
                    },
                    {
                        'name': 'Financial Investment',
                        'img': 'dec-4.jpg',
                        'date': 'Sep 2022'
                    },
                    {
                        'name': 'Web Development',
                        'img': 'dec-5.jpg',
                        'date': 'Sep 2022'
                    },
                    {
                        'name': 'Financial Investment',
                        'img': 'dec-6.jpg',
                        'date': 'Sep 2022'
                    }
                ];

                var createComponent = (arrObjArticles) => {

                    var createStyleElem = (elem, properties, value) => {
                        elem['style'][`${properties}`] = `${value}`;
                    }

                    arrObjArticles.forEach((e) => {
                        var mainWrapArticle = document.createElement('article');
                        var wrapArticleImg = document.createElement('div');
                        var headingArticle = document.createElement('h3');
                        var aLink = document.createElement('a');
                        var timeArticle = document.createElement('time');
                        var svgCalendar = `<svg style="width: 22px; height: 22px; display: inline-block; margin-right: 3px; fill: none"><use xlink:href="${correctPath}sprite.svg#calendar"></use></svg>`;
                        var svgTimeWrap = document.createElement('div');

                        var styleElem = [
                            {
                                'elem': 'timeArticle',
                                'color': '#7D7D7D',
                                'fontFamily': `'Inter', 'san-serif'`,
                                'fontSize': '14px',
                                'lineHeight': '1.46',
                                'display': 'inline-block',
                                'verticalAlign': 'super',
                            },
                            {
                                'elem': 'wrapArticleImg',
                                'background': `url(${correctPath}${e['img']})`,
                                'marginBottom': '24px',
                                'width': '384px',
                                'height': '501px',
                                'repeat': 'no-repeat',
                            },
                            {
                                'elem': 'headingArticle',
                                'fontFamily': `'Poppins', 'san-serif'`,
                                'fontSize': '20px',
                                'fontWeight': '600',
                                'lineHeight': '1.27',
                                'marginBottom': '10px',
                                'textTransform': 'capitalize',
                            },
                            {
                                'elem': 'mainWrapArticle',
                                'display': 'inline-block',
                            },
                            {
                                'elem': 'svgTimeWrap',
                                'display': 'inline-block',
                            },

                        ];

                        styleElem.forEach((e2) => {
                            var buff = Object.entries(e2);

                            switch (e2['elem']) {
                                case 'timeArticle':
                                    buff.forEach(([key, value]) => {
                                        createStyleElem(timeArticle, key, value);
                                    });
                                    break;
                                case 'wrapArticleImg':
                                    buff.forEach(([key, value]) => {
                                        createStyleElem(wrapArticleImg, key, value);
                                    });
                                    break;
                                case 'headingArticle':
                                    buff.forEach(([key, value]) => {
                                        createStyleElem(headingArticle, key, value);
                                    });
                                    break;
                                case 'mainWrapArticle':
                                    buff.forEach(([key, value]) => {
                                        createStyleElem(mainWrapArticle, key, value);
                                    });
                                    break;
                                case 'svgCalendar':
                                    buff.forEach(([key, value]) => {
                                        createStyleElem(svgCalendar, key, value);
                                    });
                                    break;
                                case 'svgTimeWrap':
                                    buff.forEach(([key, value]) => {
                                        createStyleElem(svgTimeWrap, key, value);
                                    });
                                    break;
                                default:
                                    break;
                            }
                        });

                        mainWrapArticle.setAttribute('class', 'figma__articles-container__article-wrap');

                        timeArticle['textContent'] = `${e['date']}`;
                        aLink['textContent'] = `${e['name']}`;
                        aLink.setAttribute('href', '#');

                        headingArticle.insertAdjacentElement('beforeend', aLink);
                        svgTimeWrap.insertAdjacentHTML('beforeend', svgCalendar);
                        svgTimeWrap.insertAdjacentElement('beforeend', timeArticle);

                        document.getElementsByClassName('figma__articles-container')[0].insertAdjacentElement('beforeend', mainWrapArticle);
                        mainWrapArticle.insertAdjacentElement('beforeend', wrapArticleImg);
                        mainWrapArticle.insertAdjacentElement('beforeend', headingArticle);
                        mainWrapArticle.insertAdjacentElement('beforeend', svgTimeWrap);
                    });
                }
                createComponent(arrObjArticles);
            }
        )();

        (
            () => {
                var mainTextContainer = document.getElementsByClassName('clothing__text-container');
                
                [...document.getElementById('clothing')['children']].forEach((e) => {
                    (e['localName'] === 'button') && (`
                        ${e.addEventListener('click', () => {
                            mainTextContainer[0]['classList'].toggle('active');
                        })}
                    `);
                })
            }
        )();
    }
)();

