import { countdown } from "./countdown.js";

document.addEventListener("DOMContentLoaded", () => {
  setInterval(countdown, 1000);
  countdown();
});
