export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");

  const limited = cleaned.slice(0, 11);

  let formatted = "";
  if (limited.length > 0) {
    formatted = `+7 (${limited.slice(1, 4)}`;
  }
  if (limited.length > 4) {
    formatted += `) ${limited.slice(4, 7)}`;
  }
  if (limited.length > 7) {
    formatted += `-${limited.slice(7, 9)}`;
  }
  if (limited.length > 9) {
    formatted += `-${limited.slice(9)}`;
  }

  return formatted;
};
