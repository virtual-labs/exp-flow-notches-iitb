function activity4() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate discharge by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act4();' id='temp-btn-7' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act4() {
    let temp_btn = document.getElementById('temp-btn-7');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Discharge", "tb4-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb4-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 4</p> <br>
        <h5>The figure shows stepped notch. Find the discharge through the notch if c<sub>d</sub> for all sections is ${act4_cd}.</h5>
        <br>

        <div style='text-align: center;'>
        <h5>L<sub>1</sub> = ${act4_L1}cm &nbsp;&nbsp;&nbsp; H<sub>1</sub> = ${act4_H1}cm</h5>
        <h5>L<sub>2</sub> = ${act4_L2}cm &nbsp;&nbsp;&nbsp; H<sub>2</sub> = ${act4_H2}cm</h5>
        <h5>L<sub>3</sub> = ${act4_L3}cm &nbsp;&nbsp;&nbsp; H<sub>3</sub> = ${act4_H3}cm</h5>
        </div>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/step.png'></div>
        <br><br>

        <h5>Discharge</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q_1 = \\frac{2}{3} * c_d * L_1 * \\sqrt{2g} * [H_1^{3/2} - H_2^{3/2}]$$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> litre/s
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q_2 = \\frac{2}{3} * c_d * L_2 * \\sqrt{2g} * [H_2^{3/2} - H_3^{3/2}]$$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> litre/s
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q_3 = \\frac{2}{3} * c_d * L_3 * \\sqrt{2g} * H_3^{3/2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span> litre/s
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = Q_1 + Q_2 + Q_3 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal13-inp'> <span id='cal13-val-sp'></span> litre/s
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify3();'  id='temp-btn-8' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations3();
    setTimeout(() => { show_step('tb4-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations3() {
    act4_Q1 = (2 / 3) * act4_cd * act4_L1 / 100 * (Math.sqrt(2 * g)) * ((Math.pow((act4_H1 / 100), (3 / 2))) - (Math.pow((act4_H2 / 100), (3 / 2))));
    act4_Q1_lit = act4_Q1 * 1000;
    act4_Q2 = (2 / 3) * act4_cd * act4_L2 / 100 * (Math.sqrt(2 * g)) * ((Math.pow((act4_H2 / 100), (3 / 2))) - (Math.pow((act4_H3 / 100), (3 / 2))));
    act4_Q2_lit = act4_Q2 * 1000;
    act4_Q3 = (2 / 3) * act4_cd * act4_L3 / 100 * (Math.sqrt(2 * g)) * (Math.pow((act4_H3 / 100), (3 / 2)));
    act4_Q3_lit = act4_Q3 * 1000;
    act4_Q_total_lit = act4_Q1_lit + act4_Q2_lit + act4_Q3_lit;
}
function verify3() {
    let btn = document.getElementById('temp-btn-8');
    console.log("act4 Q1 = ", act4_Q1);
    console.log("act4 Q1 in litre = ", act4_Q1_lit);
    console.log("act4 Q2 = ", act4_Q2);
    console.log("act4 Q2 in litre = ", act4_Q2_lit);
    console.log("act4 Q3 = ", act4_Q3);
    console.log("act4 Q3 in litre = ", act4_Q3_lit);
    console.log("act4 Total Q in litre = ", act4_Q_total_lit);
    let inp1 = document.getElementById('cal07-inp');
    let sp1 = document.getElementById('cal07-val-sp');
    let inp2 = document.getElementById('cal08-inp');
    let sp2 = document.getElementById('cal08-val-sp');
    let inp3 = document.getElementById('cal09-inp');
    let sp3 = document.getElementById('cal09-val-sp');
    let inp4 = document.getElementById('cal10-inp');
    let sp4 = document.getElementById('cal10-val-sp');
    let inp5 = document.getElementById('cal11-inp');
    let sp5 = document.getElementById('cal11-val-sp');
    let inp6 = document.getElementById('cal12-inp');
    let sp6 = document.getElementById('cal12-val-sp');
    let inp7 = document.getElementById('cal13-inp');
    let sp7 = document.getElementById('cal13-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act4_Q1.toFixed(2)))) {
        alert('Discharge 1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act4_Q1_lit.toFixed(2)))) {
        alert('Discharge 1 in litres is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(act4_Q2.toFixed(2)))) {
        alert('Discharge 2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(act4_Q2_lit.toFixed(2)))) {
        alert('Discharge 2 in litres is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(act4_Q3.toFixed(2)))) {
        alert('Discharge 3 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(2)), parseFloat(act4_Q3_lit.toFixed(2)))) {
        alert('Discharge 3 in litres is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(2)), parseFloat(act4_Q_total_lit.toFixed(2)))) {
        alert('Total Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act4_Q1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act4_Q1_lit).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(act4_Q2).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(act4_Q2_lit).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(act4_Q3).toFixed(4)}`;
    inp6.remove();
    sp6.innerText = `${(act4_Q3_lit).toFixed(4)}`;
    inp7.remove();
    sp7.innerText = `${(act4_Q_total_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    exp_complete();
}
function exp_complete() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('temp-btn-8')
    // );
    // btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity4.js.map