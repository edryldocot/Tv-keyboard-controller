let bluetoothDevice, server, characteristic;
let lastX = 0, lastY = 0;

// 📡 BLUETOOTH CONFIG
const HID_SERVICE_UUID = "00001812-0000-1000-8000-00805f9b34fb";
const HID_REPORT_UUID  = "00002a4d-0000-1000-8000-00805f9b34fb";

// ===============================
// 🔘 SWITCH VIEW 1 & 2
// ===============================
const btn1 = document.getElementById('btn-view1');
const btn2 = document.getElementById('btn-view2');
const mouseArea = document.getElementById('mouse-area');
const optionsPanel = document.getElementById('options-panel');

btn1.addEventListener('click', () => {
    btn1.classList.add('active');
    btn2.classList.remove('active');
    mouseArea.classList.add('mouse-hidden');
    optionsPanel.classList.add('options-hidden');
});

btn2.addEventListener('click', () => {
    btn2.classList.add('active');
    btn1.classList.remove('active');
    mouseArea.classList.remove('
