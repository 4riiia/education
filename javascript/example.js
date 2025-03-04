// دالة لإيجاد وطباعة أكبر قيمة عددية في مصفوفة
function findMaxValue(arr) {
    if (arr.length === 0) {
        console.log("المصفوفة فارغة");
        return;
    }
    let max = Math.max(...arr);
    console.log("أكبر قيمة في المصفوفة هي:", max);
}

// اختبار الدالة بمصفوفة معينة
findMaxValue([10, 45, 78, 23, 89, 5]);
