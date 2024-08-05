const slider = tns({
    container: '.slider__slides',
    items: 1,
    slideBy: 'page',
    controls: false,
    responsive: {
        320: {
            autoHeight: false,
            nav: true
        },
        1120: {
            nav: false,
            autoHeight: true
        }
    }
  });

document.querySelector(".prev").addEventListener("click", () => {
    slider.goTo("prev")
})

document.querySelector(".next").addEventListener("click", () => {
    slider.goTo("next")
})

document.querySelectorAll(".catalog__tab").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll(".catalog__tab").forEach(item => item.classList.remove("catalog__tab_active"))
        item.classList.add("catalog__tab_active")
    })
})

const onChangeContent = (item) => {
    document.querySelectorAll(item).forEach(elem => elem.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = e.target.parentElement.parentElement
        parent.querySelector(".catalog-item__newcontent").classList.toggle("catalog-item__newcontent_active")
        parent.querySelector(".catalog-item__content").classList.toggle("catalog-item__content_active")
    }))
}

onChangeContent(".catalog-item__content")
onChangeContent(".catalog-item__newcontent")
