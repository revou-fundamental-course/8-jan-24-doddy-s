class Persegi {
    constructor() {
        this.svgKeliling = `
        <svg width="420" height="420" xmlns="http://www.w3.org/2000/svg" class="scale-50 keliling-animation">
            <g>
                <title>Layer 1</title>
                <line id="svg_5" y2="10" x2="410" y1="10" x1="10" stroke-width="2" stroke="#000" fill="none"
                    pathLength="1" />
                <line id="svg_6" y2="410" x2="410" y1="10" x1="410" stroke-width="2" stroke="#000" fill="none"
                    pathLength="1" />
                <line id="svg_7" y2="410" x2="10" y1="410" x1="410" stroke-width="2" stroke="#000" fill="none"
                    pathLength="1" />
                <line id="svg_8" y2="10" x2="10" y1="410" x1="10" stroke-width="2" stroke="#000" fill="none"
                    pathLength="1" />
            </g>
        </svg>
        `

        this.svgLuas = `
        <svg width="420" height="420" xmlns="http://www.w3.org/2000/svg" class="scale-50 luas-animation">
            <g>
                <title>Layer 1</title>
                <rect id="svg_1" height="1" width="0" y="241.5" x="164" stroke-width="2" stroke="#000" fill="none"/>
                <rect id="svg_2" height="400" width="400" y="10" x="10" stroke-width="2" stroke="#000000" fill="#000"/>
            </g>
        </svg>`

        this.svg = `
        <svg width="420" height="420" xmlns="http://www.w3.org/2000/svg">
            <g>
                <title>Layer 1</title>
                <rect stroke-width="2" id="svg_1" height="400" width="400" y="10" x="10" stroke="#000" fill="#ffffff"/>
                <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_2" y="33.5" x="194" stroke="#000" fill="#000000">sisi</text>
                <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_3" y="214.5" x="368" stroke="#000" fill="#000000">sisi</text>
                <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_4" y="201.5" x="20" stroke="#000" fill="#000000">sisi</text>
                <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_5" y="397.5" x="186" stroke="#000" fill="#000000">sisi</text>
            </g>

        </svg>`

        this.rumusKeliling = `Keliling = 4 x sisi`;
        this.rumusLuas = `Luas = sisi x sisi`;
    }

    hitungKeliling(sisi) {
        return `Keliling = 4 X ${sisi}<br/>Keliling = ${4 * sisi}`;
    }

    hitungLuas(sisi) {
        return `Luas = ${sisi} X ${sisi}<br/>Luas = ${sisi * sisi}`;
    }
}

const shapes = {
    "Persegi": new Persegi(),
}

let activeShape = "None";

function showShapePreview(selectElement) {
    activeShape = selectElement.options[selectElement.selectedIndex].value;
    console.log(activeShape)
    if (activeShape === "None") {
        document.getElementById("shape-preview").innerHTML = "";
        document.getElementById("shape-keliling").innerHTML = "";
        document.getElementById("shape-luas").innerHTML = "";
        document.getElementById('rumus-keliling').innerHTML = ""
        document.getElementById('rumus-luas').innerHTML = ""
        document.getElementById('perhitungan-keliling').innerHTML = ""
        document.getElementById('perhitungan-luas').innerHTML = ""
        return;
    }
    document.getElementById("shape-preview").innerHTML = shapes[activeShape].svg;
    document.getElementById("shape-keliling").innerHTML = shapes[activeShape].svgKeliling;
    document.getElementById("shape-luas").innerHTML = shapes[activeShape].svgLuas;

    document.getElementById('rumus-keliling').innerHTML = shapes[activeShape].rumusKeliling;
    document.getElementById('rumus-luas').innerHTML = shapes[activeShape].rumusLuas;
}

function hitung() {
    let sisi = document.getElementById('sisi').value
    console.log(sisi)

    if (activeShape === "None") {
        alert("Pilih bentuk terlebih dahulu")
        return
    }

    if (sisi === "") {
        alert("Sisi harus berupa angka dan tidak boleh kosong")
        return
    }

    document.getElementById('perhitungan-keliling').innerHTML = shapes[activeShape].hitungKeliling(sisi)
    document.getElementById('perhitungan-luas').innerHTML = shapes[activeShape].hitungLuas(sisi)
}

function reset() {
    document.getElementById('sisi').value = ""
    document.getElementById('perhitungan-keliling').innerHTML = ""
    document.getElementById('perhitungan-luas').innerHTML = ""
}