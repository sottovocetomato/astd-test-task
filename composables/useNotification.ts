export const useNotification = () => {
  const show = useState("show-notification", () => false);

  function showNotification() {
    if (show.value) return;
    show.value = true;
    setTimeout(() => (show.value = false), 2400);
  }
  return { show, showNotification };
};
