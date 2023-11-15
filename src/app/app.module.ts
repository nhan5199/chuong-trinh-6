import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './layouts/menu/menu.component';
import { IndexComponent } from './index/index.component';
import { VitriComponent } from './index/vitri/vitri.component';
import { LichsuComponent } from './index/lichsu/lichsu.component';
import { DialyComponent } from './index/dialy/dialy.component';
import { DaBaChongMuclucComponent } from './index/lichsu/mucluc/da-ba-chong-mucluc/da-ba-chong-mucluc.component';
import { NguyenTriPhuongMuclucComponent } from './index/lichsu/mucluc/nguyen-tri-phuong-mucluc/nguyen-tri-phuong-mucluc.component';
import { NguyenHuuCanhMuclucComponent } from './index/lichsu/mucluc/nguyen-huu-canh-mucluc/nguyen-huu-canh-mucluc.component';
import { NguyenThiTonComicComponent } from './index/lichsu/comics/nguyen-thi-ton-comic/nguyen-thi-ton-comic.component';
import { TrinhHoaiDucComicComponent } from './index/lichsu/comics/trinh-hoai-duc-comic/trinh-hoai-duc-comic.component';
import { TrinhHoaiDucMuclucComponent } from './index/lichsu/mucluc/trinh-hoai-duc-mucluc/trinh-hoai-duc-mucluc.component';
import { ChuaDaiGiacVideoComponent } from './index/lichsu/videos/chua-dai-giac-video/chua-dai-giac-video.component';
import { ChuaDaiGiacMuclucComponent } from './index/lichsu/mucluc/chua-dai-giac-mucluc/chua-dai-giac-mucluc.component';
import { DinhTanLanMuclucComponent } from './index/lichsu/mucluc/dinh-tan-lan-mucluc/dinh-tan-lan-mucluc.component';
import { LichSuHanhChinhMuclucComponent } from './index/lichsu/mucluc/lich-su-hanh-chinh-mucluc/lich-su-hanh-chinh-mucluc.component';
import { LichsuhanhchinhVideoComponent } from './index/lichsu/videos/lichsuhanhchinh-video/lichsuhanhchinh-video.component';
import { LichSuHanhChinhCanvaComponent } from './index/lichsu/canvas/lich-su-hanh-chinh-canva/lich-su-hanh-chinh-canva.component';
import { TranThuongXuyenComponent } from './index/lichsu/comics/tran-thuong-xuyen/tran-thuong-xuyen.component';
import { DoanVanCUComponent } from './index/lichsu/comics/doan-van-cu/doan-van-cu.component';
import { DanhSachDiTichComponent } from './index/lichsu/danh-sach-di-tich/danh-sach-di-tich.component';
import { DanhSachTruyenTranhComponent } from './index/lichsu/danh-sach-truyen-tranh/danh-sach-truyen-tranh.component';
import { GioiThieuComponent } from './index/dialy/gioi-thieu/gioi-thieu.component';
import { BanDoComponent } from './index/dialy/ban-do/ban-do.component';

