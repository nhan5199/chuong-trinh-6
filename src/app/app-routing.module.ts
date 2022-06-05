import { DienBienComponent } from './index/lichsu/comics/dien-bien/dien-bien.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanDoComponent } from './index/dialy/ban-do/ban-do.component';
import { DanhSachCauHoiComponent } from './index/dialy/danh-sach-cau-hoi/danh-sach-cau-hoi.component';
import { DiaLyHanhChinhComponent } from './index/dialy/dia-ly-hanh-chinh/dia-ly-hanh-chinh.component';
import { DiaLyKinhTeComponent } from './index/dialy/dia-ly-kinh-te/dia-ly-kinh-te.component';
import { DialyComponent } from './index/dialy/dialy.component';
import { GioiThieuComponent } from './index/dialy/gioi-thieu/gioi-thieu.component';
import { BienHoaTestComponent } from './index/dialy/tests/bien-hoa-test/bien-hoa-test.component';
import { CamMyTestComponent } from './index/dialy/tests/cam-my-test/cam-my-test.component';
import { DinhQuanTestComponent } from './index/dialy/tests/dinh-quan-test/dinh-quan-test.component';
import { LongKhanhTestComponent } from './index/dialy/tests/long-khanh-test/long-khanh-test.component';
import { LongThanhTestComponent } from './index/dialy/tests/long-thanh-test/long-thanh-test.component';
import { NhonTrachTestComponent } from './index/dialy/tests/nhon-trach-test/nhon-trach-test.component';
import { TanPhuTestComponent } from './index/dialy/tests/tan-phu-test/tan-phu-test.component';
import { ThongNhatTestComponent } from './index/dialy/tests/thong-nhat-test/thong-nhat-test.component';
import { TrangBomTestComponent } from './index/dialy/tests/trang-bom-test/trang-bom-test.component';
import { VinhCuuTestComponent } from './index/dialy/tests/vinh-cuu-test/vinh-cuu-test.component';
import { XuanLocTestComponent } from './index/dialy/tests/xuan-loc-test/xuan-loc-test.component';
import { IndexComponent } from './index/index.component';
import { ChuaDaiGiacCanvaComponent } from './index/lichsu/canvas/chua-dai-giac-canva/chua-dai-giac-canva.component';
import { DaBaChongCanvaComponent } from './index/lichsu/canvas/da-ba-chong-canva/da-ba-chong-canva.component';
import { DaiKiNiemCanvaComponent } from './index/lichsu/canvas/dai-ki-niem-canva/dai-ki-niem-canva.component';
import { DinhTanLanCanvaComponent } from './index/lichsu/canvas/dinh-tan-lan-canva/dinh-tan-lan-canva.component';
import { LaNgaCanvaComponent } from './index/lichsu/canvas/la-nga-canva/la-nga-canva.component';
import { LichSuHanhChinhCanvaComponent } from './index/lichsu/canvas/lich-su-hanh-chinh-canva/lich-su-hanh-chinh-canva.component';
import { NguyenHuuCanhCanvaComponent } from './index/lichsu/canvas/nguyen-huu-canh-canva/nguyen-huu-canh-canva.component';
import { NguyenTriPhuongCanvaComponent } from './index/lichsu/canvas/nguyen-tri-phuong-canva/nguyen-tri-phuong-canva.component';
import { TrinhHoaiDucCanvaComponent } from './index/lichsu/canvas/trinh-hoai-duc-canva/trinh-hoai-duc-canva.component';
import { DoanVanCUComponent } from './index/lichsu/comics/doan-van-cu/doan-van-cu.component';
import { NguyenHuuCanhComicComponent } from './index/lichsu/comics/nguyen-huu-canh-comic/nguyen-huu-canh-comic.component';

import { NguyenThiTonComicComponent } from './index/lichsu/comics/nguyen-thi-ton-comic/nguyen-thi-ton-comic.component';

import { TranThuongXuyenComponent } from './index/lichsu/comics/tran-thuong-xuyen/tran-thuong-xuyen.component';
import { TrinhHoaiDucComicComponent } from './index/lichsu/comics/trinh-hoai-duc-comic/trinh-hoai-duc-comic.component';

