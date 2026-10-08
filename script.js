const pendulo = document.getElementById("pendulo");

pendulo.addEventListener("click", () => {
  // 1. estica o fio
  pendulo.classList.add("puxando");

  // 2. liga ou desliga a luz no momento do puxão
  document.body.classList.toggle("ligada");

  // 3. solta o fio depois de um instante
  setTimeout(() => {
    pendulo.classList.remove("puxando");
  }, 150);
});
