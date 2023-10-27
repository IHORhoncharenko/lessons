'use strict';

(
    () => {
        console.log(`робота учня: %c IHOR[honcharenko]`,
            `text-shadow: rgba(114, 105, 109, 0.98) 3px 3px 20px, rgb(87, 217, 102) -2px 5px 30px;color: white; font-size: 30px`);
        [...document.getElementsByClassName('faq-container')[0]['children']].forEach((e) => {
            (e['localName'] === 'dl') && (`
                ${[...e['children']].forEach((div) => {
                [...div['children']].forEach((childEl) => {
                    (childEl['localName'] === 'dt') && (`
                            ${(
                            () => {
                                childEl['children'][0].addEventListener('click', () => {
                                    childEl['classList'].toggle('show');
                                    childEl['children'][0]['classList'].toggle('close');
                                    childEl['nextElementSibling']['classList'].toggle('show');
                                });
                            }
                        )()}
                        `);
                });
            })}
            `);
        });
    }
)();
(
    () => {
        [...document.getElementsByClassName('business-plan-container')[0]['children']].forEach((e) => {
            (e['localName'] === 'button') && (`
                ${e.addEventListener('click', () => {
                [...document.getElementsByClassName('business-plan-container')[0]['children']].forEach((e2) => {
                    (e2['localName'] === 'dl') && (`
                            ${e2['classList'].toggle('show')};
                            ${e2.scrollIntoView({ block: "center", behavior: "smooth" })}
                        `);
                });
            })}
            `);
        })
    }
)();