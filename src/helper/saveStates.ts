export const saveStates = (state: any, fileName = "states.json") => {
  const blob = new Blob([JSON.stringify(state)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};
