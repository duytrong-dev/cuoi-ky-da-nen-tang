export function formatVND(n: number) {
  return n.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}
