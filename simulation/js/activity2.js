function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate discharge by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Discharge", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> Find the discharge over a triangular notch of angle ${theta}<sup>o</sup>. The head over the notch is ${act2_H}mm. </h5>
        <h5>Take c<sub>d</sub> = ${act2_cd}</h5>

        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/triangular.png'></div>
        <br><br>

        <h5>Discharge</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = \\frac{8}{15} * c_d * tan(\\frac{\\theta}{2}) * \\sqrt{2g} * H^{5/2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> litre/s
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify1();'  id='temp-btn-4' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    let H_cal = act2_H / 1000;
    let tantheta_cal = Math.tan((theta * (Math.PI / 180)) / 2);
    act2_Q = (8 / 15) * act2_cd * tantheta_cal * (Math.sqrt(2 * g)) * (Math.pow(H_cal, (5 / 2)));
    act2_Q_lit = act2_Q * 1000;
}
function verify1() {
    let btn = document.getElementById('temp-btn-4');
    console.log("act2 Q = ", act2_Q);
    console.log("act2 Q in litre = ", act2_Q_lit);
    let inp1 = document.getElementById('cal03-inp');
    let sp1 = document.getElementById('cal03-val-sp');
    let inp2 = document.getElementById('cal04-inp');
    let sp2 = document.getElementById('cal04-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act2_Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act2_Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act2_Q).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act2_Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity2.js.map