import { getPlaiceholder } from "plaiceholder";

const getBlurData = async (imageUrl: string) => {
  const buffer = await fetch(imageUrl).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const data = await getPlaiceholder(buffer);
  return data;
};
export { getBlurData };