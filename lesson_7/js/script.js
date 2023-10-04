// Структура мого документу та саме макет диктує необхідність вказувати зовнішні відступи. Так як рекомендується робити зовнішні відступи зверзу вниз, в моїй структурі всі зовнішні відступи повинні вказуватись від сексії nav і динамічно змінюватись враховуючи яка секція контенту наразі відображається, щоб досягти ідентичності з макетом
'use strict';
(
    () => {
        var sectionObj = [
            {
                'id':'licencing-page',
                'marginBottom': '150px'
            },
            {
                'id':'project-information-page',
                'marginBottom': '50px'
            },
            {
                'id':'clothing-page',
                'marginBottom': '100px'
            },
            {
                'id':'jewels',
                'marginBottom': '160px'
            },
            {
                'id':'images-border',
                'marginBottom': '10px'
            }
        ];

        (
            () => {
                [...document.getElementsByTagName('body')[0]['children']].forEach((e, i) => {
                    (e['localName'] === 'article' && e.hasAttribute('id')) && (`
                        ${(i === 1) && (`
                            ${e['classList'].add('active')}
                            ${document.getElementsByTagName('nav')[0]['style']['marginBottom'] = '150px'}
                        `)}
                    `);
                });
            }
        )();

        (
            () => {
                [...document.getElementsByTagName('body')[0]['children']].forEach((e) => {
                    ((e['localName'] === 'article' || e['localName'] === 'aside') && e.hasAttribute('id')) && (`
                        ${[...document.getElementsByTagName('nav')[0]['children']].forEach((el) => {
                            (el['localName'] === 'ul' && el['dataset']['id'] === 'main-navigation') && (`
                                ${[...el['children']].forEach((li) => {
                                    li.addEventListener('click', () => {
                                        e['classList'].remove('active');
                                        (e['id'].includes(li['dataset']['id'])) && (`
                                            ${e['classList'].toggle('active')}
                                        `);
                                        (e['classList'].contains('active')) && (`
                                            ${(
                                                    (e) => {
                                                        sectionObj.forEach((sec) => {
                                                            switch (e['id']) {
                                                                case sec['id']:
                                                                    document.getElementsByTagName('nav')[0]['style']['marginBottom'] = sec['marginBottom'];
                                                                    break;
                                                                default:
                                                                    break;
                                                            }
                                                        })
                                                    }
                                                )(e)}
                                        `)
                                    });

                                })}
                            `);
                        })}
                    `);
                });
            }
        )();

        (
            () => {
                var sectionTextClothingPage = document.getElementsByClassName('clothing-page-text');
                var btn = document.getElementsByTagName('button');

                btn[0].addEventListener('click', () => {
                    btn[0]['innerHTML'] = 'See More';
                    sectionTextClothingPage[0]['classList'].toggle('show');
                    (sectionTextClothingPage[0]['classList'].contains('show')) && (`
                        ${btn[0].scrollIntoView()}
                        ${btn[0]['innerHTML'] = 'Collapse text'}
                    `);
                })
            }
        )();

    }
)();
