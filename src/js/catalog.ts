export default function catalog() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".catalog")
  );

  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".catalog__card")
    );

    cards.forEach((card) =>
      card.addEventListener("click", (event) => {
        if (!window.matchMedia("(max-width: 640px)").matches) {
          event.preventDefault();
          const detailsLink = element.querySelector<HTMLElement>(
            ".catalog__details-link"
          );
          const details =
            element.querySelector<HTMLElement>(".catalog__details");

          detailsLink?.classList.add("active");
          details?.classList.add("active");
        }
      })
    );

    const filtersOpen = element.querySelector<HTMLButtonElement>(
      ".catalog__filters-open"
    );
    const filtersClose = element.querySelector<HTMLElement>(
      ".catalog__filters-close"
    );

    filtersOpen?.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.add("filters-open");
    });
    filtersClose?.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.remove("filters-open");
    });

    const addToCartBtn = element.querySelector<HTMLButtonElement>(
      ".catalog__add-to-cart-btn"
    );
    const counter = element.querySelector<HTMLElement>(
      ".catalog__add-to-cart-counter"
    );

    addToCartBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      addToCartBtn?.classList.add("hidden");
      counter?.classList.add("shown");
    });

    const counterInput = element.querySelector<HTMLInputElement>(
      ".catalog__add-to-cart-counter-amount"
    );
    const minus = element.querySelector(".catalog__add-to-cart-counter-minus");
    const plus = element.querySelector(".catalog__add-to-cart-counter-plus");

    console.log(plus, minus);

    plus?.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("Clicking plus");
      if (counterInput) {
        counterInput.value = (+counterInput.value + 1).toString();
        counterInput.size = counterInput.value.length;
      }
    });
    minus?.addEventListener("click", (event) => {
      event.preventDefault();

      if (counterInput) {
        if (+counterInput.value === 1) {
          addToCartBtn?.classList.remove("hidden");
          counter?.classList.remove("shown");
          return;
        }
        counterInput.value = (+counterInput.value - 1).toString();
        counterInput.size = counterInput.value.length;
      }
    });
  });
}
