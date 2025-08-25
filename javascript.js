// Google Apps Script integration
const scriptUrl = "https://script.google.com/macros/s/AKfycbxjs9DrsKnhq8r9vZRetKRSnwkaYBZZ6icReM4rko5QGRjDx1GyXRpnTcEDUW4XGWrk5g/exec";

// ===============================
// Default Data Structures
// ===============================

// Sub Categories per Category
const defaultSubCategories = {
    '01': [
        {value: '01', text: '01. Pre Filter'},
        {value: '02', text: '02. Medium Filter'},
        {value: '03', text: '03. Hepa Filter'},
        {value: '04', text: '04. Ulpa Filter'},
        {value: '05', text: '05. Cartridge Filter Gasturbine'}
    ],
    '02': [
        {value: '01', text: '01. HVAC Equipment'},
        {value: '02', text: '02. Hospital'},
        {value: '03', text: '03. Accessories'}
    ],
    '03': [],
    '04': [],
    '05': [],
    '06': []
};

// Product Names by Category-SubCategory
const defaultProductNames = {
    '01-01': [
        {value: '01', text: 'NAF CR Pre Filter Washable Pleated Radial'},
        {value: '02', text: 'NAF CR Pre Filter Washable Flat'},
        {value: '03', text: 'Pre Filter NAF 30 (Disposable)'},
        {value: '04', text: 'NAF CR Pre Filter Washable Flange Type'},
        {value: '05', text: 'NAF CR Prefilter IU'},
        {value: '06', text: 'NAF Multi Pocket Filter / Medium Bag Filter'}
    ],
    '01-02': [
        {value: '01', text: 'NAF V-PAC (2V)'},
        {value: '02', text: 'NAF V Bank Carbon Filter Active 3V'},
        {value: '03', text: 'NAF V-PAC Carbon Filter'},
        {value: '04', text: 'NAF V-PAC Medium Filter'},
        {value: '05', text: 'NAF Rigid Flange Type Stainless Steel'},
        {value: '06', text: 'NAF RIGID Medium Filter'},
        {value: '07', text: 'NAF Multi Pocket Filter / Medium Bag Filter'},
        {value: '08', text: 'NAF Multi Pocket Airweb'},
        {value: '09', text: 'NAF ECO PAC Series Cardboard'},
        {value: '10', text: 'NAF ECO PAC Series Metal'},
        {value: '11', text: 'NAF PAC'},
        {value: '12', text: 'NAF PAC Wooden Frame'},
        {value: '13', text: 'Medium Filter Carbon Multi Layer (3 Stage)'}
    ],
    '01-03': [
        {value: '01', text: 'NAF Absolute MX'},
        {value: '02', text: 'NAF Absolute HEPA Minipleat XL – Deep 12 Inch'},
        {value: '03', text: 'NAF Absolute HEPA Minipleat XL – Deep 6 Inch'},
        {value: '04', text: 'NAF Absolute XL | HEPA Filter High Capacity (Aluminium Separator)'},
        {value: '05', text: 'NAF Absolute HEPA Filter Gel'},
        {value: '06', text: 'NAF Absolute HEPA V-Type'}
    ],
    '01-04': [
        {value: '01', text: 'NAF V-PAC GT'},
        {value: '02', text: 'NAF PAC GT'},
        {value: '03', text: 'NAF HP GT'},
        {value: '04', text: 'NAF 30 GT'},
        {value: '05', text: 'NAF RIGID GT'},
        {value: '06', text: 'NAF Profile Square End Cap Cartridge Filter'},
        {value: '07', text: 'NAF Profile Cylindrical Cartridge Filter'},
        {value: '08', text: 'NAF Profile Conical Cartridge Filter'},
        {value: '09', text: 'NAF Profile Spunbond Cartridge Filter'}
    ],
    '01-05': [
        {value: '01', text: 'Filter paper Media SK7538 ADWRC'},
        {value: '02', text: 'Filter Media Paper SK7538 ADWRC/HNV (Ex-China)'},
        {value: '03', text: 'Filter Media Paper type RF-3134 CWI (RF Ex-China)'},
        {value: '04', text: 'G.2260-15 AXSTAR Japan Spunbond'}
    ],
    '02-01': [
        {value: '01', text: 'Air Shower Cleanroom'},
        {value: '02', text: 'Pass Box Stainless Cleanroom'},
        {value: '03', text: 'Passbox Air Shower'},
        {value: '04', text: 'Dynamic Passbox Stainless Steel'},
        {value: '05', text: 'Laminar Air Flow / Biological Safety Cabinet (BSC)'},
        {value: '06', text: 'Economic Fan Filter Unit'},
        {value: '07', text: 'Fan Filter Unit'},
        {value: '08', text: 'Fan Filter Unit - American Louver Grille'},
        {value: '09', text: 'NAF Absolute HEPA Ceiling Module Housing Filter'},
        {value: '10', text: 'Side Access Housing Filter'},
        {value: '11', text: 'Supply Air Grille'},
        {value: '12', text: 'Swirl Diffuser Grille'}
    ],
    '02-02': [
        {value: '01', text: 'BIBO Filter Housing'},
        {value: '02', text: 'Air Purifier HEPA 3 IN 1 Unit'},
        {value: '03', text: 'Ranjang Periksa Pasien Stainless Steel'},
        {value: '04', text: 'Troll Tabung Oksigen Stainless Steel'},
        {value: '05', text: 'Meja Stainless Steel'},
        {value: '06', text: 'Rak Sepatu Industri Stainless Steel'},
        {value: '07', text: 'Troll Barang Lipat Stainless Steel'}
    ],
    '02-03': [
        {value: '01', text: 'Fan / Kipas / Blower untuk Fan Filter Unit (FFU)'},
        {value: '02', text: 'Farripulse Diaphragm Valve RMF - 45T'},
        {value: '03', text: 'Hinge Door / Engsel Pintu Jendela Passbox'},
        {value: '04', text: 'Jual Dwyer Magnchelic Original (Differential Pressure Gage)'},
        {value: '05', text: 'Jual Dwyer Minihetic II Original (Differential Pressure Gage 2)'},
        {value: '06', text: 'Motor Rotor Centrifugal Blower Air Shower'}
    ],
    '03': [],
    '04': [],
    '05': [],
    '06': []
};