import { LaNgaMuclucComponent } from './index/lichsu/mucluc/la-nga-mucluc/la-nga-mucluc.component';
import { LaNgaCanvaComponent } from './index/lichsu/canvas/la-nga-canva/la-nga-canva.component';
import { LaNgaVideoComponent } from './index/lichsu/videos/la-nga-video/la-nga-video.component';
import { CamMyTestComponent } from './index/dialy/tests/cam-my-test/cam-my-test.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DinhQuanTestComponent } from './index/dialy/tests/dinh-quan-test/dinh-quan-test.component';
import { LongThanhTestComponent } from './index/dialy/tests/long-thanh-test/long-thanh-test.component';
import { NhonTrachTestComponent } from './index/dialy/tests/nhon-trach-test/nhon-trach-test.component';
import { TanPhuTestComponent } from './index/dialy/tests/tan-phu-test/tan-phu-test.component';
import { ThongNhatTestComponent } from './index/dialy/tests/thong-nhat-test/thong-nhat-test.component';
import { TrangBomTestComponent } from './index/dialy/tests/trang-bom-test/trang-bom-test.component';
import { VinhCuuTestComponent } from './index/dialy/tests/vinh-cuu-test/vinh-cuu-test.component';
import { XuanLocTestComponent } from './index/dialy/tests/xuan-loc-test/xuan-loc-test.component';
import { BienHoaTestComponent } from './index/dialy/tests/bien-hoa-test/bien-hoa-test.component';
import { LongKhanhTestComponent } from './index/dialy/tests/long-khanh-test/long-khanh-test.component';
import { DaiKiNiemMuclucComponent } from './index/lichsu/mucluc/dai-ki-niem-mucluc/dai-ki-niem-mucluc.component';
import { DaiKiNiemCanvaComponent } from './index/lichsu/canvas/dai-ki-niem-canva/dai-ki-niem-canva.component';
import { DaiKiNiemVideoComponent } from './index/lichsu/videos/dai-ki-niem-video/dai-ki-niem-video.component';
import { DanhSachCauHoiComponent } from './index/dialy/danh-sach-cau-hoi/danh-sach-cau-hoi.component';
import { DinhTanLanVideoComponent } from './index/lichsu/videos/dinh-tan-lan-video/dinh-tan-lan-video.component';
import { TainguyenComponent } from './index/tainguyen/tainguyen.component';
import { SachBanDoComponent } from './index/tainguyen/sach-ban-do/sach-ban-do.component';
import { VanHoaComponent } from './index/tainguyen/van-hoa/van-hoa.component';
import { DuLichComponent } from './index/tainguyen/du-lich/du-lich.component';
import { DaBaChongVideoComponent } from './index/lichsu/videos/da-ba-chong-video/da-ba-chong-video.component';
import { TrinhHoaiDucVideoComponent } from './index/lichsu/videos/trinh-hoai-duc-video/trinh-hoai-duc-video.component';
import { NguyenHuuCanhVideoComponent } from './index/lichsu/videos/nguyen-huu-canh-video/nguyen-huu-canh-video.component';
import { NguyenTriPhuongVideoComponent } from './index/lichsu/videos/nguyen-tri-phuong-video/nguyen-tri-phuong-video.component';
import { DaBaChongCanvaComponent } from './index/lichsu/canvas/da-ba-chong-canva/da-ba-chong-canva.component';
import { ChuaDaiGiacCanvaComponent } from './index/lichsu/canvas/chua-dai-giac-canva/chua-dai-giac-canva.component';
import { DinhTanLanCanvaComponent } from './index/lichsu/canvas/dinh-tan-lan-canva/dinh-tan-lan-canva.component';
import { NguyenHuuCanhCanvaComponent } from './index/lichsu/canvas/nguyen-huu-canh-canva/nguyen-huu-canh-canva.component';
import { TrinhHoaiDucCanvaComponent } from './index/lichsu/canvas/trinh-hoai-duc-canva/trinh-hoai-duc-canva.component';
import { NguyenTriPhuongCanvaComponent } from './index/lichsu/canvas/nguyen-tri-phuong-canva/nguyen-tri-phuong-canva.component';
import { NoiDungComponent } from './index/noi-dung/noi-dung.component';
import { DiaLyHanhChinhComponent } from './index/dialy/dia-ly-hanh-chinh/dia-ly-hanh-chinh.component';
import { DiaLyKinhTeComponent } from './index/dialy/dia-ly-kinh-te/dia-ly-kinh-te.component';
import { AmThucComponent } from './index/tainguyen/am-thuc/am-thuc.component';
import { HoatHinhComponent } from './index/tainguyen/hoat-hinh/hoat-hinh.component';
import { LeHoiComponent } from './index/tainguyen/le-hoi/le-hoi.component';
import { TroChoiComponent } from './index/tainguyen/tro-choi/tro-choi.component';
import { LangNgheComponent } from './index/tainguyen/lang-nghe/lang-nghe.component';
import { SachDienTuComponent } from './index/tainguyen/sach-dien-tu/sach-dien-tu.component';
import { SachLichSuComponent } from './index/tainguyen/sach-lich-su/sach-lich-su.component';
import { SachComponent } from './index/tainguyen/sach/sach.component';
import { DienBienComponent } from './index/lichsu/comics/dien-bien/dien-bien.component';
import { DuongTruongSonComponent } from './index/lichsu/comics/duong-truong-son/duong-truong-son.component';
import { NguyenTatThanhComponent } from './index/lichsu/comics/nguyen-tat-thanh/nguyen-tat-thanh.component';
import { RollDiceComponent } from './index/roll-dice/roll-dice.component';
import { BruneiComponent } from './index/tainguyen/em-yeu-dia-li/brunei/brunei.component';
import { EmYeuDiaLiComponent } from './index/tainguyen/em-yeu-dia-li/em-yeu-dia-li.component';
import { EmYeuLichSuComponent } from './index/tainguyen/em-yeu-lich-su/em-yeu-lich-su.component';
import { VietNamComponent } from './index/tainguyen/em-yeu-dia-li/viet-nam/viet-nam.component';
import { LaoComponent } from './index/tainguyen/em-yeu-dia-li/lao/lao.component';
import { CampuchiaComponent } from './index/tainguyen/em-yeu-dia-li/campuchia/campuchia.component';
import { ThaiLanComponent } from './index/tainguyen/em-yeu-dia-li/thai-lan/thai-lan.component';
import { IndonesiaComponent } from './index/tainguyen/em-yeu-dia-li/indonesia/indonesia.component';
import { PhilippinesComponent } from './index/tainguyen/em-yeu-dia-li/philippines/philippines.component';
import { MalaysiaComponent } from './index/tainguyen/em-yeu-dia-li/malaysia/malaysia.component';
import { SingaporeComponent } from './index/tainguyen/em-yeu-dia-li/singapore/singapore.component';
import { MyanmarComponent } from './index/tainguyen/em-yeu-dia-li/myanmar/myanmar.component';
import { EastLesteComponent } from './index/tainguyen/em-yeu-dia-li/east-leste/east-leste.component';
import { AseanComponent } from './index/tainguyen/em-yeu-dia-li/asean/asean.component';
import { GioiThieuChungComponent } from './index/gioi-thieu-chung/gioi-thieu-chung.component';
import { GioiThieuChungVideoComponent } from './index/gioi-thieu-chung/gioi-thieu-chung-video/gioi-thieu-chung-video.component';
import { HuongDanSuDungComponent } from './index/gioi-thieu-chung/huong-dan-su-dung/huong-dan-su-dung.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './index/gioi-thieu-chung/game/game.component';
import { AnswerPointComponent } from './index/gioi-thieu-chung/game/answer-point/answer-point.component';
import { SummaryResultComponent } from './index/gioi-thieu-chung/game/summary-result/summary-result.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    VitriComponent,
    DialyComponent,
    LichsuComponent,
    DaBaChongMuclucComponent,
    NguyenTriPhuongMuclucComponent,
    NguyenHuuCanhMuclucComponent,
    NguyenThiTonComicComponent,
    TrinhHoaiDucComicComponent,
    TrinhHoaiDucMuclucComponent,
    ChuaDaiGiacVideoComponent,
    ChuaDaiGiacMuclucComponent,
    DinhTanLanMuclucComponent,
    LichSuHanhChinhMuclucComponent,
    LichsuhanhchinhVideoComponent,
    LichSuHanhChinhCanvaComponent,
    TranThuongXuyenComponent,
    DoanVanCUComponent,
    DanhSachDiTichComponent,
    DanhSachTruyenTranhComponent,
    GioiThieuComponent,
    BanDoComponent,
    LaNgaMuclucComponent,
    LaNgaCanvaComponent,
    LaNgaVideoComponent,
    CamMyTestComponent,
    DinhQuanTestComponent,
    LongThanhTestComponent,
    NhonTrachTestComponent,
    TanPhuTestComponent,
    ThongNhatTestComponent,
    TrangBomTestComponent,
    VinhCuuTestComponent,
    XuanLocTestComponent,
    BienHoaTestComponent,
    LongKhanhTestComponent,
    DaiKiNiemMuclucComponent,
    DaiKiNiemCanvaComponent,
    DaiKiNiemVideoComponent,
    DanhSachCauHoiComponent,
    DinhTanLanVideoComponent,
    TainguyenComponent,
    SachBanDoComponent,
    VanHoaComponent,
    DuLichComponent,
    DaBaChongVideoComponent,
    TrinhHoaiDucVideoComponent,
    NguyenHuuCanhVideoComponent,
    NguyenTriPhuongVideoComponent,
    DaBaChongCanvaComponent,
    ChuaDaiGiacCanvaComponent,
    DinhTanLanCanvaComponent,
    NguyenHuuCanhCanvaComponent,
    TrinhHoaiDucCanvaComponent,
    NguyenTriPhuongCanvaComponent,
    NoiDungComponent,
    DiaLyHanhChinhComponent,
    DiaLyKinhTeComponent,
    AmThucComponent,
    HoatHinhComponent,
    LeHoiComponent,
    TroChoiComponent,
    LangNgheComponent,
    SachDienTuComponent,
    SachLichSuComponent,
    SachComponent,
    DienBienComponent,
    DuongTruongSonComponent,
    NguyenTatThanhComponent,
    RollDiceComponent,
    VietNamComponent,
    LaoComponent,
    CampuchiaComponent,
    ThaiLanComponent,
    IndonesiaComponent,
    PhilippinesComponent,
    MalaysiaComponent,
    SingaporeComponent,
    MyanmarComponent,
    EastLesteComponent,
    BruneiComponent,
    EmYeuDiaLiComponent,
    EmYeuLichSuComponent,
    AseanComponent,
    GioiThieuChungComponent,
    GioiThieuChungVideoComponent,
    HuongDanSuDungComponent,
    GameComponent,
    AnswerPointComponent,
    SummaryResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
