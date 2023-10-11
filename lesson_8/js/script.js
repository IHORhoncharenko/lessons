'use strict';
(
    () => {

        var targetElementMain = document.getElementsByTagName('body')[0];

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
                    var backgroundObj = JSON.parse(`{}`);

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

                                            //за какими изменениями у елемента наблюдает обсервер
                                            var config = {
                                                subtree: true,
                                                attributeFilter: ['data-selected']
                                            };

                                            // 2 Колбэк-функция при срабатывании мутации(первый принимаемый параметр это массив изменений в ДОМ)
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

                                            // 1. Создаём экземпляр наблюдателя с указанной функцией колбэка
                                            var observer = new MutationObserver(callback);

                                            // 3. Начинаем наблюдение за настроенными изменениями целевого элемента (targetElement - элемент за которым наблюдаем, config - за какими изменениями в элементе наблюдаем)
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
                                                            (t['className'] === 'properties__result__wrap') && (`
                                                                ${t['children'][0]['style']['background'] = styleText}
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
                (targetElementMain) && (observerMain.observe(targetElementMain, configMain));



        
        
    }
)();

