// helper.ts
export const loadStates = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const savedState = JSON.parse(reader.result as string);
        resolve(savedState);
      } catch (error) {
        reject("Failed to parse JSON.");
      }
    };

    reader.onerror = () => {
      reject("Failed to read file.");
    };

    reader.readAsText(file);
  });
};
