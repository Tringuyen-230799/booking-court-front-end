export function formatVND(value: number | string) {
  if (!value) return "";
  return Number(value).toLocaleString("vi-VN");
}