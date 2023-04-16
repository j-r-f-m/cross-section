/**
 * Berechnet das Widerstandsmoment W_y
 * @param {number} b breite des Querschnitts
 * @param {number} h höhe des Querschnitts
 * @returns number Widerstandsmomen W_y
 */
const wy = (b, h) => {
  console.log(b);
  return Number(((b * h ** 2) / 6).toFixed(2));
};

const fmd = (kmod, fmk, gammaM) => {
  return Number(((kmod * fmk) / gammaM).toFixed(2));
};

const sigmaMd = (currMd, currWy) => {
  const currSigmaMd = 1000 * (currMd / currWy);
  return Number(currSigmaMd.toFixed(2));
};

export { wy, fmd, sigmaMd };