const mediaOptionsBySubCategory = {
    '01': [ // Pre Filter
        {code: '01', name: 'G3 White Fabric'},
        {code: '02', name: 'G4 White Fabric'},
        {code: '03', name: 'Air Filter Media Blue'},
        {code: '04', name: 'Washable media filter non woven FNI IDN TH-350'},
        {code: '05', name: 'Washable media filter non woven 350 Sapta'},
        {code: '06', name: 'Washable Ex-China 350 FABRIC'},
        {code: '07', name: 'Washable 350G'},
        {code: '08', name: 'Washable Filter media T.15/500'},
        {code: '09', name: 'Washable Filter media 500 (sapta)'},
        {code: '10', name: 'Washable GA.160 T.14/G4'},
        {code: '11', name: 'Washable IDN 600'},
        {code: '12', name: 'Washable TH.150 T.11'},
        {code: '13', name: 'Washable VF 560 G'},
        {code: '14', name: 'Washable WF100 (Hight Temperature)'},
        {code: '15', name: 'G4 (ex china)'},
        {code: '16', name: 'AW TN40/10 size: 710 mm wide rolls (G4) Tangerding'}
    ],
    '02': [ // Medium Filter
        {code: '01', name: 'Air Filter Media; 90ASF804 (AHLSTROM) ASF Eff.95%COL'},
        {code: '02', name: 'Air Filter Media; 65ASF601 (AHLSTROM) ASF Eff.65%COL'},
        {code: '03', name: 'Air Filter Media / FibreGlass Paper F8 (China) Eff 65%'},
        {code: '04', name: 'Air Filter Media / FibreGlass Paper (Ahstrom) ADF Eff.65'},
        {code: '05', name: 'Media Filter F6 Single layer (Orange) Eff.65%'},
        {code: '06', name: 'Media Filter F7 Single layer (Pink)'},
        {code: '07', name: 'Media Filter F8 Single layer (yellow) Eff.95%'},
        {code: '08', name: 'Media Filter F.5 Double Layer (putih) eff.45%'},
        {code: '09', name: 'Media Filter F6 Double layer (Orange)'},
        {code: '10', name: 'Media Filter F7 Double layer (Pink) Eff.85%'},
        {code: '11', name: 'Media Filter F8 Double layer (yellow) Eff.95%'},
        {code: '12', name: 'Media Filter F.9 Double Layer (putih) Eff.98%'}
    ],
    '03': [ // HEPA Filter
        {code: '01', name: 'Air filter Media; HEPH1405 (AHLSTROM) 99,99%'},
        {code: '02', name: 'Air Filter Media / FibreGlass Paper H-14 (China-RF) Eff 99,996%'},
        {code: '03', name: 'Air Filter Media / FibreGlass Paper H-14 (China-Bashuo) Eff 99,996%'},
        {code: '04', name: 'Air filter Media hepa 90ASF9SP, ASHARE eff.98% (AHLSTROM)'},
        {code: '05', name: 'Synthetic Media / FibreGlass Paper H-11 Hepa (China) 95% DOP'},
        {code: '06', name: 'Air Filter Media / FibreGlass Paper H-11 (China-RF) Eff 95% DOP'}
    ],
    '04': [ // ULPA Filter
        {code: '01', name: 'Air Filter Media Ulpa / FibreGlass Paper (Ahlstrom) U15 99,999%'},
        {code: '02', name: 'Air Filter Media / FibreGlass Paper HA8603 (H&V )U15 99,999%'},
        {code: '03', name: 'Air Filter Media / FibreGlass Paper U 15 (China) 99,999%'}
    ],
    '05': [ // Cartridge Filter Gasturbine
        {code: '01', name: 'Filter paper Media SK7538 ADWRC'},
        {code: '02', name: 'Filter Media Paper SK7538 ADWRC/HNV (Ex-China)'},
        {code: '03', name: 'Filter Media Paper type. RF-3134 CWI (RF Ex-China)'},
        {code: '04', name: 'G.2260-15 AXSTAR Japan Spunbond'}
    ]
};
   // Sheet metal materials with numbered codes
        const sheetMetalMaterials = [
            {code: '01', name: "PLAT MR SS304 #0.6MM 4' X 8'"},
            {code: '02', name: "PLAT MR SS304 #0.8MM 4' X 8'"},
            {code: '03', name: "PLAT MR SS304 #1MM 4' X 8'"},
            {code: '04', name: "PLAT MR SS304 #1.2MM 4' X 8'"},
            {code: '05', name: "PLAT MR SS304 #1.5MM 4' X 8'"},
            {code: '06', name: "PLAT MR SS304 #2MM 4' X 8'"},
            {code: '07', name: "PLAT MR SS304 #3MM 4' X 8'"},
            {code: '08', name: "PLAT HL SS304 #0.8MM 4' X 8'"},
            {code: '09', name: "PLAT HL SS304 #1MM 4' X 8'"},
            {code: '10', name: "PLAT HL SS304 #1.2MM 4' X 8'"},
            {code: '11', name: "PLAT HL SS304 #1.5MM 4' X 8'"},
            {code: '12', name: "PLAT HL SS304 #2MM 4' X 8'"},
            {code: '13', name: "PLAT HL SS304 #3MM 4' X 8'"},
            {code: '14', name: "PLAT 2B SS304 #0.8MM 4' X 8'"},
            {code: '15', name: "PLAT 2B SS304 #1MM 4' X 8'"},
            {code: '16', name: "PLAT 2B SS304 #1.2MM 4' X 8'"},
            {code: '17', name: "PLAT 2B SS304 #1.5MM 4' X 8'"},
            {code: '18', name: "PLAT 2B SS304 #2MM 4' X 8'"},
            {code: '19', name: "PLAT 2B SS304 #3MM 4' X 8'"},
            {code: '20', name: "PLAT 2B SS304 #4MM 4' X 8'"},
            {code: '21', name: "PLAT 2B SS201 #0.6MM 4' X 8'"},
            {code: '22', name: "PLAT 2B SS201 #0.8MM 4' X 8'"},
            {code: '23', name: "PLAT 2B SS201 #1MM 4' X 8'"},
            {code: '24', name: "PLAT 2B SS201 #1.2MM 4' X 8'"},
            {code: '25', name: "PLAT 2B SS201 #1.5MM 4' X 8'"},
            {code: '26', name: "PLAT 2B SS201 #2MM 4' X 8'"},
            {code: '27', name: "PLAT LUBANG SS304 DIAMETER 0.8 #0.8MM 4' X 8'"},
            {code: '28', name: "PLAT LUBANG SS304 DIAMETER 8MM #0.8MM 4' X 8'"},
            {code: '29', name: "PLAT LUBANG SS304 DIAMETER 8MM #1.2MM 4' X 8'"},
            {code: '30', name: "Plat Besi Hitam 1.2mm x 4ft x 8ft (STD)"},
            {code: '31', name: "Plat Besi Hitam 1.4mm x 4ft x 8ft (S)"},
            {code: '32', name: "Plat Besi Hitam 1.5mm x 4ft x 8ft (S)"},
            {code: '33', name: "Plat Besi Hitam 1.6mm x 4ft x 8ft (S)"},
            {code: '34', name: "Plat Besi Hitam 1.8mm x 4ft x 8ft (STD)"},
            {code: '35', name: "Plat Besi Hitam 2.0mm x 4ft x 8ft (STD)"}
  ];
