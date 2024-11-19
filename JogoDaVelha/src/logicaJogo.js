export const obterJogo = () => {
  let statusJogo = JSON.parse(localStorage.getItem("statusJogo"));

  console.log("T1 ", statusJogo);
  if (!statusJogo) {
    statusJogo = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    localStorage.setItem("statusJogo", JSON.stringify(statusJogo));
    localStorage.setItem("option", "X");
  }
  return statusJogo;
};
