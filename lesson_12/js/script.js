'use strict';
(
    () => {
        document.addEventListener('scroll', (event) => {
            [...document.getElementsByClassName('row-naviganion')].forEach((e) => {
                (event['target']['scrollingElement']['scrollTop'] === 0) && (`
                    ${e['style']['top'] = 105.4 + 'px'};
                `);
                (event['target']['scrollingElement']['scrollTop'] > 0) && (`
                    ${e['style']['top'] = 0 + 'px'};
                `);
                // console.log(event['target']['scrollingElement']['scrollTop']);
            });
        });
    }
)();