// ===============================
// Runtime Data & Helpers
// ===============================
const sizeCodeMaps = {};
let partNumberData = [];
let currentDataId = 1;

// ===============================
// CLOCK
// ===============================
function updateJakartaClock() {
    const now = new Date();
    const jakartaTime = now.toLocaleTimeString('id-ID',{timeZone:'Asia/Jakarta',hour12:false,hour:'2-digit',minute:'2-digit',second:'2-digit'});
    const jakartaDate = now.toLocaleDateString('id-ID',{timeZone:'Asia/Jakarta',weekday:'long',year:'numeric',month:'long',day:'numeric'});
    document.getElementById('jakarta-time').textContent = jakartaTime;
    document.getElementById('jakarta-date').textContent = jakartaDate;
}
setInterval(updateJakartaClock,1000);
updateJakartaClock();

// ===============================
// LOGIN
// ===============================
function validateLogin() {
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const errorElement=document.getElementById('loginError');
    if(username==='Farrindo'&&password==='Farrindo365'){
        document.getElementById('loginModal').style.display='none';
        document.getElementById('mainContent').style.display='block';
        return false;
    }else{
        errorElement.style.display='block';
        return false;
    }
}
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('loginModal').style.display='block';
    loadSavedOptions();
    loadPartNumberData();
});

