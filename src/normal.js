javascript: (function() {
    const iframe = document.querySelector('iframe');
    const body = iframe.contentWindow.document.body;

    // 出社時刻
    body.querySelector('select[name="time_in_hour"]').value = 11;
    // o or 15 or 30 or 45
    body.querySelector('select[name="time_in_minute"]').value = 30;

    // 退社時刻
    body.querySelector('select[name="time_out_hour"]').value = 19;
    // o or 15 or 30 or 45
    body.querySelector('select[name="time_out_minute"]').value = 0;

    // 休憩1時間
    body.querySelector('select[name="time_break_input_hour"]').value = 1;

    // 稼働8時間
    body.querySelector('select[name="time_required_hour1"]').value = 6;
    body.querySelector('select[name="time_required_minute1"]').value = 30;

    alert('✨書き換え完了✨');
})();