import { DanhSachDiTichComponent } from './index/lichsu/danh-sach-di-tich/danh-sach-di-tich.component';
import { DanhSachTruyenTranhComponent } from './index/lichsu/danh-sach-truyen-tranh/danh-sach-truyen-tranh.component';
import { LichsuComponent } from './index/lichsu/lichsu.component';
import { ChuaDaiGiacMuclucComponent } from './index/lichsu/mucluc/chua-dai-giac-mucluc/chua-dai-giac-mucluc.component';
import { DaBaChongMuclucComponent } from './index/lichsu/mucluc/da-ba-chong-mucluc/da-ba-chong-mucluc.component';
import { DaiKiNiemMuclucComponent } from './index/lichsu/mucluc/dai-ki-niem-mucluc/dai-ki-niem-mucluc.component';
import { DinhTanLanMuclucComponent } from './index/lichsu/mucluc/dinh-tan-lan-mucluc/dinh-tan-lan-mucluc.component';
import { LaNgaMuclucComponent } from './index/lichsu/mucluc/la-nga-mucluc/la-nga-mucluc.component';
import { LichSuHanhChinhMuclucComponent } from './index/lichsu/mucluc/lich-su-hanh-chinh-mucluc/lich-su-hanh-chinh-mucluc.component';
import { NguyenHuuCanhMuclucComponent } from './index/lichsu/mucluc/nguyen-huu-canh-mucluc/nguyen-huu-canh-mucluc.component';
import { NguyenTriPhuongMuclucComponent } from './index/lichsu/mucluc/nguyen-tri-phuong-mucluc/nguyen-tri-phuong-mucluc.component';
import { TrinhHoaiDucMuclucComponent } from './index/lichsu/mucluc/trinh-hoai-duc-mucluc/trinh-hoai-duc-mucluc.component';
import { ChuaDaiGiacVideoComponent } from './index/lichsu/videos/chua-dai-giac-video/chua-dai-giac-video.component';
import { DaBaChongVideoComponent } from './index/lichsu/videos/da-ba-chong-video/da-ba-chong-video.component';

import { DaiKiNiemVideoComponent } from './index/lichsu/videos/dai-ki-niem-video/dai-ki-niem-video.component';
import { DinhTanLanVideoComponent } from './index/lichsu/videos/dinh-tan-lan-video/dinh-tan-lan-video.component';
import { LaNgaVideoComponent } from './index/lichsu/videos/la-nga-video/la-nga-video.component';
import { LichsuhanhchinhVideoComponent } from './index/lichsu/videos/lichsuhanhchinh-video/lichsuhanhchinh-video.component';
import { NguyenHuuCanhVideoComponent } from './index/lichsu/videos/nguyen-huu-canh-video/nguyen-huu-canh-video.component';
import { NguyenTriPhuongVideoComponent } from './index/lichsu/videos/nguyen-tri-phuong-video/nguyen-tri-phuong-video.component';
import { TrinhHoaiDucVideoComponent } from './index/lichsu/videos/trinh-hoai-duc-video/trinh-hoai-duc-video.component';
import { NoiDungComponent } from './index/noi-dung/noi-dung.component';
import { AmThucComponent } from './index/tainguyen/am-thuc/am-thuc.component';
import { DuLichComponent } from './index/tainguyen/du-lich/du-lich.component';
import { HoatHinhComponent } from './index/tainguyen/hoat-hinh/hoat-hinh.component';
import { LangNgheComponent } from './index/tainguyen/lang-nghe/lang-nghe.component';
import { LeHoiComponent } from './index/tainguyen/le-hoi/le-hoi.component';
import { SachBanDoComponent } from './index/tainguyen/sach-ban-do/sach-ban-do.component';
import { SachDienTuComponent } from './index/tainguyen/sach-dien-tu/sach-dien-tu.component';
import { SachLichSuComponent } from './index/tainguyen/sach-lich-su/sach-lich-su.component';
import { SachComponent } from './index/tainguyen/sach/sach.component';
import { TainguyenComponent } from './index/tainguyen/tainguyen.component';
import { TroChoiComponent } from './index/tainguyen/tro-choi/tro-choi.component';
import { VanHoaComponent } from './index/tainguyen/van-hoa/van-hoa.component';
import { VitriComponent } from './index/vitri/vitri.component';
import { NguyenTatThanhComponent } from './index/lichsu/comics/nguyen-tat-thanh/nguyen-tat-thanh.component';
import { DuongTruongSonComponent } from './index/lichsu/comics/duong-truong-son/duong-truong-son.component';