// ===============================
// SELECT HANDLERS
// ===============================
function addOptionToSelect(selectId,value,text){
    const select=document.getElementById(selectId);
    if(select){
        const option=document.createElement('option');
        option.value=value; option.text=text;
        select.appendChild(option);
    }
}
function clearSelectOptions(selectId){
    const select=document.getElementById(selectId);
    if(select){
        while(select.options.length>1){select.remove(1);}
    }
}
function updateSubCategories(){
    const category=document.getElementById('category').value;
    const subCategorySelect=document.getElementById('subCategory');
    clearSelectOptions('subCategory'); clearSelectOptions('productName');
    const subs=defaultSubCategories[category]||[];
    subs.forEach(s=>addOptionToSelect('subCategory',s.value,s.text));
    subCategorySelect.disabled=subs.length===0;
}
function updateProductNames(){
    const key=`${document.getElementById('category').value}-${document.getElementById('subCategory').value}`;
    const productSelect=document.getElementById('productName');
    clearSelectOptions('productName');
    const products=defaultProductNames[key]||[];
    products.forEach(p=>addOptionToSelect('productName',p.value,p.text));
    productSelect.disabled=products.length===0;
}

// ===============================
// PART NUMBER
// ===============================
function generatePartNumber(){
    const category=document.getElementById('category').value;
    const subCategory=document.getElementById('subCategory').value;
    const productName=document.getElementById('productName').value;
    const material=document.getElementById('material').value;
    const length=document.getElementById('length').value;
    const width=document.getElementById('width').value;
    const height=document.getElementById('height').value;
    const keterangan=document.getElementById('keterangan')?document.getElementById('keterangan').value:"";

    if(!category||!subCategory||!productName||!material||!length||!width||!height){
        alert("Mohon isi semua field terlebih dahulu."); return;
    }
    const ukuran=`${length}x${width}x${height}`;
    let sizeCode=sizeCodeMaps[ukuran];
    if(!sizeCode){ sizeCode=`A${Object.keys(sizeCodeMaps).length+1}`; sizeCodeMaps[ukuran]=sizeCode; }

    const partNumber=[category.padStart(2,'0'),subCategory.padStart(2,'0'),productName.padStart(2,'0'),material.padStart(2,'0'),sizeCode].join(" ");

    const tbody=document.getElementById("tableBody");
    if(tbody){
        const row=document.createElement("tr");
        row.innerHTML=`<td>${currentDataId}</td><td>${partNumber}</td><td>${category}</td><td>${subCategory}</td><td>${productName}</td><td>${material}</td><td>${ukuran}</td><td>${keterangan||'-'}</td><td><button onclick="lihatData('${partNumber}')">Lihat</button></td>`;
        tbody.appendChild(row);
    }
    partNumberData.push({id:currentDataId,partNumber,category,subCategory,productName,material,ukuran,keterangan});
    currentDataId++;
    savePartNumberData();
    generateQRCode(partNumber);
}
function generateQRCode(text){
    const qrContainer=document.getElementById("qr-code");
    qrContainer.innerHTML=""; new QRCode(qrContainer,{text,width:128,height:128});
    document.getElementById("qr-text").textContent=text;
    document.getElementById("result").style.display="block";
    document.getElementById("partNumber").value=text;
    document.getElementById("qrData").value=text;
}
function lihatData(partNumber){
    fetch(scriptUrl).then(res=>res.json()).then(data=>{
        const item=data.find(d=>d.partNumber===partNumber);
        if(item){
            document.getElementById("qr-text").textContent=item.partNumber;
            document.getElementById("qr-code").innerHTML=`<img src="${item.qrImage}" alt="QR Code">`;
            document.getElementById("result").style.display="block";
            document.getElementById("partNumber").value=item.partNumber;
            document.getElementById("qrData").value=item.qrData||item.partNumber;
        }
    }).catch(err=>console.error("Error lihatData:",err));
}

