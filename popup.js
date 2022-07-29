const handleONOff = (e) => {
  console.log(e.target.checked);
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementsByClassName("switch")[0]
    .addEventListener("change", handleONOff);
});