const routes: Routes = [


      {
        path: '', component: VitriComponent
      },
      {
        path: 'vitri', component: VitriComponent
      },
      {
        path: 'noidung', component: NoiDungComponent
      },
      {
        path: 'lichsu', component: LichsuComponent
      },
      {
        path: 'dialy', component: DialyComponent
      },
      {
        path: 'tainguyen', component: TainguyenComponent
      },
      {
        path: 'gioithieu', component: GioiThieuComponent
      },
      {
        path: 'dialyhanhchinh', component: DiaLyHanhChinhComponent
      },
      {
        path: 'dialykinhte', component: DiaLyKinhTeComponent
      },
      {
        path: 'bando', component: BanDoComponent
      },
      {
        path: 'sachdiali', component: SachDienTuComponent
      },
      {
        path: 'danhsachtruyentranh', component: DanhSachTruyenTranhComponent
      },
      {
        path: 'danhsachditich', component: DanhSachDiTichComponent
      },
      {
        path: 'danhsachcauhoi', component: DanhSachCauHoiComponent
      },
      {
        path: 'nguyenhuucanh_mucluc', component: NguyenHuuCanhMuclucComponent
      },
      {
        path: 'nguyentriphuong_mucluc', component: NguyenTriPhuongMuclucComponent
      },
      {
        path: 'sachdientu', component: SachComponent
      },
      {
        path: 'sachlichsu', component: SachLichSuComponent
      },
      {
        path: 'dabachong_mucluc', component: DaBaChongMuclucComponent
      },
      {
        path: 'langa_mucluc', component: LaNgaMuclucComponent
      },
      {
        path: 'daikiniem_mucluc', component: DaiKiNiemMuclucComponent
      },
      {
        path: 'dabachong_canva', component: DaBaChongCanvaComponent
      },
      {
        path: 'chuadaigiac_canva', component: ChuaDaiGiacCanvaComponent
      },
      {
        path: 'daikiniem_canva', component: DaiKiNiemCanvaComponent
      },
      {
        path: 'langa_canva', component: LaNgaCanvaComponent
      },
      {
        path: 'dinhtanlan_canva', component: DinhTanLanCanvaComponent
      },
      {
        path: 'trinhhoaiduc_canva', component: TrinhHoaiDucCanvaComponent
      },
      {
        path: 'nguyentriphuong_canva', component: NguyenTriPhuongCanvaComponent
      },
      {
        path: 'nguyenhuucanh_canva', component: NguyenHuuCanhCanvaComponent
      },
      {
        path: 'vanhoa', component: VanHoaComponent
      },
      {
        path: 'dulich', component: DuLichComponent
      },
      {
        path: 'amthuc', component: AmThucComponent
      },
      {
        path: 'hoathinh', component: HoatHinhComponent
      },
      {
        path: 'langnghe', component: LangNgheComponent
      },
      {
        path: 'lehoi', component: LeHoiComponent
      },
      {
        path: 'trochoi', component: TroChoiComponent
      },
      {
        path: 'dabachong_video', component: DaBaChongVideoComponent
      },
      {
        path: 'langa_video', component: LaNgaVideoComponent
      },
      {
        path: 'dinhtanlan_video', component: DinhTanLanVideoComponent
      },
      {
        path: 'nguyenhuucanh_video', component: NguyenHuuCanhVideoComponent
      },
      {
        path: 'trinhhoaiduc_video', component: TrinhHoaiDucVideoComponent
      },
      {
        path: 'nguyentriphuong_video', component: NguyenTriPhuongVideoComponent
      },
      {
        path: 'daikiniem_video', component: DaiKiNiemVideoComponent
      },
      {
        path: 'nguyenhuucanh_comic', component: NguyenHuuCanhComicComponent
      },
      {
        path: 'nguyenthiton_comic', component: NguyenThiTonComicComponent
      },
      {
        path: 'tranthuongxuyen_comic', component: TranThuongXuyenComponent
      },
      {
        path: 'trinhhoaiduc_comic', component: TrinhHoaiDucComicComponent
      },
      {
        path: 'doanvancu_comic', component: DoanVanCUComponent
      },
      {
        path: 'dienbien_comic', component: DienBienComponent
      },
      {
        path: 'nguyentatthanh_comic', component: NguyenTatThanhComponent
      },
      {
        path: 'duongtruongson_comic', component: DuongTruongSonComponent
      },
      {
        path: 'trinhhoaiduc_mucluc', component: TrinhHoaiDucMuclucComponent
      },
      {
        path: 'chuadaigiac_video', component: ChuaDaiGiacVideoComponent
      },
      {
        path: 'chuadaigiac_mucluc', component: ChuaDaiGiacMuclucComponent
      },
      {
        path: 'dinhtanlan_mucluc', component: DinhTanLanMuclucComponent
      },
      {
        path: 'lichsuhanhchinh_mucluc', component: LichSuHanhChinhMuclucComponent
      },
      {
        path: 'lichsuhanhchinh_video', component: LichsuhanhchinhVideoComponent
      },
      {
        path: 'lichsuhanhchinh_canva', component: LichSuHanhChinhCanvaComponent
      },
      {
        path: 'cammy_test', component: CamMyTestComponent
      },
      {
        path: 'dinhquan_test', component: DinhQuanTestComponent
      },
      {
        path: 'longthanh_test', component: LongThanhTestComponent
      },
      {
        path: 'nhontrach_test', component: NhonTrachTestComponent
      },
      {
        path: 'tanphu_test', component: TanPhuTestComponent
      },
      {
        path: 'thongnhat_test', component: ThongNhatTestComponent
      },
      {
        path: 'trangbom_test', component: TrangBomTestComponent
      },
      {
        path: 'vinhcuu_test', component: VinhCuuTestComponent
      },
      {
        path: 'xuanloc_test', component: XuanLocTestComponent
      },
      {
        path: 'bienhoa_test', component: BienHoaTestComponent
      },
      {
        path: 'longkhanh_test', component: LongKhanhTestComponent
      },
      {
        path: 'sachbando', component: SachBanDoComponent
      }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
