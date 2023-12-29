export default function tabs() {
    // Без общего контейнера, потому что кнопки и контент раскидали по разным местам
    const heads = document.querySelectorAll<HTMLElement>('.js-tab-head[data-tab]:not([data-tab=""])');
    const bodies = [...document.querySelectorAll<HTMLElement>('.js-tab-body[data-tab]:not([data-tab=""])')];

    heads.forEach(head => {
        head.addEventListener('click', () => {
            if (!head.parentNode) return;
            const headSiblings = head.parentNode.querySelectorAll<HTMLElement>('.js-tab-head[data-tab]:not([data-tab=""])');
            headSiblings.forEach(sibling => {
                sibling.classList.remove('active');
            });

            head.classList.add('active');

            const targetBody = bodies.find(x => x.dataset.tab === head.dataset.tab);
            if (!targetBody || !targetBody.parentNode) return;

            const bodySiblings = targetBody.parentNode.querySelectorAll('.js-tab-body[data-tab]:not([data-tab=""])');
            bodySiblings.forEach(sibling => {
                sibling.classList.remove('active');
            });

            targetBody.classList.add('active');
        })
    })
}