// ===============================
// STORAGE
// ===============================
function savePartNumberData(){ localStorage.setItem("partNumberData",JSON.stringify(partNumberData)); }
function loadPartNumberData(){
    const saved=localStorage.getItem("partNumberData");
    if(saved){
        partNumberData=JSON.parse(saved);
        const tbody=document.getElementById("tableBody");
        if(tbody){
            tbody.innerHTML="";
            partNumberData.forEach(item=>{
                const row=document.createElement("tr");
                row.innerHTML=`<td>${item.id}</td><td>${item.partNumber}</td><td>${item.category}</td><td>${item.subCategory}</td><td>${item.productName}</td><td>${item.material}</td><td>${item.ukuran}</td><td>${item.keterangan||'-'}</td><td><button onclick="lihatData('${item.partNumber}')">Lihat</button></td>`;
                tbody.appendChild(row);
            });
            currentDataId=partNumberData.length+1;
        }
    }
}

// ===============================
// EXPORT / CLEAR
// ===============================
function exportToExcel(){
    if(partNumberData.length===0){ alert("Tidak ada data untuk diexport!"); return; }
    let table="<table border='1'><tr><th>ID</th><th>Part Number</th><th>Category</th><th>SubCategory</th><th>Product</th><th>Material</th><th>Ukuran</th><th>Keterangan</th></tr>";
    partNumberData.forEach(item=>{
        table+=`<tr><td>${item.id}</td><td>${item.partNumber}</td><td>${item.category}</td><td>${item.subCategory}</td><td>${item.productName}</td><td>${item.material}</td><td>${item.ukuran}</td><td>${item.keterangan||'-'}</td></tr>`;
    });
    table+="</table>";
    const blob=new Blob([table],{type:"application/vnd.ms-excel"});
    const link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="part_number_data.xls"; link.click();
}
function clearAllData(){
    if(confirm("Yakin ingin menghapus semua data?")){
        partNumberData=[]; currentDataId=1; localStorage.removeItem("partNumberData");
        const tbody=document.getElementById("tableBody");
        if(tbody) tbody.innerHTML=`<tr><td colspan="9" class="no-data">Belum ada data</td></tr>`;
    }
}
