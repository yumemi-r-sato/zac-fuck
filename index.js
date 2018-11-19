javascript: (function() {
    const iframe = document.querySelector('iframe');
    const body = iframe.contentWindow.document.body;

    // 10時に出社して19時に帰る
    body.querySelector('select[name="time_in_hour"]').value = 10;
    body.querySelector('select[name="time_out_hour"]').value = 19;

    // 休憩1時間
    body.querySelector('select[name="time_break_input_hour"]').value = 1;

    // 稼働8時間
    body.querySelector('select[name="time_required_hour1"]').value = 8;

    document.alert('✨書き換え完了✨');
})();
