var questionNumber = 0;
var data = [
    ["ミステリアスアイランド１","海底２万マイル"]
    ,["ミステリアスアイランド２","センター・オブ・ジ・アース"]
    ,["ミステリアスアイランド３","ノーチラスギフト"]
    ,["ミステリアスアイランド４","ヴォルケイニア・レストラン"]
    ,["ミステリアスアイランド５","ノーチラスギャレー"]
    ,["ミステリアスアイランド６","リフレッシュメント・ステーション"]
    ,["ミステリアスアイランド７","ハンドウォッシュ"]
    ,["ミステリアスアイランド８","メールボックス"]
    ,["ミステリアスアイランド９","公衆電話"]
    ,["ポートディスカバリー1","アクアトピア"]
    ,["ポートディスカバリー2","ニモ＆フレンズ・シーライダー"]
    ,["ポートディスカバリー3","ディズニーシー・エレクトリックレールウェイ（ポートディスカバリー）"]
    ,["ポートディスカバリー4","スカイウォッチャー・スーヴェニア"]
    ,["ポートディスカバリー5","ディスカバリーギフト"]
    ,["ポートディスカバリー6","シーサイドスナック"]
    ,["ポートディスカバリー7","ブリーズウェイ・バイツ"]
    ,["ポートディスカバリー8","ベイサイド・テイクアウト"]
    ,["ポートディスカバリー9","ホライズンベイ・レストラン"]
    ,["ロストリバーデルタ1","インディ・ジョーンズ®・アドベンチャー： クリスタルスカルの魔宮"]
    ,["ロストリバーデルタ2","ディズニーシー・トランジットスチーマーライン（ロストリバーデルタ）"]
    ,["ロストリバーデルタ3","レイジングスピリッツ"]
    ,["ロストリバーデルタ4","ソング・オブ・ミラージュ"]
    ,["ロストリバーデルタ5","“サルードス・アミーゴス！”グリーティングドック"]
    ,["ロストリバーデルタ6","ミッキー＆フレンズ・グリーティングトレイル（ミッキー）"]
    ,["ロストリバーデルタ7","ミッキー＆フレンズ・グリーティングトレイル（ミニー）"]
    ,["ロストリバーデルタ8","ミッキー＆フレンズ・グリーティングトレイル（ドナルド）"]
    ,["ロストリバーデルタ9","エクスペディション・フォトアーカイヴ"]
    ,["ロストリバーデルタ10","ペドラーズ・アウトポスト"]
    ,["ロストリバーデルタ11","ルックアウト・トレーダー"]
    ,["ロストリバーデルタ12","ロストリバーアウトフィッター"]
    ,["ロストリバーデルタ13","エクスペディション・イート"]
    ,["ロストリバーデルタ14","トロピック・アルズ"]
    ,["ロストリバーデルタ15","ミゲルズ・エルドラド・キャンティーナ"]
    ,["ロストリバーデルタ16","ユカタン・ベースキャンプ・グリル"]
    ,["ロストリバーデルタ17","ロストリバークックハウス"]
    ,["ロストリバーデルタ18","ハンガーステージ横（ポップコーン）"]
    ,["アラビアンコースト1","キャラバンカルーセル"]
    ,["アラビアンコースト2","ジャスミンのフライングカーペット"]
    ,["アラビアンコースト3","シンドバッド・ストーリーブック・ヴォヤッジ"]
    ,["アラビアンコースト4","マジックランプシアター"]
    ,["アラビアンコースト5","アグラバーマーケットプレイス"]
    ,["アラビアンコースト6","アブーズ・バザール"]
    ,["アラビアンコースト7","オープンセサミ"]
    ,["アラビアンコースト8","カスバ・フードコート"]
    ,["アラビアンコースト9","サルタンズ・オアシス"]
    ,["マーメイドラグーン1","アリエルのプレイグラウンド"]
    ,["マーメイドラグーン2","ジャンピン・ジェリーフィッシュ"]
    ,["マーメイドラグーン3","スカットルのスクーター"]
    ,["マーメイドラグーン4","フランダーのフライングフィッシュコースター"]
    ,["マーメイドラグーン5","ブローフィッシュ・バルーンレース"]
    ,["マーメイドラグーン6","マーメイドラグーンシアター"]
    ,["マーメイドラグーン7","ワールプール"]
    ,["マーメイドラグーン8","キス・デ・ガール・ファッション"]
    ,["マーメイドラグーン9","グロットフォト＆ギフト"]
    ,["マーメイドラグーン10","シータートル・スーヴェニア"]
    ,["マーメイドラグーン11","スリーピーホエール・ショップ"]
    ,["マーメイドラグーン12","マーメイドトレジャー"]
    ,["マーメイドラグーン13","マーメイドメモリー"]
    ,["マーメイドラグーン14","セバスチャンのカリプソキッチン"]
    ,["アメリカンウォーターフロント1","タートル・トーク"]
    ,["アメリカンウォーターフロント2","タワー・オブ・テラー"]
    ,["アメリカンウォーターフロント3","ディズニーシー・エレクトリックレールウェイ(アメリカンウォーターフロント)"]
    ,["アメリカンウォーターフロント4","ディズニーシー・トランジットスチーマーライン(アメリカンウォーターフロント)"]
    ,["アメリカンウォーターフロント5","トイ・ストーリー・マニア！"]
    ,["アメリカンウォーターフロント6","ビッグシティ・ヴィークル"]
    ,["アメリカンウォーターフロント7","ハロー、ニューヨーク！"]
    ,["アメリカンウォーターフロント8","ビックバンドビート"]
    ,["アメリカンウォーターフロント9","マイ・フレンド・ダッフィー"]
    ,["アメリカンウォーターフロント10","クッキー・アンのグリーティングドライブ"]
    ,["アメリカンウォーターフロント11","ヴィレッジ・グリーティングプレイス"]
    ,["アメリカンウォーターフロント12","ウォーターフロントパーク"]
    ,["アメリカンウォーターフロント13","アーント・ペグズ・ヴィレッジストア"]
    ,["アメリカンウォーターフロント14","スチームボート・ミッキーズ"]
    ,["アメリカンウォーターフロント15","スリンキー・ドッグのギフトトロリー"]
    ,["アメリカンウォーターフロント16","タワー・オブ・テラー・メモラビリア"]
    ,["アメリカンウォーターフロント17","ニュージーズ・ノベルティ"]
    ,["アメリカンウォーターフロント18","マクダックス・デパートメントストア"]
    ,["アメリカンウォーターフロント19","S.S.コロンビア・ダイニングルーム"]
    ,["アメリカンウォーターフロント20","ケープコッド・クックオフ"]
    ,["アメリカンウォーターフロント21","ケープコッド・コンフェクション"]
    ,["アメリカンウォーターフロント22","デランシー・ケータリング"]
    ,["アメリカンウォーターフロント23","テディ・ルーズヴェルト・ラウンジ"]
    ,["アメリカンウォーターフロント24","ドックサイドダイナー"]
    ,["アメリカンウォーターフロント25","ニューヨーク・デリ"]
    ,["アメリカンウォーターフロント26","バーナクル・ビルズ"]
    ,["アメリカンウォーターフロント27","ハイタイド・トリート"]
    ,["アメリカンウォーターフロント28","ハドソンリバー・ハーベスト"]
    ,["アメリカンウォーターフロント29","パパダキス・フレッシュフルーツ"]
    ,["アメリカンウォーターフロント30","リバティ・ランディング・ダイナー"]
    ,["アメリカンウォーターフロント31","レストラン櫻"]
    ,["アメリカンウォーターフロント32","レストラン櫻 テラス席"]
    ,["メディテレーニアンハーバー1","ソアリン：ファンタスティック・フライト"]
    ,["メディテレーニアンハーバー2","ディズニーシー・トランジットスチーマーライン（メディテレーニアンハーバー）"]
    ,["メディテレーニアンハーバー3","フォートレス・エクスプロレーション"]
    ,["メディテレーニアンハーバー4","ヴェネツィアン・ゴンドラ"]
    ,["メディテレーニアンハーバー5","Tip-Topイースター"]
    ,["メディテレーニアンハーバー6","イル・ポスティーノ・ステーショナリー"]
    ,["メディテレーニアンハーバー7","ヴァレンティーナズ・スウィート"]
    ,["メディテレーニアンハーバー8","ヴィラ・ドナルド・ホームショップ"]
    ,["メディテレーニアンハーバー9","ヴェネツィアン・カーニバル・マーケット"]
    ,["メディテレーニアンハーバー10","エンポーリオ"]
    ,["メディテレーニアンハーバー11","ガッレリーア・ディズニー"]
    ,["メディテレーニアンハーバー12","スプレンディード"]
    ,["メディテレーニアンハーバー13","ピッコロメルカート"]
    ,["メディテレーニアンハーバー14","フィガロズ・クロージアー"]
    ,["メディテレーニアンハーバー15","フォトグラフィカ"]
    ,["メディテレーニアンハーバー16","ベッラ・ミンニ・コレクション"]
    ,["メディテレーニアンハーバー17","マーチャント・オブ・ヴェニス・コンフェクション"]
    ,["メディテレーニアンハーバー18","ミラマーレ"]
    ,["メディテレーニアンハーバー19","リメンブランツェ"]
    ,["メディテレーニアンハーバー20","カフェ・ポルトフィーノ"]
    ,["メディテレーニアンハーバー21","ゴンドリエ・スナック"]
    ,["メディテレーニアンハーバー22","ザンビーニ・ブラザーズ・リストランテ"]
    ,["メディテレーニアンハーバー23","マゼランズ"]
    ,["メディテレーニアンハーバー24","マゼランズ・ラウンジ"]
    ,["メディテレーニアンハーバー25","マンマ・ビスコッティーズ・ベーカリー"]
    ,["メディテレーニアンハーバー26","リストランテ・ディ・カナレット"]
    ,["メディテレーニアンハーバー27","リフレスコス"]
    ,["メディテレーニアンハーバー28","ゲストリレーション"]
    ,["メディテレーニアンハーバー29","パークインフォメーションボード"]
    ,["メディテレーニアンハーバー30","中央救護室"]
    ,["メディテレーニアンハーバー31","ベビーセンター/授乳室"]
    ,["メディテレーニアンハーバー32","ベビーカー＆車イス・レンタル"]
    ,["メディテレーニアンハーバー33","迷子センター"]
    ,["メディテレーニアンハーバー34","カードバンキング（三井住友銀行）"]
    ,["メディテレーニアンハーバー35","宅配センター"]
];

//配列のシャッフル
for(var i = data.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = data[i];
    data[i] = data[r];
    data[r] = tmp;
}

document.onkeypress = enter;
function enter(){
  if( window.event.keyCode == 13 ){
    return false;
  }
}

//画面読み込み時の処理
$(window).on('load',function(){
    $('#next_question').trigger('click');
});
 
//次の問題ボタンの処理
$(document).on('click', '#next_question', function(){
    $('#mondai').text(data[questionNumber][0]);
    questionNumber++;
     //次の問題ボタンを非表示に
     $('#next_question').hide();
});

//回答ボタンの処理
$(document).on('click', '#answer_button', function(){
 
    //入力された値を持ってくる
    var inputValue = $('#input_answer').val();
 
    //配列の内容を変数に入れる
    var arrayAnswer = data[questionNumber-1][1];
 
    //入力された内容と配列の回答を比較
    if(inputValue == arrayAnswer){
        alert("正解");
         //次の問題ボタンを表示
         $('#next_question').show();
    }else{
        alert("不正解");
    }
});
