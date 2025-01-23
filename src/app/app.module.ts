import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanDoComponent } from './index/dialy/ban-do/ban-do.component';
import { DialyComponent } from './index/dialy/dialy.component';
import { GioiThieuComponent } from './index/dialy/gioi-thieu/gioi-thieu.component';
import { IndexComponent } from './index/index.component';
import { LichSuHanhChinhCanvaComponent } from './index/lichsu/canvas/lich-su-hanh-chinh-canva/lich-su-hanh-chinh-canva.component';
import { DoanVanCUComponent } from './index/lichsu/comics/doan-van-cu/doan-van-cu.component';
import { NguyenThiTonComicComponent } from './index/lichsu/comics/nguyen-thi-ton-comic/nguyen-thi-ton-comic.component';
import { TranThuongXuyenComponent } from './index/lichsu/comics/tran-thuong-xuyen/tran-thuong-xuyen.component';
import { TrinhHoaiDucComicComponent } from './index/lichsu/comics/trinh-hoai-duc-comic/trinh-hoai-duc-comic.component';
import { DanhSachDiTichComponent } from './index/lichsu/danh-sach-di-tich/danh-sach-di-tich.component';
import { DanhSachTruyenTranhComponent } from './index/lichsu/danh-sach-truyen-tranh/danh-sach-truyen-tranh.component';
import { LichsuComponent } from './index/lichsu/lichsu.component';
import { ChuaDaiGiacMuclucComponent } from './index/lichsu/mucluc/chua-dai-giac-mucluc/chua-dai-giac-mucluc.component';
import { DaBaChongMuclucComponent } from './index/lichsu/mucluc/da-ba-chong-mucluc/da-ba-chong-mucluc.component';
import { DinhTanLanMuclucComponent } from './index/lichsu/mucluc/dinh-tan-lan-mucluc/dinh-tan-lan-mucluc.component';
import { LichSuHanhChinhMuclucComponent } from './index/lichsu/mucluc/lich-su-hanh-chinh-mucluc/lich-su-hanh-chinh-mucluc.component';
import { NguyenHuuCanhMuclucComponent } from './index/lichsu/mucluc/nguyen-huu-canh-mucluc/nguyen-huu-canh-mucluc.component';
import { NguyenTriPhuongMuclucComponent } from './index/lichsu/mucluc/nguyen-tri-phuong-mucluc/nguyen-tri-phuong-mucluc.component';
import { TrinhHoaiDucMuclucComponent } from './index/lichsu/mucluc/trinh-hoai-duc-mucluc/trinh-hoai-duc-mucluc.component';
import { ChuaDaiGiacVideoComponent } from './index/lichsu/videos/chua-dai-giac-video/chua-dai-giac-video.component';
import { LichsuhanhchinhVideoComponent } from './index/lichsu/videos/lichsuhanhchinh-video/lichsuhanhchinh-video.component';
import { VitriComponent } from './index/vitri/vitri.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DanhSachCauHoiComponent } from './index/dialy/danh-sach-cau-hoi/danh-sach-cau-hoi.component';
import { DiaLyHanhChinhComponent } from './index/dialy/dia-ly-hanh-chinh/dia-ly-hanh-chinh.component';
import { DiaLyKinhTeComponent } from './index/dialy/dia-ly-kinh-te/dia-ly-kinh-te.component';
import { TestComponent } from './index/dialy/tests/test.component';
import { AnswerPointComponent } from './index/gioi-thieu-chung/game/answer-point/answer-point.component';
import { GameComponent } from './index/gioi-thieu-chung/game/game.component';
import { SummaryResultComponent } from './index/gioi-thieu-chung/game/summary-result/summary-result.component';
import { GioiThieuChungVideoComponent } from './index/gioi-thieu-chung/gioi-thieu-chung-video/gioi-thieu-chung-video.component';
import { GioiThieuChungComponent } from './index/gioi-thieu-chung/gioi-thieu-chung.component';
import { HuongDanSuDungComponent } from './index/gioi-thieu-chung/huong-dan-su-dung/huong-dan-su-dung.component';
import { ChuaDaiGiacCanvaComponent } from './index/lichsu/canvas/chua-dai-giac-canva/chua-dai-giac-canva.component';
import { DaBaChongCanvaComponent } from './index/lichsu/canvas/da-ba-chong-canva/da-ba-chong-canva.component';
import { DaiKiNiemCanvaComponent } from './index/lichsu/canvas/dai-ki-niem-canva/dai-ki-niem-canva.component';
import { DinhTanLanCanvaComponent } from './index/lichsu/canvas/dinh-tan-lan-canva/dinh-tan-lan-canva.component';
import { LaNgaCanvaComponent } from './index/lichsu/canvas/la-nga-canva/la-nga-canva.component';
import { NguyenHuuCanhCanvaComponent } from './index/lichsu/canvas/nguyen-huu-canh-canva/nguyen-huu-canh-canva.component';
import { NguyenTriPhuongCanvaComponent } from './index/lichsu/canvas/nguyen-tri-phuong-canva/nguyen-tri-phuong-canva.component';
import { TrinhHoaiDucCanvaComponent } from './index/lichsu/canvas/trinh-hoai-duc-canva/trinh-hoai-duc-canva.component';
import { DienBienComponent } from './index/lichsu/comics/dien-bien/dien-bien.component';
import { DuongTruongSonComponent } from './index/lichsu/comics/duong-truong-son/duong-truong-son.component';
import { NguyenTatThanhComponent } from './index/lichsu/comics/nguyen-tat-thanh/nguyen-tat-thanh.component';
import { DaiKiNiemMuclucComponent } from './index/lichsu/mucluc/dai-ki-niem-mucluc/dai-ki-niem-mucluc.component';
import { LaNgaMuclucComponent } from './index/lichsu/mucluc/la-nga-mucluc/la-nga-mucluc.component';
import { DaBaChongVideoComponent } from './index/lichsu/videos/da-ba-chong-video/da-ba-chong-video.component';
import { DaiKiNiemVideoComponent } from './index/lichsu/videos/dai-ki-niem-video/dai-ki-niem-video.component';
import { DinhTanLanVideoComponent } from './index/lichsu/videos/dinh-tan-lan-video/dinh-tan-lan-video.component';
import { LaNgaVideoComponent } from './index/lichsu/videos/la-nga-video/la-nga-video.component';
import { NguyenHuuCanhVideoComponent } from './index/lichsu/videos/nguyen-huu-canh-video/nguyen-huu-canh-video.component';
import { NguyenTriPhuongVideoComponent } from './index/lichsu/videos/nguyen-tri-phuong-video/nguyen-tri-phuong-video.component';
import { TrinhHoaiDucVideoComponent } from './index/lichsu/videos/trinh-hoai-duc-video/trinh-hoai-duc-video.component';
import { NoiDungComponent } from './index/noi-dung/noi-dung.component';
import { RollDiceComponent } from './index/roll-dice/roll-dice.component';
import { AmThucComponent } from './index/tainguyen/am-thuc/am-thuc.component';
import { DuLichComponent } from './index/tainguyen/du-lich/du-lich.component';
import { AseanComponent } from './index/tainguyen/em-yeu-dia-li/asean/asean.component';
import { BruneiComponent } from './index/tainguyen/em-yeu-dia-li/brunei/brunei.component';
import { CampuchiaComponent } from './index/tainguyen/em-yeu-dia-li/campuchia/campuchia.component';
import { EastLesteComponent } from './index/tainguyen/em-yeu-dia-li/east-leste/east-leste.component';
import { EmYeuDiaLiComponent } from './index/tainguyen/em-yeu-dia-li/em-yeu-dia-li.component';
import { IndonesiaComponent } from './index/tainguyen/em-yeu-dia-li/indonesia/indonesia.component';
import { LaoComponent } from './index/tainguyen/em-yeu-dia-li/lao/lao.component';
import { MalaysiaComponent } from './index/tainguyen/em-yeu-dia-li/malaysia/malaysia.component';
import { MyanmarComponent } from './index/tainguyen/em-yeu-dia-li/myanmar/myanmar.component';
import { PhilippinesComponent } from './index/tainguyen/em-yeu-dia-li/philippines/philippines.component';
import { SingaporeComponent } from './index/tainguyen/em-yeu-dia-li/singapore/singapore.component';
import { ThaiLanComponent } from './index/tainguyen/em-yeu-dia-li/thai-lan/thai-lan.component';
import { VietNamComponent } from './index/tainguyen/em-yeu-dia-li/viet-nam/viet-nam.component';
import { EmYeuLichSuComponent } from './index/tainguyen/em-yeu-lich-su/em-yeu-lich-su.component';
import { HoatHinhComponent } from './index/tainguyen/hoat-hinh/hoat-hinh.component';
import { LangNgheComponent } from './index/tainguyen/lang-nghe/lang-nghe.component';
import { LeHoiComponent } from './index/tainguyen/le-hoi/le-hoi.component';
import { ListStorylineComponent } from './index/tainguyen/list-storyline/list-storyline.component';
import { StorylineItemComponent } from './index/tainguyen/list-storyline/storyline-item/storyline-item.component';
import { SachBanDoComponent } from './index/tainguyen/sach-ban-do/sach-ban-do.component';
import { SachDienTuComponent } from './index/tainguyen/sach-dien-tu/sach-dien-tu.component';
import { SachLichSuComponent } from './index/tainguyen/sach-lich-su/sach-lich-su.component';
import { SachComponent } from './index/tainguyen/sach/sach.component';
import { TainguyenComponent } from './index/tainguyen/tainguyen.component';
import { TroChoiComponent } from './index/tainguyen/tro-choi/tro-choi.component';
import { VanHoaComponent } from './index/tainguyen/van-hoa/van-hoa.component';
import { MenuItemComponent } from './shared/menu-item/menu-item.component';
import { MenuComponent } from './shared/menu/menu.component';
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
    TestComponent,
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
    ListStorylineComponent,
    StorylineItemComponent,
    MenuItemComponent,
    MenuComponent,
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
