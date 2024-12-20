import { getPlaiceholder } from 'plaiceholder';

export const getImage = async (src: string) => {
 const buffer = await fetch(src).then(async (res) =>
  Buffer.from(await res.arrayBuffer())
 );
 const { base64 } = await getPlaiceholder(buffer, { size: 10 });
 return base64;
};
