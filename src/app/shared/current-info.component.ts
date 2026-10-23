import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-current-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<details class="current-info">
    <summary>Thông tin địa lí cập nhật · 22/10/2026</summary>
    <p>Đồng Nai là thành phố trực thuộc Trung ương từ 30/4/2026, có diện tích
      12.737,18 km², quy mô dân số 4.491.408 người theo nghị quyết thành lập,
      với 95 đơn vị hành chính cấp xã (33 phường, 62 xã).</p>
    <p>Địa giới hiện nay bao gồm Đồng Nai và Bình Phước trước sắp xếp năm 2025.
      Bản đồ, video, sách ảnh và câu hỏi cũ bên dưới là tư liệu theo địa giới
      và thời điểm biên soạn; không dùng làm số liệu hành chính hiện hành.</p>
    <a href="https://dongnai.gov.vn/vi/news/quoc-hoi-hoi-dong-nhan-dan/quoc-hoi-chinh-thuc-thong-qua-nghi-quyet-thanh-lap-thanh-pho-dong-nai-hieu-luc-tu-30-4-2026-61152.html"
      target="_blank" rel="noopener noreferrer">Nguồn: Cổng thông tin Đồng Nai · Nghị quyết thành lập năm 2026</a>
  </details>`,
  styles: [`:host { position: absolute; top: 0; right: 0; max-width: min(100%, 720px); z-index: 2; }
    .current-info { position: relative; z-index: 1; padding: .5rem 1rem;
    color: #fff; background: #174f45; font-size: .875rem; }
    summary { cursor: pointer; } p { margin: .5rem 0; } a { color: #fff; text-decoration: underline; }`],
})
export class CurrentInfoComponent {}
