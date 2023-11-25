'use strict';

(
    () => {
        var propertiesCss = [
            'transform',
            'opacity',
            'transform-style',
            'backface-visibility',
            'transform-origin',
            'perspective-origin'
        ];

        var arrDyn = JSON.parse(`[]`);

        [...document.getElementsByClassName('practice')[0]['children'][0]['children']].forEach((e) => {
            [...e['children']].forEach((elem) => {

                (elem['localName'] === 'input') && (`
                    ${(
                        () => {
                            elem.addEventListener('input', () => {
                                [...document.getElementsByClassName('practice__item')].forEach((e2) => {
                                    
                                    try{

                                        (elem['value'].includes('scale')) && (`
                                            ${e2['style']['opacity'] = '0.7'};
                                        `);
                                        
                                        e2['style']['transform'] = `${elem['value']}`;
                            
                                        (!e2['children'][0]) && (`
                                            ${e2.insertAdjacentHTML('afterbegin', `<p>${e2['style']['transform']}</p>`)}
                                        `);

                                        (e2['children'][0]['localName'] === 'p') && (`
                                            ${e2['children'][0]['textContent'] = e2['style']['transform']}
                                        `);

                                    } catch(err){
                                        console.error(err); 
                                    }

                                });
                            });
                        }
                    )()};
                `);

                (elem['localName'] === 'span') && (`
                    ${(
                        () => {
                            elem.addEventListener('mouseover', () => {
                                [...document.getElementsByClassName('practice__item')].forEach((e2) => {
            
                                    (elem['textContent'].includes('style')) && (`
                                        ${e2['style']['transform-style'] = `${elem['nextElementSibling']['value']}`};
                                        ${e2.insertAdjacentHTML('afterbegin', `<p>${e2['style']['transform-style']}</p>`)};
                                    `);
            
                                    (elem['textContent'].includes('visibility')) && (`
                                        ${e2['style']['backface-visibility'] = `${elem['nextElementSibling']['value']}`};
                                        ${e2.insertAdjacentHTML('afterbegin', `<p>${e2['style']['backface-visibility']}</p>`)};
                                    `);
            
                                    (elem['textContent'] === 'Transform-origin') && (`
                                        ${e2['style']['transform-origin'] = `${elem['nextElementSibling']['value']}`};
                                        ${e2.insertAdjacentHTML('afterbegin', `<p>${e2['style']['transform-origin']}</p>`)};
                                    `);
            
                                    (elem['textContent'] === 'Perspective-origin') && (`
                                        ${e2['style']['perspective-origin'] = `${elem['nextElementSibling']['value']}`};
                                        ${e2.insertAdjacentHTML('afterbegin', `<p>${e2['style']['perspective-origin']}</p>`)};
                                    `);
            
                                    e2['style']['transform'] = `${elem['nextElementSibling']['value']}`;
            
                                    (elem['nextElementSibling']['value'].includes('scale')) && (`
                                        ${e2['style']['opacity'] = '0.7'};
                                    `);
            
                                    e2.insertAdjacentHTML('afterbegin', `<p>${e2['style']['transform']}</p>`);
            
                                    elem.addEventListener('mouseout', () => {
            
                                        propertiesCss.forEach((prop) => {
                                            e2['style'].removeProperty(prop);
                                        });
                                        
                                        (e2['children'][0].localName === 'p') && (`
                                            ${e2['children'][0].remove()};
                                        `);
                                    });
                                });
                            });
                        }
                    )()}
                `);
            });
        });

        [...document.getElementsByClassName('practice')[0]['children'][0]['children']].forEach((e) => {
            (e['className'] !== 'practice__non-interactive') && (arrDyn.push(e));
        });

        arrDyn.reverse();
        arrDyn[0]['style']['marginBottom'] = '25px';

        console.log(`робота учня: %c IHOR[honcharenko]`,
        `text-shadow: rgba(114, 105, 109, 0.98) 3px 3px 20px, rgb(87, 217, 102) -2px 5px 30px;color: white; font-size: 30px`);
    }
)();
