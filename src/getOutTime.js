javascript: (function() {
  const iframe = document.querySelector('iframe');
  const body = iframe.contentWindow.document.body;

  // 出社時刻
  body.querySelector('select[name="time_in_hour"]').value = 10;
  // o or 15 or 30 or 45
  body.querySelector('select[name="time_in_minute"]').value = 0;

  // 退社時刻
  body.querySelector('select[name="time_out_hour"]').value = new Date().getHours();
  // o or 15 or 30 or 45
  body.querySelector('select[name="time_out_minute"]').value = getZacMinutes(new Date().getMinutes());

  // 休憩1時間
  body.querySelector('select[name="time_break_input_hour"]').value = 1;

  // 稼働8時間
  body.querySelector('select[name="time_required_hour1"]').value = 8;
  body.querySelector('select[name="time_required_minute1"]').value = 0;

  alert('✨書き換え完了✨');

  function getZacMinutes(nowMinutes) {
    const zacSelect = [
      { option: 0, diff: 0 },
      { option: 15, diff: 0 },
      { option: 30, diff: 0},
      { option: 45, diff: 0}
    ];
  
    // 絶対値で現在時刻との差分を算出
    zacSelect.forEach((value, i) => {
      zacSelect[i].diff = Math.abs(nowMinutes - value.option);
    });
    // 昇順ソート
    zacSelect.sort((a, b) => {
      return a.diff - b.diff;
    });
  
    // 現在時刻と比較して一番近い時刻を分に入れる
    return zacSelect[0].option;
  }
})();