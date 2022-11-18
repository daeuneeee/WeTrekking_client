export const getAge = (birth: string) => {
  const year = new Date().getFullYear();
  const userBirth = year - Number(birth?.slice(0, 4)) + 1;

  return userBirth;
};
