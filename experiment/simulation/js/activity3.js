function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate discharge by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-5' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-5');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Discharge", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 3</p> <br>
        <h5>Find the discharge through a trapezoidal notch which is ${AE}m wide at the top and ${CD}m wide at the bottom and is ${h}cm in height. The head of the water on the notch is ${act3_H}cm. </h5>
        <h5>Take c<sub>d</sub>1 = ${act3_cd_trian} for triangular portion.</h5>
        <h5>Take c<sub>d</sub>2 = ${act3_cd_rect} for rectangular portion.</h5>

        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/trapezoidal.png'></div>
        <br><br>

        <h5>Discharge</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = \\frac{8}{15} * c_d1 * tan(\\frac{\\theta}{2}) * \\sqrt{2g} * H^{5/2} + \\frac{2}{3} * c_d2 * L * \\sqrt{2g} * H^{3/2}$$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> litre/s
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2();'  id='temp-btn-6' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations2();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    let H_cal = act3_H / 100;
    let h_cal = h / 100;
    let tantheta_cal = ((AE - CD) / 2) / h_cal;
    act3_Q = ((8 / 15) * act3_cd_trian * tantheta_cal * (Math.sqrt(2 * g)) * (Math.pow(H_cal, (5 / 2)))) + ((2 / 3) * act3_cd_rect * CD * (Math.sqrt(2 * g)) * (Math.pow(H_cal, (3 / 2))));
    act3_Q_lit = act3_Q * 1000;
}
function verify2() {
    let btn = document.getElementById('temp-btn-6');
    console.log("act3 Q = ", act3_Q);
    console.log("act3 Q in litre = ", act3_Q_lit);
    let inp1 = document.getElementById('cal05-inp');
    let sp1 = document.getElementById('cal05-val-sp');
    let inp2 = document.getElementById('cal06-inp');
    let sp2 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act3_Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act3_Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act3_Q).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act3_Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity4();
}
//# sourceMappingURL=activity3.js.map