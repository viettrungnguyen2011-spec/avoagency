// ============================================================================
// SỐ LIỆU CHIẾN DỊCH QUẢNG CÁO THẬT
//
// Nguồn: ảnh chụp Trình quản lý quảng cáo TikTok (GMV Max), lưu trong
// src/assets/results/. Mỗi dòng ở đây phải khớp đúng với ảnh cùng tên —
// người xem bấm vào là thấy ảnh gốc, sai số là mất uy tín ngay.
//
// Đã bỏ một ảnh gần trùng (chi phí 11.493.580, ROI 14,63) vì cùng một tài
// khoản chụp cách nhau một ngày với dòng ROI 14,65 bên dưới.
//
// Các số tổng ở cuối trang được TÍNH TỪ mảng này, không gõ tay, nên sửa số
// ở đây là phần tổng tự cập nhật theo.
// ============================================================================

export interface AdResult {
  /** Trùng tên file trong src/assets/results/ */
  slug: string;
  /** Chi phí quảng cáo, đơn vị VND */
  cost: number;
  /** Số đơn hàng SKU */
  orders: number;
  /** Chi phí trung bình cho mỗi đơn, VND */
  costPerOrder: number;
  /** Doanh thu, VND */
  revenue: number;
  /** Doanh thu chia chi phí */
  roi: number;
}

export const adResults: AdResult[] = [
  { slug: 'ket-qua-1', cost: 3_631_294, orders: 107, costPerOrder: 33_937, revenue: 71_682_891, roi: 19.74 },
  { slug: 'ket-qua-2', cost: 11_392_423, orders: 674, costPerOrder: 16_903, revenue: 166_934_308, roi: 14.65 },
  { slug: 'ket-qua-3', cost: 10_882_970, orders: 2_552, costPerOrder: 4_264, revenue: 137_404_461, roi: 12.63 },
  { slug: 'ket-qua-4', cost: 1_118_903, orders: 38, costPerOrder: 29_445, revenue: 11_081_902, roi: 9.9 },
  { slug: 'ket-qua-5', cost: 16_411_568, orders: 615, costPerOrder: 26_685, revenue: 149_214_610, roi: 9.09 },
  { slug: 'ket-qua-6', cost: 1_241_705, orders: 24, costPerOrder: 51_738, revenue: 6_946_599, roi: 5.59 },
];

/** Tổng hợp toàn bộ chiến dịch. ROI gộp = tổng doanh thu / tổng chi phí,
 *  KHÔNG phải trung bình cộng các ROI — cách đó cho số cao hơn thực tế
 *  vì chiến dịch nhỏ được tính ngang chiến dịch lớn. */
export function summarise(rows: AdResult[]) {
  const cost = rows.reduce((s, r) => s + r.cost, 0);
  const revenue = rows.reduce((s, r) => s + r.revenue, 0);
  const orders = rows.reduce((s, r) => s + r.orders, 0);
  return {
    campaigns: rows.length,
    cost,
    revenue,
    orders,
    roi: cost > 0 ? revenue / cost : 0,
  };
}
