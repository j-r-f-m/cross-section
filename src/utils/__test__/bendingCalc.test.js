import { wy, fmd, sigmaMd } from "../bendingCalc";

test("wy with b=8cm / h=22cm", () => {
  expect(wy(8, 22)).toBe(645.33);
});

test("fmd with kmod=0.9/fmk=24N/mm²/gammaM=1.3", () => {
  expect(fmd(0.9, 24, 1.3)).toBe(16.62);
});

test("sigma_md with md=4.09kNm/wy=645.33cm³", () => {
  expect(sigmaMd(4.09, 645.33)).toBe(6.34);
});
