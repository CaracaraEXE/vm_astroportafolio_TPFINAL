  const dropBtns = document.querySelectorAll(".dropdown-opener");

    dropBtns.forEach((btn) => {
      btn.addEventListener('click',() => {
        const subMenu = btn.nextElementSibling;
        subMenu? subMenu.classList.toggle('show') : "";
      })
    })

    console.log(dropBtns);