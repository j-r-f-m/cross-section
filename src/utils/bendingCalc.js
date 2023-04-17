/**
 * Berechnet das Widerstandsmoment W_y
 * @param {number} b breite des Querschnitts
 * @param {number} h höhe des Querschnitts
 * @returns number Widerstandsmomen W_y
 */
const wy = (b, h) => {
  console.log("wy");
  const result = Number(((b * h ** 2) / 6).toFixed(2));
  return result;
};

const fmd = (kmod, fmk, gammaM) => {
  const result = Number(((kmod * fmk) / gammaM).toFixed(2));
  console.log("fmd");
  return result;
};

const sigmaMd = (currMd, currWy) => {
  const currSigmaMd = 1000 * (currMd / currWy);
  const currSigmaMdRounded = Number(currSigmaMd.toFixed(2));
  console.log("sigmaMd");
  return currSigmaMdRounded;
};

export { wy, fmd, sigmaMd };
