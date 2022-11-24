export const numberAdd = (num1: number, num2: number) => {
  return num1 + num2;
};
export const objectAdd = (name: string, age: number, gender: any) => {
  return { name, age, gender };
};
export const getError = () => {
  throw new Error("bug!");
};
