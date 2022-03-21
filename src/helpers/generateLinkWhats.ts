export const createGenerateLinkWhats = (phone: string) => (message: string) => {
  const textApi = message.split(" ").join("%20");

  return `https://api.whatsapp.com/send?phone=${phone}&text=${textApi}`;
};
